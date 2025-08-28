export type PTfaqTitleExample = {
  [key: string]: PIfaqTitle
}

export interface PIfaqTitle {
  title: string
}

export const faqTitle: PTfaqTitleExample = {
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