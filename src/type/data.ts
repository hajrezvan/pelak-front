export interface PIdata {
    mainLayout: PImainLayout;
    header: PIheader;
    footer: PIfooter;
}

    export interface PImainLayout {
        mainUrl: string;
        lang: string;
        siteName: string;
        url: string;
        imgLogo: string;
        imgAlt: string;
        menuButtonOpen: string;
        menuButtonClose: string;
        topNumber: string;
        copyText: string;
        newsletterTitle: string;
        newsletterDescription: string;
        emailLabel: string;
        emailSubscribeText: string;
        emailSubscribePlaceholder: string;
    }

    export interface PIheader {
        popName: string;
        popMainItem: PIpopMainItem[];
        popSideItem: PIpopSideItem[];
        menuItem: PImenuItem[];
        login: PIlogin;
    }

        export interface PIpopMainItem {
            name: string;
            href: string;
            description: string;
            icon: string;
        }

        export interface PIpopSideItem {
            name: string;
            href: string;
            icon: string;
        }

        export interface PImenuItem {
            name: string;
            href: string;
        }

        export interface PIlogin {
            name: string;
            href: string;
            icon: string;
        }

    export interface PIfooter {
        solutions: PIfooterSolution[];
        social: PIfooterSocial[];
    }

        export interface PIfooterSolution {
            name: string;
            href: string;
        }

        export interface PIfooterSocial {
            name: string;
            href: string;
            icon: string;
        }

    export interface PIproductPage {
        descriptionTitle: string;
        callToAction: string;
        aboutProductTitle: string;
        aboutCompanyTitle: string;
    }