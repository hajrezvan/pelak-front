"use client";
/* ------------------------------------------JS--------------------*/
import Image from "next/image";
import { 
    Dialog, 
    DialogPanel 
} from "@headlessui/react";
import { 
    useState, 
    useRef, 
    useEffect 
} from "react";
/* ------------------------------------------Type------------------*/
import { PIproduct } from "@/data/pages/product";
/* ------------------------------------------Data------------------*/

/* ------------------------------------------Components------------*/
import * as P from '@/components/Layouts/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function ImageLightbox({index,item}: Readonly<{index: number; item: PIproduct["media"]}>) {

    const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useState(index);
    const thumbnailsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = thumbnailsRef.current;
        if (!container) return;

        const activeThumb = container.children[current] as HTMLElement;
        if (!activeThumb) return;

        const scrollLeft =
        activeThumb.offsetLeft - container.clientWidth / 2 + activeThumb.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }, [current]);
    return (
    <>        

        <div className="aspect-square size-full bg-P-BackgroundPanel sm:rounded-lg">
            <Image 
                alt={item[current].alt ?? ''} 
                src={item[current].address} 
                title={item[current].title} 
                onClick={() => setIsOpen(true)}
                className=" object-cover cursor-zoom-in sm:rounded-lg"
                fill
                sizes="720px"
            />
        </div>

        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-[99992] flex items-center justify-center"
        >

            {/* Background Overlay */}

            <div className="fixed inset-0 bg-P-Black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />


            <DialogPanel className="relative">

                <div className="flex justify-center items-center">

                    {/* Main Image */}

                    <div className="bg-P-BackgroundDarkness">
                        <Image 
                            alt={item[current].alt ?? ''} 
                            src={item[current].address} 
                            title={item[current].title} 
                            width={1200}
                            height={900}
                            style={{maxHeight: '95vh',width: 'auto',maxWidth: '95vw'}}
                        />
                    </div>

                    {/* Controls */}
                    
                    <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setCurrent((current - 1 + item.length) % item.length);
                    }}
                    className="absolute left-2 p-1 bg-P-BackgroundDark/72 hover:bg-P-Background/72 rounded-full pointer-events-auto"
                    >
                        <P.SvgIcon svgName="arrowCircleLeft" svgSize="large" />
                    </button>
                    
                    <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setCurrent((current + 1) % item.length);
                    }}
                    className="absolute right-2 p-1 bg-P-BackgroundDark/72 hover:bg-P-Background/72 rounded-full pointer-events-auto"
                    >
                        <P.SvgIcon svgName="arrowCircleRight" svgSize="large" />
                    </button>

                    {/* Close button */}
                    
                    <button
                        onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                        }}
                        className="absolute top-3 right-3 p-1 bg-P-BackgroundDark/72 hover:bg-P-Background/72 rounded-full pointer-events-auto"
                    >
                        <P.SvgIcon svgName="xCircle" svgSize="large" />
                    </button>

                </div>

                {/* Thumbnails */}

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-[80vw] hide-scrollbar">
                    <div
                        ref={thumbnailsRef}
                        className="flex gap-2 justify-center items-center bg-P-Background/40 p-2 rounded-lg backdrop-blur-sm overflow-x-auto"
                    >
                        {item.map((image, idx) => (

                        <div key={idx} className={`relative w-16 h-16 rounded cursor-pointer
                            ${current === idx ? "border-2 border-P-PrimaryLight" : "opacity-50"}
                            hover:opacity-100 transition-all duration-200`}
                            >
                                <Image 
                                    alt={image.alt ?? ''} 
                                    src={image.address} 
                                    title={image.title}
                                    onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrent(idx);
                                    }}
                                    className="object-cover rounded"
                                    fill
                                    sizes="96px"
                                />
                        </div>

                        ))}
                    </div>
                </div>
            </DialogPanel>



        </Dialog>
    </>
    );
}