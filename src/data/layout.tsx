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
    about: string
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
      phoneNumber: "98-2178581122",
      login: {
        name: "Log in",
        href: "/login",
        icon: "box"
      }
    },
    footer: {
      about: "<h4 class='text-P-White'>About Us</h4><p>We specialize in providing innovative solutions for your business needs, from product sourcing to manufacturing and export. Our dedicated team is here to help you grow and succeed globally.</p>",
      phone: "Phone",
      phoneNumber: "98-2178581122",
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
      phoneNumber: "98-2178581122",
      login: {
        name: "Войти",
        href: "/login",
        icon: "box"
      }
    },
    footer: {
      about: "<h4 class='text-P-White'>О нас</h4><p>Мы специализируемся на предоставлении инновационных решений для ваших бизнес-потребностей, от поиска продуктов до производства и экспорта. Наша преданная команда здесь, чтобы помочь вам расти и добиваться успеха в глобальном масштабе.</p>",
      phone: "Телефон",
      phoneNumber: "98-2178581122",
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
      phoneNumber: "98-2178581122",
      login: {
        name: "تسجيل الدخول",
        href: "/login",
        icon: "box"
      }
    },
    footer: {
      about: "<h4 class='text-P-White'>معلومات عنا</h4><p>نحن متخصصون في تقديم حلول مبتكرة لاحتياجات عملك، من توريد المنتجات إلى التصنيع والتصدير. فريقنا المتفاني هنا لمساعدتك على النمو والنجاح عالمياً.</p>",
      phone: "الهاتف",
      phoneNumber: "98-2178581122",
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
      phoneNumber: "98-2178581122",
      login: {
        name: "ورود",
        href: "/login",
        icon: "box"
      }
    },
    footer: {
      about: "<h4 class='text-P-White'>درباره ما</h4><p>ما در ارائه راه‌حل‌های نوآورانه برای نیازهای تجاری شما تخصص داریم، از تامین محصولات گرفته تا تولید و صادرات. تیم متخصص ما اینجاست تا به شما کمک کند در سطح جهانی رشد کنید و موفق شوید.</p>",
      phone: "شماره تلفن",
      phoneNumber: "98-2178581122",
      email: "ایمیل",
      emailAddress: "info@iranexportal.com",
      address: "آدرس",
      addressLocation: "تهران، ایران",
      copyrightText: "کلیه حقوق محفوظ است.",
    }
  }
}
