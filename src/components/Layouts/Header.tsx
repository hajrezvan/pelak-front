"use client"

import { useTranslations } from "next-intl";
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
/* ------------------------------------------Type------------------*/
import { PImainLayout, PIheader } from "@/type/data";
/* ------------------------------------------Data------------------*/

/* ------------------------------------------Components------------*/
import * as P from '@/components/Playout'
import Link from "next/link";
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function HeaderLayout() {

	const messages = useTranslations()
	const PDmainLayout = messages.raw('mainLayout') as PImainLayout;
	const PDheader = messages.raw('header') as PIheader;

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

			<P.Section className="bg-PC-Background border-b-PC-1 border-PC-BackgroundBorder">
				<P.Container className="h-PC-8">
					<P.Box className="justify-between" Orientation="horizontal">
						<p>{PDmainLayout.topNumber}</p>
						<p>{PDmainLayout.lang}</p>
					</P.Box>
				</P.Container >
			</P.Section>

			<P.Section className={
				"sticky top-0 z-[99991] transition-all duration-313     bg-PC-Background/40    border-b-PC-1 border-b-PC-BackgroundDarkness     content-center " +
				(isSmall ? "h-PC-M backdrop-blur-sm" : "h-PC-10 backdrop-blur-none") + " -mb-PC-10"
			}>
				<P.Container>
					<P.Box className="justify-between items-center" Orientation="horizontal">

						<P.Image
							href={PDmainLayout.url}
							title={PDmainLayout.siteName}
							LinkClassName="rounded-md"
							alt={PDmainLayout.imgAlt}
							src={PDmainLayout.imgLogo}
							width={110}
							height={48}
							style={{ width: 'auto', height: (isSmall ? '34px' : '40px'), transitionProperty: 'all', transitionDuration: '313ms' }}
						/>

						<P.Button onClick={() => setMobileMenuOpen(true)} svgIcon="menu" svgIconSize="medium" UI="light" className="lg:hidden p-PC-2! border-PC-1 border-PC-BackgroundDark">
							<span className="sr-only">{PDmainLayout.menuButtonOpen}</span>
						</P.Button>

						<PopoverGroup className="hidden lg:flex lg:gap-x-5">
							<Popover>

								<PopoverButton className="group flex items-center    px-PC-4 py-PC-2    rounded-PC-2    transition    bg-PC-BackgroundPanel hover:bg-PC-Background    text-PC-Primary hover:text-PC-PrimaryDark     underline-offset-4 hover:underline    justify-between    gap-2    cursor-pointer    border-PC-1 border-PC-BackgroundBorder">
									{PDheader.popName}
									<P.SvgIcon svgName="chevronDown" svgClassName="group-data-open:rotate-180" />
								</PopoverButton>

								<PopoverPanel
									transition
									className={"absolute inset-x-PC-2 -z-[99990] bg-PC-Background ring-1 ring-PC-BackgroundBorder transition border-t-PC-Background pt-3.5 "
										+ (isSmall ? "top-PC-M" : "top-PC-10") + " data-closed:-translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"}
								>

									<P.Container className="grid grid-cols-4 pt-PC-0 pb-PC-3 gap-PC-2">
										{PDheader.popMainItem.map((item) => (
											<div key={item.name} className="group relative rounded-lg p-PC-5 text-sm/6 bg-PC-BackgroundPanel hover:bg-PC-PrimaryLightness ring-1 ring-PC-BackgroundBorder">
												<div className="flex size-11 items-center justify-center rounded-lg bg-PC-PrimaryLightness group-hover:bg-PC-Primary">
													<P.SvgIcon svgName={item.icon as P.SvgIconProps['svgName']} svgSize="medium" svgClassName="text-PC-Secondary group-hover:text-PC-TextLight" />
												</div>
												<a href={item.href} className="mt-3 block font-semibold text-PC-Text group-hover:text-PC-Primary">
													{item.name}
													<span className="absolute inset-0" aria-hidden="true" />
												</a>
												<p className="mt-1 text-PC-Text group-hover:text-PC-Secondary">{item.description}</p>
											</div>
										))}
									</P.Container>

									<div className="bg-PC-PrimaryLightness border-t-PC-1 border-PC-BackgroundBorder">
										<P.Container >
											<P.Box size="full" className="grid grid-cols-1 divide-x divide-PC-BackgroundBorder border-x border-PC-BackgroundBorder">
												{PDheader.popSideItem.map((item) => (
													<Link
														target="_blank"
														key={item.name}
														href={item.href}
														className="flex items-center justify-center gap-x-3 p-3 text-sm/6 font-semibold text-PC-Text hover:bg-PC-BackgroundPanel hover:text-PC-Primary"
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
								<P.Button key={item.name} href={item.href} className="text-sm/6 font-semibold px-5 py-2 rounded-md bg-PC-PrimaryLightness/15 text-PC-Text hover:bg-PC-PrimaryLightness/40">
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

				<P.Section className="fixed inset-0 z-[99991] bg-PC-Secondary/40 backdrop-blur-xs flex justify-end" >

					<DialogPanel className="fixed inset-y-0 w-full flex flex-col justify-between overflow-y-auto bg-PC-PrimaryLightness p-5 sm:max-w-sm sm:ring-1 sm:ring-PC-Secondary/10">

						<div className="flex items-center justify-between pb-5 border-b border-PC-Primary/20">

							<div className="flex items-start ">
								<P.Image
									href={PDmainLayout.url}
									title={PDmainLayout.siteName}
									LinkClassName="p-1 rounded-md"
									alt={PDmainLayout.imgAlt}
									src={PDmainLayout.imgLogo}
									width={110}
									height={48}
									style={{ width: 'auto', height: '40px', transitionProperty: 'all', transitionDuration: '313ms' }}
								/>
							</div>

							<P.Button onClick={() => setMobileMenuOpen(false)} svgIcon="xMark" svgIconSize="medium" UI="lightOutline" className="p-PC-2!">
								<span className="sr-only">{PDmainLayout.menuButtonClose}</span>
							</P.Button>

						</div>

						<div className="space-y-PC-2 py-PC-3 pb-PC-2 flex-1">

							<Disclosure as="div">

								<DisclosureButton className="group flex w-full items-center justify-between rounded-lg p-2 text-base/7 font-semibold text-PC-Text hover:bg-PC-BackgroundPanel">
									{PDheader.popName}
									<P.SvgIcon svgName="chevronDown" svgClassName="group-data-open:rotate-180" />
								</DisclosureButton>

								<DisclosurePanel className="mt-2 space-y-3">
									{[...PDheader.popMainItem, ...PDheader.popSideItem].map((item) => (
										<DisclosureButton
											key={item.name}
											as="a"
											href={item.href}
											className="block align-top rounded-lg p-2 text-sm/7 font-semibold text-PC-Text hover:bg-PC-BackgroundPanel"
										>
											<P.SvgIcon svgName={item.icon as P.SvgIconProps['svgName']} svgClassName="inline-block mx-2 group-hover:text-PC-Gray" />
											{item.name}
										</DisclosureButton>
									))}
								</DisclosurePanel>

							</Disclosure>

							{/* [ ] NextVersion : Create menu item
							{PDheader.menuItem.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="block rounded-lg p-2 text-base/7 font-semibold text-PC-Text hover:bg-PC-BackgroundPanel ">
									{item.name}
								</a>
							))}  */}

						</div>

						<div className="pt-5 border-t border-PC-Primary/20">

							<P.Button href={PDheader.login.href} svgIcon="user" className="lg:flex">
								{PDheader.login.name}
							</P.Button>

						</div>

					</DialogPanel>

				</P.Section>

			</Dialog>
		</>
	);
}
