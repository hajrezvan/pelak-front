export interface PIhomePage {
  [key: string]: {
    hero: {
      media: {
        id: number
        src: string
        alt: string
        title: string
        type: string
      }[];
      mainTitle: string;
      mainDescription: string;
      searchPlaceholder: string;
      searchButton: string;
      tags: string[];
      poweredBy: {
        icon: string;
        number: string;
        text: string;
      }[];
    }
    about: {
      title: string;
      description: string;
      cards: {
        title: string;
        description?: string;
      }[];
    }
  }
}

export const homePage: PIhomePage = {
  "en": {
    hero: {
      mainTitle: "Iran Exportal : Trusted Iran Suppliers for Global Importers",
      mainDescription: "Looking to import high-quality products directly from Iran? IranExportal makes it easy to discover and connect with verified Iranian manufacturers and suppliers. From food and textiles to machinery and raw materials – we’re your gateway to Iran’s industrial power.",
      searchPlaceholder: "Search for products, suppliers, or keywords...",
      searchButton: "Search",
      tags: ["Saffron", "Pistachios", "Carpets"],
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
          "src": "/products/1/f.jpg",
          "alt": "youtube videdo",
          "title": "youtube videdo",
          "type": "v"
        }, {
          "id": 6,
          "src": "/image/Getting-to-know-reputable-Iranian-suppliers.jpg",
          "alt": "alt Image Gallery 6",
          "title": "alt Image Gallery 6",
          "type": "p"
        }
      ]
    },
    about: {
      title: "Why Work with Iran Suppliers Through IranExportal",
      description: "We’re more than a directory. We’re your export partner – ensuring every connection is secure, efficient, and tailored to your needs.",
      cards: [
        {
          title: "Verified suppliers and factories",
        },
        {
          title: "End-to-end support",
          description: "(RFQs, logistics guidance, translation)",
        },
        {
          title: "High-quality product listings",
        },
        {
          title: "Multilingual interface",
          description: "(English, Arabic, Russian, Persian)",
        }
      ]
    }
  }
}