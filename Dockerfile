# استفاده از Node.js 18 Alpine برای حجم کمتر
FROM node:18-alpine AS base

# نصب dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# کپی package files
COPY package.json package-lock.json* ./
# برای build کردن، همه dependencies رو نصب کن
RUN npm ci

# Build stage
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build کردن پروژه
RUN npm run build

# Production stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# ایجاد user غیر root برای امنیت
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# کپی فایل‌های build شده
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]