export type PThomePage = {
  [key: string]: PIhomePage
}

export interface PIhomePage {
  hero: {
    media: {
      id: number
      address: string
      alt: string
      title: string
      type: string
    }[];
    mainTitle: React.ReactNode;
    mainDescription: React.ReactNode;
    searchPlaceholder: string;
    searchButton: string;
    PopularSearchesTitle: string;
    tags: string[];
    poweredByTitle: string;
    poweredBy: {
      icon: string;
      number: string;
      text: string;
    }[];
  }
  about: {
    title: React.ReactNode;
    description: React.ReactNode;
    cards: {
      title: React.ReactNode;
    }[];
  }
  articles: {
    title: React.ReactNode;
    description: React.ReactNode;
    articles: {
      title: React.ReactNode;
      description: React.ReactNode;
      image: string;
      links: {
        text: string;
        href: string;
        title: string;
      }[];
    }[];
  }
  testimonials: {
    title: React.ReactNode;
    description: React.ReactNode;
    testimonials: {
      id: number;
      name: string;
      company: string;
      location: string;
      rating: number;
      content: React.ReactNode;
      avatar: string;
    }[];
  }
  howItWorksFaq: {
    title: string;
    subtitle: string;
    description: string;
    faqItems: {
      id: number;
      title: string;
      content: string;
    }[];
    image: string;
  }
}

export const PDhomePage: PThomePage = {
  "en": {
    hero: {
      mainTitle: (<>
        <span className='text-PC-Primary'>Iran Exportal</span> : Trusted Iran Suppliers for Global Importers
      </>),
      mainDescription: (<>
        Looking to import high-quality products directly from Iran? IranExportal makes it easy to discover and connect with verified Iranian manufacturers and suppliers. From food and textiles to machinery and raw materials - we&apos;re your gateway to Iran&apos;s industrial power.
      </>),
      searchPlaceholder: "Search for products, suppliers, or keywords...",
      searchButton: "Search",
      PopularSearchesTitle: "Popular :",
      tags: ["Saffron", "Pistachios", "Carpets"],
      poweredByTitle: "Powered by",
      poweredBy: [
        {
          icon: "bookmark",
          number: "500+",
          text: "Verified Suppliers"
        }, {
          icon: "globe",
          number: "50+",
          text: "Countries Served"
        }, {
          icon: "user",
          number: "10K+",
          text: "Happy Customers"
        }
      ],
      media: [
        {
          "id": 21,
          "address": "/video/IranExportalEN.mp4",
          "alt": "Iran Exportal video",
          "title": "Iran Exportal video",
          "type": "v"
        }, {
          "id": 6,
          "address": "/image/IranExportalVideo.png",
          "alt": "Iran Exportal Video",
          "title": "Iran Exportal Video",
          "type": "p"
        }
      ]
    },
    about: {
      title: (<>
        <span className='text-PC-PrimaryLight'>Why Work with </span> Iran Suppliers Through <span className='text-PC-PrimaryLight'>IranExportal</span>
      </>),
      description: (<>
        We&apos;re more than a directory. We&apos;re your export partner - ensuring every connection is secure, efficient, and tailored to your needs.
      </>),
      cards: [
        {
          title: (<>
            Verified suppliers and factories
          </>),
        },
        {
          title: (<>
            End-to-end support<br />
            (RFQs, logistics guidance, translation)
          </>),
        },
        {
          title: (<>
            High-quality product listings
          </>),
        },
        {
          title: (<>
            Multilingual interface<br />
            (English, Arabic, Russian, Persian)
          </>),
        }
      ]
    },
    articles: {
      title: (<>
        Iran Market: Key Insights
      </>),
      description: (<>
        Discover key insights into Iran&apos;s market — from culture to regulations — and unlock new growth opportunities with confidence.
      </>),
      articles: [
        {
          title: (<>
            How to Import Products from Iran
          </>),
          description: (<>
            Thinking about how to import products from Iran?
            <br />
            This step- by - step guide walks you through everything you need to know about import products from Iran
            <br />
            Including finding suppliers, handling logistics, and avoiding common pitfalls. ⚠️
            <br />
            To learn more about importing from Iran, check out this roadmap. . .
          </>),
          image: "/image/Getting-to-know-reputable-Iranian-suppliers.jpg",
          links: [
            { text: "Step-by-Step Guide 1", href: "/test", title: "How to Import Products from Iran - Complete Step-by-Step Guide" },
            { text: "Step-by-Step Guide 2", href: "/test", title: "How to Import Products from Iran - Complete Step-by-Step Guide" }
          ]
        },
        {
          title: (<>
            Top Iranian Products with Export Potential
          </>),
          description: (<>
            When people think of Iranian exports, they often picture carpets, pistachios, or saffron…
            <br />
            But there&apos;s so much more that Iran has to offer 🌍
            <br />
            From industrial products to niche handmade items, Iran has untapped export potential that many overlook.
            <br />
            If you&apos;re exploring promising Iranian goods for export, this guide gives you a fresh perspective
          </>),
          image: "/image/Getting-to-know-reputable-Iranian-suppliers.jpg",
          links: [
            { text: "Find Your Export Gold", href: "/test", title: "ranian export products, best Iranian goods" }
          ]
        },
        {
          title: (<>
            Successful trade begins with knowing Iran&apos;s rules
          </>),
          description: (<>
            Success in business starts with mastering the right rules 📘.
            <br />
            When you fully understand the standards and contracts involved, you&apos;ll be empowered to make smarter, confident decisions every step of the way.
            <br />
            So, it&apos;s important to take this part seriously and secure your path.
          </>),
          image: "/image/Getting-to-know-reputable-Iranian-suppliers.jpg",
          links: [
            { text: "Build your foundation right 1", href: "/test", title: "ran export rules, Iran export documents" },
            { text: "Build your foundation right 2", href: "/test", title: "ran export rules, Iran export documents" },
            { text: "Build your foundation right 3", href: "/test", title: "ran export rules, Iran export documents" }
          ]
        }
      ]
    },
    testimonials: {
      title: (<>
        What Our Customers Say
      </>),
      description: (<>
        Don&apos;t just take our word for it. Here&apos;s what international buyers say about their experience with Iran Exportal.
      </>),
      testimonials: [
        {
          id: 1,
          name: 'Ahmed Hassan',
          company: 'Global Trading Co.',
          location: 'Dubai, UAE',
          rating: 5,
          content: 'Iran Exportal has been instrumental in helping us source high-quality saffron and pistachios. The platform is user-friendly and the suppliers are reliable. We\'ve been working with them for over 2 years now.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 2,
          name: 'Sarah Johnson',
          company: 'European Imports Ltd.',
          location: 'London, UK',
          rating: 5,
          content: 'Excellent service and quality products. The verification process gives us confidence in dealing with Iranian suppliers. Highly recommended for anyone looking to import from Iran.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 3,
          name: 'Mohammed Al-Rashid',
          company: 'Middle East Trading',
          location: 'Riyadh, Saudi Arabia',
          rating: 4,
          content: 'Great platform for finding Iranian products. The communication tools are excellent and the support team is very helpful. We\'ve successfully imported carpets and ceramics.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 4,
          name: 'Elena Petrova',
          company: 'Eastern European Imports',
          location: 'Moscow, Russia',
          rating: 5,
          content: 'Iran Exportal has opened up new opportunities for us in the Iranian market. The quality of products and professionalism of suppliers exceeded our expectations.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 5,
          name: 'David Chen',
          company: 'Asia Pacific Trading',
          location: 'Singapore',
          rating: 4,
          content: 'Reliable platform with verified suppliers. The logistics support is excellent and the payment process is secure. We\'ve been importing steel and machinery successfully.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 6,
          name: 'Fatima Zahra',
          company: 'North African Exports',
          location: 'Casablanca, Morocco',
          rating: 5,
          content: 'Outstanding experience with Iran Exportal. The platform makes it easy to find and connect with quality suppliers. The customer service is exceptional.',
          avatar: '/api/placeholder/60/60'
        }
      ]
    },
    howItWorksFaq: {
      title: "How to Find Reliable Iran Suppliers",
      subtitle: "Our platform makes it easy to identify trustworthy suppliers in Iran and initiate trade quickly.",
      description: "Steps to work with Iran Exportal :",
      image: "/image/Everything-is-handled-with-transparency-speed-and-professional-communication.png",
      faqItems: [
        {
          id: 1,
          title: "1. Browse supplier categories",
          content: "At IranExportal, you can easily explore a wide range of verified Iranian suppliers across various industries. From food and textiles to industrial machinery and petrochemicals, each category is carefully organized to help you quickly and efficiently find the right manufacturers and products for your needs."
        },
        {
          id: 2,
          title: "2. Submit inquiries or RFQs",
          content: "Once you select the relevant supplier category, you can submit your inquiries or Request for Quotations (RFQs) directly to the suppliers. This feature enables you to communicate your specific requirements clearly and receive tailored, accurate responses from trusted Iranian exporters."
        },
        {
          id: 3,
          title: "3. Receive offers and negotiate terms",
          content: "After receiving your inquiries, Iranian suppliers will send you detailed offers. You can negotiate price, delivery schedules, product quality, and other terms directly with them. IranExportal supports you throughout this process to ensure you reach the best possible agreement with verified partners."
        },
        {
          id: 4,
          title: "4. Finalize and ship your order",
          content: "Once the terms are agreed upon, your order will proceed to payment, packaging, and shipment. IranExportal provides full support including logistics guidance and shipment tracking, ensuring your goods arrive on time and in excellent condition."
        }
      ]
    }
  },
  "ru": {
    hero: {
      mainTitle: (<>
        <span className='text-PC-Primary'>Iran Exportal</span> : Надежные поставщики из Ирана для мировых импортеров
      </>),
      mainDescription: (<>
        Ищете качественные продукты напрямую из Ирана? IranExportal упрощает поиск и связь с проверенными иранскими производителями и поставщиками. От продуктов питания и текстиля до машин и сырья - мы ваш путь к промышленной мощи Ирана.
      </>),
      searchPlaceholder: "Поиск продуктов, поставщиков или ключевых слов...",
      searchButton: "Поиск",
      PopularSearchesTitle: "Популярные :",
      tags: ["Шафран", "Фисташки", "Ковры"],
      poweredByTitle: "Мощность",
      poweredBy: [
        {
          icon: "bookmark",
          number: "500+",
          text: "Проверенных поставщиков"
        }, {
          icon: "globe",
          number: "50+",
          text: "Обслуживаемых стран"
        }, {
          icon: "user",
          number: "10K+",
          text: "Довольных клиентов"
        }
      ],
      media: [
        {
          "id": 21,
          "address": "/video/IranExportalRU.mp4",
          "alt": "Iran Exportal video",
          "title": "Iran Exportal video",
          "type": "v"
        }, {
          "id": 6,
          "address": "/image/IranExportalVideo.png",
          "alt": "Iran Exportal Video",
          "title": "Iran Exportal Video",
          "type": "p"
        }
      ]
    },
    about: {
      title: (<>
        <span className='text-PC-PrimaryLight'>Почему стоит работать с </span> поставщиками из Ирана через <span className='text-PC-PrimaryLight'>IranExportal</span>
      </>),
      description: (<>
        Мы больше, чем каталог. Мы ваш экспортный партнер - обеспечиваем безопасность, эффективность и индивидуальный подход к каждому соединению.
      </>),
      cards: [
        {
          title: (<>
            Проверенные поставщики и фабрики
          </>),
        },
        {
          title: (<>
            Полная поддержка<br />
            (ЗПП, логистическое руководство, перевод)
          </>),
        },
        {
          title: (<>
            Высококачественные списки продуктов
          </>),
        },
        {
          title: (<>
            Многоязычный интерфейс<br />
            (Английский, арабский, русский, персидский)
          </>),
        }
      ]
    },
    articles: {
      title: (<>
        Рынок Ирана: Ключевые инсайты
      </>),
      description: (<>
        Откройте ключевые инсайты рынка Ирана — от культуры до регулирования — и уверенно откройте новые возможности роста.
      </>),
      articles: [
        {
          title: (<>
            Как импортировать продукты из Ирана
          </>),
          description: (<>
            Думаете о том, как импортировать продукты из Ирана?
            <br />
            Это пошаговое руководство проведет вас через все, что нужно знать об импорте продуктов из Ирана
            <br />
            Включая поиск поставщиков, управление логистикой и избежание распространенных ошибок. ⚠️
            <br />
            Чтобы узнать больше об импорте из Ирана, ознакомьтесь с этой дорожной картой. . .
          </>),
          image: "/image/Getting-to-know-reputable-Iranian-suppliers.jpg",
          links: [
            { text: "Пошаговое руководство 1", href: "/test", title: "Как импортировать продукты из Ирана - Полное пошаговое руководство" },
            { text: "Пошаговое руководство 2", href: "/test", title: "Как импортировать продукты из Ирана - Полное пошаговое руководство" }
          ]
        },
        {
          title: (<>
            Топ иранских продуктов с экспортным потенциалом
          </>),
          description: (<>
            Когда люди думают об иранском экспорте, они часто представляют ковры, фисташки или шафран…
            <br />
            Но Иран может предложить гораздо больше 🌍
            <br />
            От промышленных продуктов до нишевых ручных изделий, у Ирана есть неиспользованный экспортный потенциал, который многие упускают из виду.
            <br />
            Если вы исследуете перспективные иранские товары для экспорта, это руководство даст вам свежий взгляд
          </>),
          image: "/image/Getting-to-know-reputable-Iranian-suppliers.jpg",
          links: [
            { text: "Найдите свой экспортный золотой рудник", href: "/test", title: "иранские экспортные продукты, лучшие иранские товары" }
          ]
        },
        {
          title: (<>
            Успешная торговля начинается со знания правил Ирана
          </>),
          description: (<>
            Успех в бизнесе начинается с освоения правильных правил 📘.
            <br />
            Когда вы полностью понимаете задействованные стандарты и контракты, вы сможете принимать более умные и уверенные решения на каждом шаге.
            <br />
            Поэтому важно серьезно относиться к этой части и обеспечить свой путь.
          </>),
          image: "/image/Getting-to-know-reputable-Iranian-suppliers.jpg",
          links: [
            { text: "Постройте свой фундамент правильно 1", href: "/test", title: "правила экспорта Ирана, документы экспорта Ирана" },
            { text: "Постройте свой фундамент правильно 2", href: "/test", title: "правила экспорта Ирана, документы экспорта Ирана" },
            { text: "Постройте свой фундамент правильно 3", href: "/test", title: "правила экспорта Ирана, документы экспорта Ирана" }
          ]
        }
      ]
    },
    testimonials: {
      title: (<>
        Что говорят наши клиенты
      </>),
      description: (<>
        Не верьте нам на слово. Вот что говорят международные покупатели о своем опыте работы с Iran Exportal.
      </>),
      testimonials: [
        {
          id: 1,
          name: 'Ахмед Хасан',
          company: 'Global Trading Co.',
          location: 'Дубай, ОАЭ',
          rating: 5,
          content: 'Iran Exportal сыграл ключевую роль в помощи нам найти высококачественный шафран и фисташки. Платформа удобна в использовании, а поставщики надежны. Мы работаем с ними уже более 2 лет.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 2,
          name: 'Сара Джонсон',
          company: 'European Imports Ltd.',
          location: 'Лондон, Великобритания',
          rating: 5,
          content: 'Отличный сервис и качественные продукты. Процесс верификации дает нам уверенность в работе с иранскими поставщиками. Очень рекомендую всем, кто хочет импортировать из Ирана.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 3,
          name: 'Мохаммед Аль-Рашид',
          company: 'Middle East Trading',
          location: 'Эр-Рияд, Саудовская Аравия',
          rating: 4,
          content: 'Отличная платформа для поиска иранских продуктов. Инструменты коммуникации превосходны, а команда поддержки очень полезна. Мы успешно импортировали ковры и керамику.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 4,
          name: 'Елена Петрова',
          company: 'Eastern European Imports',
          location: 'Москва, Россия',
          rating: 5,
          content: 'Iran Exportal открыл для нас новые возможности на иранском рынке. Качество продуктов и профессионализм поставщиков превзошли наши ожидания.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 5,
          name: 'Дэвид Чен',
          company: 'Asia Pacific Trading',
          location: 'Сингапур',
          rating: 4,
          content: 'Надежная платформа с проверенными поставщиками. Логистическая поддержка отличная, а процесс оплаты безопасен. Мы успешно импортировали сталь и машины.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 6,
          name: 'Фатима Захра',
          company: 'North African Exports',
          location: 'Касабланка, Марокко',
          rating: 5,
          content: 'Превосходный опыт с Iran Exportal. Платформа упрощает поиск и связь с качественными поставщиками. Обслуживание клиентов исключительное.',
          avatar: '/api/placeholder/60/60'
        }
      ]
    },
    howItWorksFaq: {
      title: "Как найти надежных поставщиков в Иране",
      subtitle: "Наша платформа упрощает поиск надежных поставщиков в Иране и быстрый запуск торговли.",
      description: "Шаги для работы с Iran Exportal:",
      image: "/image/Everything-is-handled-with-transparency-speed-and-professional-communication.png",
      faqItems: [
        {
          id: 1,
          title: "1. Просмотр категорий поставщиков",
          content: "В IranExportal вы можете легко изучить широкий спектр проверенных иранских поставщиков в различных отраслях. От продуктов питания и текстиля до промышленного оборудования и нефтехимии, каждая категория тщательно организована, чтобы помочь вам быстро и эффективно найти нужных производителей и продукты для ваших потребностей."
        },
        {
          id: 2,
          title: "2. Отправка запросов или RFQ",
          content: "После выбора соответствующей категории поставщика вы можете отправить свои запросы или Запросы цен (RFQ) напрямую поставщикам. Эта функция позволяет вам четко сообщать о ваших конкретных требованиях и получать индивидуальные, точные ответы от проверенных иранских экспортеров."
        },
        {
          id: 3,
          title: "3. Получение предложений и согласование условий",
          content: "После получения ваших запросов иранские поставщики отправят вам детальные предложения. Вы можете согласовывать цену, графики доставки, качество продукции и другие условия напрямую с ними. IranExportal поддерживает вас на протяжении всего этого процесса, чтобы обеспечить достижение наилучшего возможного соглашения с проверенными партнерами."
        },
        {
          id: 4,
          title: "4. Завершение и отправка заказа",
          content: "После согласования условий ваш заказ перейдет к оплате, упаковке и отправке. IranExportal предоставляет полную поддержку, включая логистическое руководство и отслеживание отправлений, обеспечивая своевременное прибытие ваших товаров в отличном состоянии."
        }
      ]
    }
  },
  "ar": {
    hero: {
      mainTitle: (<>
        <span className='text-PC-Primary'>Iran Exportal</span> : موردون إيرانيون موثوقون للمستوردين العالميين
      </>),
      mainDescription: (<>
        تبحث عن استيراد منتجات عالية الجودة مباشرة من إيران؟ IranExportal يسهل عليك اكتشاف والاتصال بالشركات المصنعة والموردين الإيرانيين المعتمدين. من الأغذية والمنسوجات إلى الآلات والمواد الخام - نحن بوابتك إلى القوة الصناعية الإيرانية.
      </>),
      searchPlaceholder: "البحث عن المنتجات أو الموردين أو الكلمات المفتاحية...",
      searchButton: "بحث",
      PopularSearchesTitle: "البحث:",
      tags: ["زعفران", "فستق", "سجاد"],
      poweredByTitle: "تمتد من خلال",
      poweredBy: [
        {
          icon: "bookmark",
          number: "500+",
          text: "مورد معتمد"
        }, {
          icon: "globe",
          number: "50+",
          text: "بلد يتم خدمتها"
        }, {
          icon: "user",
          number: "10K+",
          text: "عميل سعيد"
        }
      ],
      media: [
        {
          "id": 21,
          "address": "/video/IranExportalAR.mp4",
          "alt": "Iran Exportal video",
          "title": "Iran Exportal video",
          "type": "v"
        }, {
          "id": 6,
          "address": "/image/IranExportalVideo.png",
          "alt": "Iran Exportal Video",
          "title": "Iran Exportal Video",
          "type": "p"
        }
      ]
    },
    about: {
      title: (<>
        <span className='text-PC-PrimaryLight'>لماذا العمل مع </span> الموردين الإيرانيين من خلال <span className='text-PrimaryLight'>IranExportal</span>
      </>),
      description: (<>
        نحن أكثر من دليل. نحن شريكك في التصدير - نضمن أن كل اتصال آمن وفعال ومخصص لاحتياجاتك.
      </>),
      cards: [
        {
          title: (<>
            موردون ومصانع معتمدون
          </>),
        },
        {
          title: (<>
            دعم شامل<br />
            (طلبات عروض الأسعار، إرشادات لوجستية، ترجمة)
          </>),
        },
        {
          title: (<>
            قوائم منتجات عالية الجودة
          </>),
        },
        {
          title: (<>
            واجهة متعددة اللغات<br />
            (الإنجليزية، العربية، الروسية، الفارسية)
          </>),
        }
      ]
    },
    articles: {
      title: (<>
        السوق الإيراني: رؤى أساسية
      </>),
      description: (<>
        اكتشف الرؤى الأساسية في السوق الإيراني — من الثقافة إلى اللوائح — وافتح فرص نمو جديدة بثقة.
      </>),
      articles: [
        {
          title: (<>
            كيفية استيراد المنتجات من إيران
          </>),
          description: (<>
            تفكر في كيفية استيراد المنتجات من إيران؟
            <br />
            هذا الدليل خطوة بخطوة يأخذك عبر كل ما تحتاج لمعرفته عن استيراد المنتجات من إيران
            <br />
            بما في ذلك العثور على الموردين والتعامل مع اللوجستية وتجنب الأخطاء الشائعة. ⚠️
            <br />
            لمعرفة المزيد عن الاستيراد من إيران، تحقق من خارطة الطريق هذه. . .
          </>),
          image: "/image/Getting-to-know-reputable-Iranian-suppliers.jpg",
          links: [
            { text: "دليل خطوة بخطوة 1", href: "/test", title: "كيفية استيراد المنتجات من إيران - دليل شامل خطوة بخطوة" },
            { text: "دليل خطوة بخطوة 2", href: "/test", title: "كيفية استيراد المنتجات من إيران - دليل شامل خطوة بخطوة" }
          ]
        },
        {
          title: (<>
            أفضل المنتجات الإيرانية ذات الإمكانات التصديرية
          </>),
          description: (<>
            عندما يفكر الناس في الصادرات الإيرانية، غالباً ما يتخيلون السجاد أو الفستق أو الزعفران…
            <br />
            لكن هناك الكثير مما يمكن أن تقدمه إيران 🌍
            <br />
            من المنتجات الصناعية إلى العناصر اليدوية المتخصصة، لدى إيران إمكانات تصديرية غير مستغلة يتجاهلها الكثيرون.
            <br />
            إذا كنت تستكشف السلع الإيرانية الواعدة للتصدير، فإن هذا الدليل يمنحك منظوراً جديداً
          </>),
          image: "/image/Getting-to-know-reputable-Iranian-suppliers.jpg",
          links: [
            { text: "اعثر على ذهب التصدير الخاص بك", href: "/test", title: "المنتجات التصديرية الإيرانية، أفضل السلع الإيرانية" }
          ]
        },
        {
          title: (<>
            التجارة الناجحة تبدأ بمعرفة قواعد إيران
          </>),
          description: (<>
            النجاح في الأعمال يبدأ بإتقان القواعد الصحيحة 📘.
            <br />
            عندما تفهم تماماً المعايير والعقود المعنية، ستتمكن من اتخاذ قرارات أكثر ذكاءً وثقة في كل خطوة على الطريق.
            <br />
            لذلك، من المهم أن تأخذ هذا الجزء بجدية وتأمين مسارك.
          </>),
          image: "/image/Getting-to-know-reputable-Iranian-suppliers.jpg",
          links: [
            { text: "ابن أساسك بشكل صحيح 1", href: "/test", title: "قواعد تصدير إيران، وثائق تصدير إيران" },
            { text: "ابن أساسك بشكل صحيح 2", href: "/test", title: "قواعد تصدير إيران، وثائق تصدير إيران" },
            { text: "ابن أساسك بشكل صحيح 3", href: "/test", title: "قواعد تصدير إيران، وثائق تصدير إيران" }
          ]
        }
      ]
    },
    testimonials: {
      title: (<>
        ما يقوله عملاؤنا
      </>),
      description: (<>
        لا تأخذ كلمتنا فقط. إليك ما يقوله المشترون الدوليون عن تجربتهم مع Iran Exportal.
      </>),
      testimonials: [
        {
          id: 1,
          name: 'أحمد حسن',
          company: 'Global Trading Co.',
          location: 'دبي، الإمارات',
          rating: 5,
          content: 'لعب Iran Exportal دوراً أساسياً في مساعدتنا في الحصول على زعفران وفستق عالي الجودة. المنصة سهلة الاستخدام والموردون موثوقون. نعمل معهم منذ أكثر من عامين الآن.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 2,
          name: 'سارة جونسون',
          company: 'European Imports Ltd.',
          location: 'لندن، المملكة المتحدة',
          rating: 5,
          content: 'خدمة ممتازة ومنتجات عالية الجودة. عملية التحقق تمنحنا ثقة في التعامل مع الموردين الإيرانيين. موصى به بشدة لأي شخص يبحث عن الاستيراد من إيران.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 3,
          name: 'محمد الرشيد',
          company: 'Middle East Trading',
          location: 'الرياض، السعودية',
          rating: 4,
          content: 'منصة رائعة للعثور على المنتجات الإيرانية. أدوات التواصل ممتازة وفريق الدعم مفيد جداً. استوردنا بنجاح السجاد والسيراميك.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 4,
          name: 'إيلينا بتروفا',
          company: 'Eastern European Imports',
          location: 'موسكو، روسيا',
          rating: 5,
          content: 'فتح لنا Iran Exportal فرصاً جديدة في السوق الإيراني. جودة المنتجات واحترافية الموردين تجاوزت توقعاتنا.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 5,
          name: 'ديوید تشین',
          company: 'Asia Pacific Trading',
          location: 'سنغافورة',
          rating: 4,
          content: 'منصة موثوقة مع موردين معتمدين. الدعم اللوجستي ممتاز وعملية الدفع آمنة. استوردنا بنجاح الصلب والآلات.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 6,
          name: 'فاطمة الزهراء',
          company: 'North African Exports',
          location: 'الدار البيضاء، المغرب',
          rating: 5,
          content: 'تجربة استثنائية مع Iran Exportal. المنصة تسهل العثور على الموردين الجيدين والاتصال بهم. خدمة العملاء استثنائية.',
          avatar: '/api/placeholder/60/60'
        }
      ]
    },
    howItWorksFaq: {
      title: "كيفية العثور على موردين إيرانيين موثوقين",
      subtitle: "منصتنا تجعل من السهل تحديد موردين موثوقين في إيران وبدء التجارة بسرعة.",
      description: "خطوات العمل مع إيران إكسبورتال:",
      image: "/image/Everything-is-handled-with-transparency-speed-and-professional-communication.png",
      faqItems: [
        {
          id: 1,
          title: "١. تصفح فئات الموردين",
          content: "في إيران إكسبورتال، يمكنك بسهولة استكشاف مجموعة واسعة من الموردين الإيرانيين المعتمدين عبر مختلف الصناعات. من المواد الغذائية والمنسوجات إلى الآلات الصناعية والبتروكيماويات، كل فئة منظمة بعناية لمساعدتك في العثور بسرعة وكفاءة على الشركات المصنعة والمنتجات المناسبة لاحتياجاتك."
        },
        {
          id: 2,
          title: "٢. إرسال الاستفسارات أو طلبات عروض الأسعار",
          content: "بمجرد اختيار فئة المورد ذات الصلة، يمكنك إرسال استفساراتك أو طلبات عروض الأسعار (RFQ) مباشرة إلى الموردين. تمكنك هذه الميزة من التواصل بوضوح مع متطلباتك المحددة والحصول على ردود مخصصة ودقيقة من المصدرين الإيرانيين الموثوقين."
        },
        {
          id: 3,
          title: "٣. استلام العروض والتفاوض على الشروط",
          content: "بعد استلام استفساراتك، سيرسل لك الموردون الإيرانيون عروضاً مفصلة. يمكنك التفاوض على السعر وجداول التسليم وجودة المنتج والشروط الأخرى مباشرة معهم. تدعم إيران إكسبورتال طوال هذه العملية لضمان الوصول إلى أفضل اتفاقية ممكنة مع شركاء معتمدين."
        },
        {
          id: 4,
          title: "٤. إنهاء وإرسال طلبك",
          content: "بمجرد الاتفاق على الشروط، سيتقدم طلبك إلى الدفع والتعبئة والشحن. توفر إيران إكسبورتال دعماً كاملاً يشمل التوجيه اللوجستي وتتبع الشحنات، مما يضمن وصول بضائعك في الوقت المحدد وبحالة ممتازة."
        }
      ]
    }
  },
  "fa": {
    hero: {
      mainTitle: (<>
        <span className='text-PC-Primary'>Iran Exportal</span> : تامین‌کنندگان معتبر ایرانی برای واردکنندگان جهانی
      </>),
      mainDescription: (<>
        به دنبال واردات محصولات با کیفیت بالا مستقیماً از ایران هستید؟ IranExportal یافتن و ارتباط با تولیدکنندگان و تامین‌کنندگان تایید شده ایرانی را آسان می‌کند. از مواد غذایی و منسوجات تا ماشین‌آلات و مواد خام - ما دروازه شما به قدرت صنعتی ایران هستیم.
      </>),
      searchPlaceholder: "جستجو برای محصولات، تامین‌کنندگان یا کلمات کلیدی...",
      searchButton: "جستجو",
      PopularSearchesTitle: "مجبوب ها :",
      tags: ["زعفران", "پسته", "فرش"],
      poweredByTitle: "قدرتمند توسط",
      poweredBy: [
        {
          icon: "bookmark",
          number: "500+",
          text: "تامین‌کننده تایید شده"
        }, {
          icon: "globe",
          number: "50+",
          text: "کشور تحت پوشش"
        }, {
          icon: "user",
          number: "10K+",
          text: "مشتری راضی"
        }
      ],
      media: [
        {
          "id": 21,
          "address": "/video/IranExportalEN.mp4",
          "alt": "Iran Exportal video",
          "title": "Iran Exportal video",
          "type": "v"
        }, {
          "id": 6,
          "address": "/image/IranExportalVideo.png",
          "alt": "Iran Exportal Video",
          "title": "Iran Exportal Video",
          "type": "p"
        }
      ]
    },
    about: {
      title: (<>
        <span className='text-PC-PrimaryLight'>چرا با </span> تامین‌کنندگان ایرانی از طریق <span className='text-PC-PrimaryLight'>IranExportal</span> کار کنیم
      </>),
      description: (<>
        ما بیشتر از یک دایرکتوری هستیم. ما شریک صادراتی شما هستیم - اطمینان حاصل می‌کنیم که هر ارتباطی امن، کارآمد و متناسب با نیازهای شما باشد.
      </>),
      cards: [
        {
          title: (<>
            تامین‌کنندگان و کارخانه‌های تایید شده
          </>),
        },
        {
          title: (<>
            پشتیبانی کامل<br />
            (درخواست قیمت، راهنمایی لجستیک، ترجمه)
          </>),
        },
        {
          title: (<>
            لیست محصولات با کیفیت بالا
          </>),
        },
        {
          title: (<>
            رابط چندزبانه<br />
            (انگلیسی، عربی، روسی، فارسی)
          </>),
        }
      ]
    },
    articles: {
      title: (<>
        بازار ایران: بینش‌های کلیدی
      </>),
      description: (<>
        بینش‌های کلیدی بازار ایران را کشف کنید — از فرهنگ تا مقررات — و فرصت‌های رشد جدید را با اطمینان باز کنید.
      </>),
      articles: [
        {
          title: (<>
            چگونه محصولات را از ایران وارد کنیم
          </>),
          description: (<>
            فکر می‌کنید چگونه محصولات را از ایران وارد کنید؟
            <br />
            این راهنمای گام به گام شما را از طریق همه چیزهایی که باید درباره واردات محصولات از ایران بدانید راهنمایی می‌کند
            <br />
            شامل یافتن تامین‌کنندگان، مدیریت لجستیک و اجتناب از مشکلات رایج. ⚠️
            <br />
            برای یادگیری بیشتر درباره واردات از ایران، این نقشه راه را بررسی کنید. . .
          </>),
          image: "/image/Getting-to-know-reputable-Iranian-suppliers.jpg",
          links: [
            { text: "راهنمای گام به گام 1", href: "/test", title: "چگونه محصولات را از ایران وارد کنیم - راهنمای کامل گام به گام" },
            { text: "راهنمای گام به گام 2", href: "/test", title: "چگونه محصولات را از ایران وارد کنیم - راهنمای کامل گام به گام" }
          ]
        },
        {
          title: (<>
            برترین محصولات ایرانی با پتانسیل صادراتی
          </>),
          description: (<>
            وقتی مردم به صادرات ایرانی فکر می‌کنند، اغلب فرش، پسته یا زعفران را تصور می‌کنند…
            <br />
            اما ایران چیزهای بسیار بیشتری برای ارائه دارد 🌍
            <br />
            از محصولات صنعتی تا اقلام دست‌ساز تخصصی، ایران پتانسیل صادراتی استفاده نشده‌ای دارد که بسیاری نادیده می‌گیرند.
            <br />
            اگر کالاهای امیدوارکننده ایرانی برای صادرات را کاوش می‌کنید، این راهنما دیدگاه تازه‌ای به شما می‌دهد
          </>),
          image: "/image/Getting-to-know-reputable-Iranian-suppliers.jpg",
          links: [
            { text: "طلای صادراتی خود را پیدا کنید", href: "/test", title: "محصولات صادراتی ایرانی، بهترین کالاهای ایرانی" }
          ]
        },
        {
          title: (<>
            تجارت موفق با دانستن قوانین ایران شروع می‌شود
          </>),
          description: (<>
            موفقیت در کسب‌وکار با تسلط بر قوانین درست شروع می‌شود 📘.
            <br />
            وقتی کاملاً استانداردها و قراردادهای درگیر را درک کنید، قادر خواهید بود تصمیمات هوشمندانه‌تر و مطمئن‌تری در هر مرحله از مسیر بگیرید.
            <br />
            بنابراین، مهم است که این بخش را جدی بگیرید و مسیر خود را امن کنید.
          </>),
          image: "/image/Getting-to-know-reputable-Iranian-suppliers.jpg",
          links: [
            { text: "پایه خود را درست بسازید 1", href: "/test", title: "قوانین صادرات ایران، اسناد صادرات ایران" },
            { text: "پایه خود را درست بسازید 2", href: "/test", title: "قوانین صادرات ایران، اسناد صادرات ایران" },
            { text: "پایه خود را درست بسازید 3", href: "/test", title: "قوانین صادرات ایران، اسناد صادرات ایران" }
          ]
        }
      ]
    },
    testimonials: {
      title: (<>
        مشتریان ما چه می‌گویند
      </>),
      description: (<>
        فقط حرف ما را قبول نکنید. اینجا آنچه خریداران بین‌المللی درباره تجربه خود با Iran Exportal می‌گویند آمده است.
      </>),
      testimonials: [
        {
          id: 1,
          name: 'احمد حسن',
          company: 'Global Trading Co.',
          location: 'دبی، امارات',
          rating: 5,
          content: 'Iran Exportal نقش کلیدی در کمک به ما برای یافتن زعفران و پسته با کیفیت بالا داشته است. پلتفرم کاربرپسند است و تامین‌کنندگان قابل اعتماد هستند. ما بیش از 2 سال است که با آنها کار می‌کنیم.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 2,
          name: 'سارا جانسون',
          company: 'European Imports Ltd.',
          location: 'لندن، بریتانیا',
          rating: 5,
          content: 'خدمات عالی و محصولات با کیفیت. عملیات تایید به ما اطمینان در کار با تامین‌کنندگان ایرانی می‌دهد. به شدت برای هر کسی که می‌خواهد از ایران وارد کند توصیه می‌شود.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 3,
          name: 'محمد الرشید',
          company: 'Middle East Trading',
          location: 'ریاض، عربستان سعودی',
          rating: 4,
          content: 'پلتفرم عالی برای یافتن محصولات ایرانی. ابزارهای ارتباطی عالی هستند و تیم پشتیبانی بسیار مفید است. ما با موفقیت فرش و سرامیک وارد کرده‌ایم.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 4,
          name: 'النا پترووا',
          company: 'Eastern European Imports',
          location: 'مسکو، روسیه',
          rating: 5,
          content: 'Iran Exportal فرصت‌های جدیدی در بازار ایرانی برای ما باز کرده است. کیفیت محصولات و حرفه‌ای بودن تامین‌کنندگان از انتظارات ما فراتر رفت.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 5,
          name: 'دیوید تشین',
          company: 'Asia Pacific Trading',
          location: 'سنغافورة',
          rating: 4,
          content: 'منصة موثوقة مع موردين معتمدين. پشتیبانی لجستیک عالی است و فرآیند پرداخت امن است. ما با موفقیت فولاد و ماشین‌آلات وارد کرده‌ایم.',
          avatar: '/api/placeholder/60/60'
        },
        {
          id: 6,
          name: 'فاطمه الزهرا',
          company: 'North African Exports',
          location: 'کازابلانکا، مراکش',
          rating: 5,
          content: 'تجربه استثنایی با Iran Exportal. پلتفرم یافتن و ارتباط با تامین‌کنندگان با کیفیت را آسان می‌کند. خدمات مشتری استثنایی است.',
          avatar: '/api/placeholder/60/60'
        }
      ]
    },
    howItWorksFaq: {
      title: "چگونه تامین کنندگان معتبر ایران را پیدا کنیم",
      subtitle: "پلتفرم ما شناسایی تامین کنندگان معتبر در ایران و شروع تجارت را آسان می‌کند.",
      description: "مراحل کار با ایران اکسپورتال:",
      image: "/image/Everything-is-handled-with-transparency-speed-and-professional-communication.png",
      faqItems: [
        {
          id: 1,
          title: "۱. مرور دسته‌بندی‌های تامین کنندگان",
          content: "در ایران اکسپورتال، شما می‌توانید به راحتی طیف گسترده‌ای از تامین کنندگان تایید شده ایرانی را در صنایع مختلف کاوش کنید. از مواد غذایی و منسوجات گرفته تا ماشین‌آلات صنعتی و پتروشیمی، هر دسته‌بندی به دقت سازماندهی شده تا به شما کمک کند به سرعت و کارآمدی تولیدکنندگان و محصولات مناسب برای نیازهایتان را پیدا کنید."
        },
        {
          id: 2,
          title: "۲. ارسال استعلام یا درخواست قیمت",
          content: "پس از انتخاب دسته‌بندی تامین کننده مربوطه، می‌توانید استعلام‌ها یا درخواست‌های قیمت (RFQ) خود را مستقیماً به تامین کنندگان ارسال کنید. این ویژگی به شما امکان می‌دهد تا نیازمندی‌های خاص خود را به وضوح بیان کنید و پاسخ‌های دقیق و سفارشی از صادرکنندگان معتبر ایرانی دریافت کنید."
        },
        {
          id: 3,
          title: "۳. دریافت پیشنهادات و مذاکره شرایط",
          content: "پس از دریافت استعلام‌های شما، تامین کنندگان ایرانی پیشنهادات مفصلی برایتان ارسال خواهند کرد. شما می‌توانید قیمت، برنامه‌های تحویل، کیفیت محصول و سایر شرایط را مستقیماً با آنها مذاکره کنید. ایران اکسپورتال در طول این فرآیند از شما پشتیبانی می‌کند تا بهترین توافق ممکن را با شرکای تایید شده داشته باشید."
        },
        {
          id: 4,
          title: "۴. نهایی‌سازی و ارسال سفارش",
          content: "پس از توافق بر سر شرایط، سفارش شما به پرداخت، بسته‌بندی و ارسال پیش می‌رود. ایران اکسپورتال پشتیبانی کامل از جمله راهنمایی لجستیک و ردیابی ارسال را فراهم می‌کند و اطمینان حاصل می‌کند که کالاهای شما به موقع و در شرایط عالی برسند."
        }
      ]
    }
  }
}