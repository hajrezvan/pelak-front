export type PTlayout = {
  [key: string]: PIlayout
}

export interface PIlayout {
    language: string
    lang: string
    direction: string
    main: {
      siteName: string
      url: string
      logo: {
        src: string
        alt: string
      }
      icon: {
        src: string
        alt: string
      }
    }
    header: {
      menuButtonOpen: string
      menuButtonClose: string
      phoneNumber: string
      login: {
        name: string
        href: string
        icon: string
      }
    }
    footer: {
      about: React.ReactNode
      phone: string
      phoneNumber: string
      email: string
      emailAddress: string
      address: string
      addressLocation: string
      copyrightText: string
    }
}

export const PDlayout: PTlayout = {
  "en": {
    language: "English",
    lang: "en",
    direction: "ltr",
    main: {
      siteName: "Iran Exportal",
      url: "/",
      logo: {
        src: "/Logo.png",
        alt: "iranExportal Logo",
      },
      icon: {
        src: "/favicon-192x192.png",
        alt: "iranExportal icon",
      }
    },
    header: {
      menuButtonOpen: "Open menu",
      menuButtonClose: "Close menu",
      phoneNumber: "+98-2178581122",
      login: {
        name: "Log in",
        href: "/login",
        icon: "box"
      }
    },
    footer: {
      about: (<>About Us</>),
      phone: "Phone",
      phoneNumber: "+98-2178581122",
      email: "Email",
      emailAddress: "info@iranexportal.com",
      address: "address",
      addressLocation: "Tehran, Iran",
      copyrightText: "Inc. All rights reserved.",
    }
  },
  "ru": {
    language: "Русский",
    lang: "ru",
    direction: "ltr",
    main: {
      siteName: "Iran Exportal",
      url: "/ru",
      logo: {
        src: "/Logo.png",
        alt: "Логотип Iran Exportal",
      },
      icon: {
        src: "/favicon-192x192.png",
        alt: "Иконка Iran Exportal",
      }
    },
    header: {
      menuButtonOpen: "Открыть меню",
      menuButtonClose: "Закрыть меню",
      phoneNumber: "+98-2178581122",
      login: {
        name: "Войти",
        href: "/login",
        icon: "box"
      }
    },
    footer: {
      about: (<>О нас</>),
      phone: "Телефон",
      phoneNumber: "+98-2178581122",
      email: "Почта",
      emailAddress: "info@iranexportal.com",
      address: "Адрес",
      addressLocation: "Тегеран, Иран",
      copyrightText: "Все права защищены.",
    }
  },
  "ar": {
    language: "العربية",
    lang: "ar",
    direction: "rtl",
    main: {
      siteName: "ايران اكسبورتال",
      url: "/ar",
      logo: {
        src: "/Logo.png",
        alt: "شعار ايران اكسبورتال",
      },
      icon: {
        src: "/favicon-192x192.png",
        alt: "أيقونة ايران اكسبورتال",
      }
    },
    header: {
      menuButtonOpen: "فتح القائمة",
      menuButtonClose: "إغلاق القائمة",
      phoneNumber: "+98-2178581122",
      login: {
        name: "تسجيل الدخول",
        href: "/login",
        icon: "box"
      }
    },
    footer: {
      about: (<>من نحن</>),
      phone: "الهاتف",
      phoneNumber: "+98-2178581122",
      email: "البريد الإلكتروني",
      emailAddress: "info@iranexportal.com",
      address: "العنوان",
      addressLocation: "طهران، إيران",
      copyrightText: "جميع الحقوق محفوظة.",
    }
  },
  "fa": {
    language: "فارسی",
    lang: "fa",
    direction: "rtl",
    main: {
      siteName: "ایران اکسپورتال",
      url: "/fa",
      logo: {
        src: "/Logo.png",
        alt: "لوگوی ایران اکسپورتال",
      },
      icon: {
        src: "/favicon-192x192.png",
        alt: "آیکون ایران اکسپورتال",
      }
    },
    header: {
      menuButtonOpen: "باز کردن منو",
      menuButtonClose: "بستن منو",
      phoneNumber: "+98-2178581122",
      login: {
        name: "ورود",
        href: "/login",
        icon: "box"
      }
    },
    footer: {
      about: (<>درباره ما</>),
      phone: "شماره تلفن",
      phoneNumber: "+98-2178581122",
      email: "ایمیل",
      emailAddress: "info@iranexportal.com",
      address: "آدرس",
      addressLocation: "تهران، ایران",
      copyrightText: "کلیه حقوق محفوظ است.",
    }
  }
}
