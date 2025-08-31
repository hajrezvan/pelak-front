export type PTnotFound = {
  [key: string]: PInotFound
}

export interface PInotFound {
  title: string
  beforeTitle: string
  afterTitle: string
  button: string
}

export const PDnotFound: PTnotFound = {
  "en": {
    title: "Page Not Found",
    beforeTitle: "The page ",
    afterTitle: " was not found",
    button: "Back to Home"
  },
  "ru": {
    title: "Страница не найдена",
    beforeTitle: "Страница ",
    afterTitle: " не найдена",
    button: "Назад на главную"
  },
  "ar": {
    title: "الصفحة غير موجودة",
    beforeTitle: "الصفحة ",
    afterTitle: " غير موجودة",
    button: "العودة إلى الرئيسية"
  },
  "fa": {
    title: "صفحه یافت نشد",
    beforeTitle: "صفحه ",
    afterTitle: "یافت نشد",
    button: "بازگشت به صفحه اصلی"
  }
}