"use client"

/* ------------------------------------------JS--------------------*/
import { useEffect, useState } from 'react'
import React from "react";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel
} from '@headlessui/react'
import Link from "next/link";
/* ------------------------------------------Data & Type ----------*/
import { PIlayout } from "@/data/layout";
import { PDcategories } from '@/data/categories'
/* ------------------------------------------Components------------*/
import * as P from '@/components/Layouts/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function HeaderLayout({ data }: { data: PIlayout }) {

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isSmall, setIsSmall] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 72) {
				setIsSmall(true);
			}
			if (window.scrollY < 40) {
				setIsSmall(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>

			<section className="hidden lg:flex lg:gap-x-5 bg-P-Background border-b-P-1 border-P-BackgroundBorder">
				<div className='flex flex-col sm:flex-row w-full max-w-7xl xl:mx-auto px-P-2 gap-P-4 justify-between'> {/* TODO Create container from this : w-full max-w-7xl xl:mx-auto */}

					<div className=''>{data.header.phoneNumber}</div>

					<div className='flex flex-row gap-P-2'>
						{(data.lang !== 'en' && <div className='cursor-pointer bg-P-BackgroundDark px-P-1 text-P-Gray' onClick={() => { window.open("/en"); }}>EN</div>)}
						{(data.lang !== 'ru' && <div className='cursor-pointer bg-P-BackgroundDark px-P-1 text-P-Gray' onClick={() => { window.open("/ru"); }}>RU</div>)}
						{(data.lang !== 'ar' && <div className='cursor-pointer bg-P-BackgroundDark px-P-1 text-P-Gray' onClick={() => { window.open("/ar"); }}>AR</div>)}
						{(data.lang !== 'fa' && <div className='cursor-pointer bg-P-BackgroundDark px-P-1 text-P-Gray' onClick={() => { window.open("/fa"); }}>FA</div>)}
					</div>




				</div>
			</section>

			<P.Section className={
				"sticky top-0 z-[99991] transition-all duration-313     bg-P-White/50    border-b-P-1 border-b-P-BackgroundBorder     content-center " +
				(isSmall ? "h-P-M backdrop-blur-sm" : "h-P-10 backdrop-blur-xs") + " -mb-P-10"
			}>
				<P.Container>
					<P.Box className="justify-between items-center px-P-3 lg:px-P-0" Orientation="horizontal">

						<P.Image
							href={data.main.url}
							title={data.main.siteName}
							LinkClassName="rounded-md"
							alt={data.main.logo.alt}
							src={data.main.logo.src}
							width={110}
							height={48}
							style={{ width: 'auto', height: (isSmall ? '34px' : '40px'), transitionProperty: 'all', transitionDuration: '313ms' }}
						/>

						<P.Button onClick={() => setMobileMenuOpen(true)} svgIcon="menu" svgIconSize="medium" UI="light" className="lg:hidden p-P-2! border-P-1 border-P-BackgroundDark">
							<span className="sr-only">{data.header.menuButtonOpen}</span>
						</P.Button>

						<PopoverGroup className="hidden lg:flex lg:gap-x-5">
							<Popover>

								<PopoverButton className="group flex items-center px-P-3 py-P-2 rounded-P-2 transition-colors justify-between gap-P-2 shadow-P-BackgroundLow bg-P-BackgroundDark hover:bg-P-BackgroundBorder active:bg-P-BackgroundLight text-P-Text hover:text-P-TextDark mt-P-0 hover:mt-P-T active:mt-P-1   mb-P-1 hover:mb-P-T active:mb-P-0 shadow-P-2 hover:shadow-P-1 active:shadow-P-0">
									{PDcategories[data.lang].name}
									<P.SvgIcon svgName="chevronDown" svgClassName="group-data-open:rotate-180" />
								</PopoverButton>

								<PopoverPanel
									transition
									className={"absolute inset-x-P-2 z-[99990] bg-P-Background ring-1 ring-P-BackgroundBorder transition border-t-P-Background pt-3.5 "
										+ (isSmall ? "top-P-M" : "top-P-10") + " data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"}
								>

									<P.Container className="grid grid-cols-4 pt-P-0 pb-P-3 gap-P-2">
										{PDcategories[data.lang].categories.map((item) => (

											<div key={item.name} className="group relative rounded-lg p-P-5 text-sm/6 bg-P-BackgroundDark hover:bg-P-Primary/10 ring-1 ring-P-BackgroundBorder">
												<div className="flex size-11 items-center justify-center rounded-lg bg-P-PrimaryDark group-hover:bg-P-Primary">
													<P.SvgIcon svgName={item.icon as P.SvgIconProps['svgName']} svgSize="medium" svgClassName="text-P-BackgroundBorder group-hover:text-P-Background" />
												</div>
												<a href={item.href} className="mt-3 block font-semibold text-P-Text group-hover:text-P-Primary">
													{item.name}
													<span className="absolute inset-0" aria-hidden="true" />
												</a>
												<p className="mt-1 text-P-Text group-hover:text-P-Secondary">{item.description}</p>
											</div>

										))}
									</P.Container>

									<div className="border-t-P-1 border-P-BackgroundBorder">
										<P.Container >
											<P.Box size="full" className="bg-P-BackgroundDark grid grid-cols-1 divide-x divide-P-BackgroundBorder border-x border-P-BackgroundBorder">
												{PDcategories[data.lang].otherItem.map((item) => (
													<Link
														target="_blank"
														key={item.name}
														href={item.href}
														className="flex items-center justify-center gap-x-3 p-3 text-sm/6 font-semibold text-P-Text hover:bg-P-Primary/10 hover:text-P-Primary"
													>
														<P.SvgIcon svgName={item.icon as P.SvgIconProps['svgName']} />
														{item.name}
													</Link>
												))}
											</P.Box>
										</P.Container>
									</div>

								</PopoverPanel>

							</Popover>

							{/* [ ] NextVersion : Create menu item
							{PDheader.menuItem.map((item) => (
								<P.Button key={item.name} href={item.href} className="text-sm/6 font-semibold px-5 py-2 rounded-md bg-P-PrimaryLightness/15 text-P-Text hover:bg-P-PrimaryLightness/40">
									{item.name}
								</P.Button>
							))}*/}

						</PopoverGroup>

						{/* [ ] NextVersion : Login button
						<P.Button href={PDheader.login.href} svgIcon="user" className="hidden lg:flex">
							{PDheader.login.name}
						</P.Button>  */}

					</P.Box>

				</P.Container>
			</P.Section>



			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">

				<P.Section className="fixed inset-0 z-[99991] bg-P-Secondary/40 backdrop-blur-xs flex justify-end" >

					<DialogPanel className="fixed inset-y-0 w-full flex flex-col justify-between overflow-y-auto bg-P-Background p-5 sm:max-w-sm sm:ring-1 sm:ring-P-Secondary/10">

						<div className="flex items-center justify-between pb-5 border-b border-P-Primary/20">

							<div className="flex items-start ">
								<P.Image
									href={data.main.url}
									title={data.main.siteName}
									LinkClassName="p-1 rounded-md"
									alt={data.main.logo.alt}
									src={data.main.logo.src}
									width={110}
									height={48}
									style={{ width: 'auto', height: '40px', transitionProperty: 'all', transitionDuration: '313ms' }}
								/>
							</div>

							<P.Button onClick={() => setMobileMenuOpen(false)} svgIcon="xMark" svgIconSize="medium" UI="light" className="p-P-2!">
								<span className="sr-only">{data.header.menuButtonClose}</span>
							</P.Button>

						</div>

						<div className="space-y-P-2 py-P-3 pb-P-2 flex-1">

							<Disclosure as="div">

								<DisclosureButton className="group flex w-full items-center justify-between rounded-lg p-2 text-base/7 font-semibold text-P-Text hover:bg-P-BackgroundPanel">
									{PDcategories[data.lang].name}
									<P.SvgIcon svgName="chevronDown" svgClassName="group-data-open:rotate-180" />
								</DisclosureButton>

								<DisclosurePanel className="mt-2 space-y-3">
									{[...PDcategories[data.lang].categories].map((item) => (
										<DisclosureButton
											key={item.name}
											as="a"
											href={item.href}
											className="block align-top rounded-lg p-2 text-sm/7 font-semibold text-P-Text hover:bg-P-BackgroundPanel"
										>
											<P.SvgIcon svgName={item.icon as P.SvgIconProps['svgName']} svgClassName="inline-block mx-2 group-hover:text-P-Gray" />
											{item.name}
										</DisclosureButton>
									))}
								</DisclosurePanel>

								{PDcategories[data.lang].otherItem.map((item) => (
									<DisclosureButton
										key={item.name}
										as="a"
										href={item.href}
										className="block align-top rounded-lg p-2 text-sm/7 font-semibold text-P-Text hover:bg-P-BackgroundPanel"
									>
										<P.SvgIcon svgName={item.icon as P.SvgIconProps['svgName']} svgClassName="inline-block mx-2 group-hover:text-P-Gray" />
										{item.name}
									</DisclosureButton>
								))}

							</Disclosure>

							{/* [ ] NextVersion : Create menu item
							{PDheader.menuItem.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="block rounded-lg p-2 text-base/7 font-semibold text-P-Text hover:bg-P-BackgroundPanel ">
									{item.name}
								</a>
							))}  */}

						</div>

						<div className="pt-5 border-t border-P-Primary/20">

							<P.Button href={data.header.login.href} svgIcon="user" className="lg:flex">
								{data.header.login.name}
							</P.Button>

						</div>

					</DialogPanel>

				</P.Section>

			</Dialog>
		</>
	);
}
