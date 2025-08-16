import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import SvgIcon from '@/components/Layouts/Pcomponents/SvgIcon'
import { PIfaq } from '@/type/faq';
import { getTranslations } from 'next-intl/server';
import * as P from '@/components/Playout'
export default async function Faq({ faqs }: { faqs: PIfaq[] }) {

    const faqTitleglobal = (await getTranslations('other')).raw('faqTitle');

  return (
    <div className="bg-PC-Background">
      <div className="mx-auto max-w-7xl px-3 py-34">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-PC-Text sm:text-5xl">
            {faqTitleglobal}
          </h2>
          <dl className="mt-16 divide-y divide-PC-BackgroundBorder">
            {faqs.map((faq) => (
              <Disclosure key={faq.id} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-PC-Text">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                    <P.SvgIcon svgName="chevronDown" svgSize='large' svgClassName='bg-PC-BackgroundPanel rounded-full group-data-open:hidden' />
                    <P.SvgIcon svgName="chevronDown" svgSize='large' svgClassName='bg-PC-BackgroundPanel rounded-full group-not-data-open:hidden rotate-180' />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-PC-Text">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
