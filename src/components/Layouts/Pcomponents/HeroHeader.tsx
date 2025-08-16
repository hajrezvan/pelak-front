"use client"
import { PImedia } from '@/type/media';
import Container from "@/components/Layouts/Pcomponents/Container";

export default function HeroHeader({children,className,featuredImage}: Readonly<{children: React.ReactNode;className?: string;featuredImage?: PImedia}>) {

    return (
    <div className='relative flex w-full h-[432px] bg-PC-Secondary overflow-hidden'>
        {/* تصویر بک‌گراند */}
        <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{ backgroundImage: `url(${featuredImage?.src})` }}
        />
        {/* لایه overlay (معادل ::before) */}
        <div className="absolute inset-0 bg-gradient-to-t from-PC-Primary/20 to-PC-Light/80" />
        
        {/* محتوای اصلی */}
        <div className="relative z-10 w-full h-full flex pt-[100px] pb-5">
            <Container className= {className}>
                {children}
            </Container>
        </div>
    </div>
  );
}
