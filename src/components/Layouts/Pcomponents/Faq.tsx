import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import SvgIcon from '@/components/Layouts/Pcomponents/SvgIcon'
import { PIfaq } from '@/type/faq';
import { getTranslations } from 'next-intl/server';

export default async function Faq({ faqs }: { faqs: PIfaq[] }) {

    const faqTitleglobal = (await getTranslations('other')).raw('faqTitle');

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-3 py-34">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {faqTitleglobal}
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.id} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                    <SvgIcon svgName="box" className='bg-PC-Accent size-12 rounded-full group-data-open:hidden' />
                    <SvgIcon svgName="box" className='bg-PC-Confirmation size-12 rounded-full group-not-data-open:hidden' />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
