"use client"
import { PIproduct } from "@/data/pages/products/productsPage";
import Container from "@/components/layouts/Pcomponents/product/Container";

export default function HeroHeader({ children, className, featuredImage }: Readonly<{ children: React.ReactNode; className?: string; featuredImage?: PIproduct["media"][number] }>) {

    return (
        <div className='relative flex w-full h-[432px] bg-PC-Primary overflow-hidden'>

            <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url(${featuredImage?.address})` }} />

            <div className="absolute inset-0 bg-gradient-to-t from-PC-PrimaryLightness/72 to-PC-Background/72" />

            <div className="relative z-10 w-full h-full flex pt-[100px] pb-5">
                <Container className={className}>
                    {children}
                </Container>
            </div>
            
        </div>
    );
}
