export interface PIseoMeta {
title: string
description: string
keywords: string
author: string
alternates: PIalternates
openGraph: PIopenGraph
}

    export interface PIalternates {
    canonical: string
    languages: string[]
    }

    export interface PIopenGraph {
    title: string
    description: string
    url: string
    siteName: string
    images: PIimageUrl[]
    type: string
    }
    
        export interface PIimageUrl {
        url: string
        }