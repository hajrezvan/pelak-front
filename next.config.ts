import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {

	// Enable standalone output for Docker optimization
	output: 'standalone',

	// Optional: Configure image optimization
	images: {
		unoptimized: false,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: process.env.NEXT_PUBLIC_STORAGE_HOSTNAME || 'exportal.storage.c2.liara.space', // XXX : Configure your own storage hostname
				port: '',
				pathname: '/**',
			}, {
				protocol: 'https',
				hostname: 'api.majidgoodini.ir/', // XXX : Configure your own storage hostname
				port: '',
				pathname: '/**',
			}
		]
	}

};

export default withNextIntl(nextConfig);