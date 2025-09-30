// Next and React
import Image from "next/image"
import {
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels
} from "@headlessui/react"

// Type

// Data

// Components
import ImageLightbox from "@/components/layouts/page/ImageLightbox"
import { PIproduct } from "@/data/pages/product";

// Start
export default function ImageGallery({ className, item }: Readonly<{ className?: string; item: PIproduct["media"] }>) {

	return (
		<>
			<TabGroup className={className}>

				<TabPanels>
					{item.map((image, index) => (
						<TabPanel key={image.address}>
							<div className="group relative border border-P-BackgroundBorder rounded-xl">
								<ImageLightbox index={index} item={item} />
							</div>
						</TabPanel>
					))}
				</TabPanels>

				<div className="relative">
					<div className="overflow-hidden">
						<TabList className={`flex gap-2 overflow-x-auto py-3 scroll-smooth 
                    ${item.length < 5 ? "justify-center" : ""} 
                    ${item.length === 5 ? "justify-between" : ""}
                    `}>
							{item.map((image) => (
								<Tab
									key={image.address}
									className="group relative flex h-24 w-24 m-1 flex-shrink-0 cursor-pointer items-center justify-center sm:rounded-lg bg-P-Background focus:ring-1"
								>
									<span className="sr-only">{image.title}</span>
									<span className="absolute inset-0 overflow-hidden sm:rounded-lg">
										<Image
											alt={image.alt ?? ''}
											src={image.address}
											title={image.title}
											className="object-cover"
											fill
											sizes="96px"
										/>
									</span>
									<span
										aria-hidden="true"
										className="pointer-events-none absolute inset-0 sm:rounded-md ring-2 ring-P-BackgroundBorder ring-offset-2 ring-offset-P-Background group-data-selected:ring-P-Primary"
									/>
								</Tab>
							))}
						</TabList>
					</div>
				</div>
			</TabGroup>
		</>
	);
}
