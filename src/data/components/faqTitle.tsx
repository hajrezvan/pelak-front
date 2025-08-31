export type PTfaqTitle = {
  [key: string]: PIfaqTitle
}

export interface PIfaqTitle {
  title: string
}

export const PDfaqTitle: PTfaqTitle = {
  "en": {
    title: "FAQ",
  },
  "ru": {
    title: "Часто задаваемые вопросы",
  },
  "ar": {
    title: "الأسئلة الشائعة",
  },
  "fa": {
    title: "سوالات متداول",
  }
}