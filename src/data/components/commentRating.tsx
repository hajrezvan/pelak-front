export type PTcommentRating = {
  [key: string]: PIcommentRating
}

export interface PIcommentRating {
  title: string
  newCommentTitle: string
  newCommentText: string
  attachFile: string
  yourRating: string
  addYourRating: string
  submitButton: string
}

export const PDcommentRating: PTcommentRating = {
  "en": {
    title: "Comment Rating",
    newCommentTitle: "New Comment",
    newCommentText: "Add your comment...",
    attachFile: "Attach File",
    yourRating: "Your Rating",
    addYourRating: "Add Your Rating",
    submitButton: "Submit",
  },
  "ru": {
    title: "Оценка комментариев",
    newCommentTitle: "Новый комментарий",
    newCommentText: "Добавьте ваш комментарий...",
    attachFile: "Прикрепить файл",
    yourRating: "Ваш рейтинг",
    addYourRating: "Добавить ваш рейтинг",
    submitButton: "Отправить",
  },
  "ar": {
    title: "تقييم التعليقات",
    newCommentTitle: "تعليق جديد",
    newCommentText: "أضف تعليقك...",
    attachFile: "إرفاق ملف",
    yourRating: "تقييمك",
    addYourRating: "أضف تقييمك",
    submitButton: "إرسال",
  },
  "fa": {
    title: "بررسی نظرات",
    newCommentTitle: "نظر جدید",
    newCommentText: "نظر خود را اضافه کنید...",
    attachFile: "آپلود فایل",
    yourRating: "رای شما",
    addYourRating: "أضف رای شما",
    submitButton: "إرسال",
  }
}