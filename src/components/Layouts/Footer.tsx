"use client"

/* ------------------------------------------JS--------------------*/
import React from "react";
/* ------------------------------------------Data & Type ----------*/
import { PIlayout } from "@/data/layout";
/* ------------------------------------------Components------------*/
import * as P from '@/components/layouts/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/

export default function Footer({ data }: { data: PIlayout }) {

  return (

    <footer className="bg-P-PrimaryDark" aria-labelledby="footer-heading">

      <P.Container className='pt-P-7 pb-P-3'>
        <P.Box gap="medium">
          <div className="flex items-center">
            <P.Image
              href={data.main.url}
              title={data.main.siteName}
              LinkClassName="rounded-md"
              alt={data.main.icon.alt}
              src={data.main.icon.src}
              width={110}
              height={48}
              style={{ width: 'auto', height: '40px', transitionProperty: 'all', transitionDuration: '313ms' }}
            />
            <span className="ml-2 text-xl font-bold text-P-Background">{data.main.siteName}</span>
          </div>
          <div className="text-P-BackgroundBorder"
              dangerouslySetInnerHTML={{
                __html: data.footer.about,
              }}
            />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-P-2 border-y-P-1 border-y-P-PrimaryLight py-P-7">
            <div className="flex items-center gap-P-3">
              <P.SvgIcon svgName="phone" svgSize="large" svgClassName="text-P-PrimaryLight" />
              <div>
                <p className="text-P-PrimaryLight">{data.footer.phone}</p>
                <p className="text-P-Background">{data.footer.phoneNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-P-3">
            <P.SvgIcon svgName="email" svgSize="large" svgClassName="text-P-PrimaryLight" />
              <div>
                <p className="text-P-PrimaryLight">{data.footer.email}</p>
                <p className="text-P-Background">{data.footer.emailAddress}</p>
              </div>
            </div>
            <div className="flex items-center gap-P-3">
            <P.SvgIcon svgName="address" svgSize="large" svgClassName="text-P-PrimaryLight" />
              <div>
                <p className="text-P-PrimaryLight">{data.footer.address}</p>
                <p className="text-P-Background">{data.footer.addressLocation}</p>
              </div>
            </div>
          </div>
          <p className="leading-5 text-P-PrimaryLight">
            &copy; {new Date().getFullYear()} {data.main.siteName}, {data.footer.copyrightText}
          </p>
        </P.Box>
      </P.Container>

    </footer>
  )
}
