"use client"

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline' // TODO: Remove this
/* ------------------------------------------JS--------------------*/
import React from "react";
/* ------------------------------------------Data & Type ----------*/
import { PIlayout } from "@/data/layout";
/* ------------------------------------------Components------------*/
import * as P from '@/components/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/

export default function Footer({ data }: { data: PIlayout }) {

  return (


    <footer className="bg-PC-PrimaryDark" aria-labelledby="footer-heading">

      <P.Container className='pt-PC-7 pb-PC-3'>
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
            <span className="ml-2 text-xl font-bold text-PC-Background">{data.main.siteName}</span>
          </div>
          <p className="text-PC-PrimaryLightness">
            {data.footer.about}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-PC-2 border-y-PC-1 border-y-PC-PrimaryLight py-PC-7">
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 text-PC-PrimaryLightness m-3" />
              <div>
                <p className="text-PC-PrimaryLight">{data.footer.phone}</p>
                <p className="text-PC-Background">{data.footer.phoneNumber}</p>
              </div>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 text-PC-PrimaryLightness m-3" />
              <div>
                <p className="text-PC-PrimaryLight">{data.footer.email}</p>
                <p className="text-PC-Background">{data.footer.emailAddress}</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 text-PC-PrimaryLightness m-3" />
              <div>
                <p className="text-PC-PrimaryLight">{data.footer.address}</p>
                <p className="text-PC-Background">{data.footer.addressLocation}</p>
              </div>
            </div>
          </div>
          <p className="leading-5 text-PC-PrimaryLight">
            &copy; {new Date().getFullYear()} {data.main.siteName}, {data.footer.copyrightText}
          </p>
        </P.Box>
      </P.Container>

    </footer>
  )
}
