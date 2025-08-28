"use client";
/* ------------------------------------------JS--------------------*/
import Image from "next/image";
import { 
    Dialog, 
    DialogPanel 
} from "@headlessui/react";
import { 
    useState, 
} from "react";
/* ------------------------------------------Type------------------*/
import { PIproduct } from "@/data/products/productsPage";
/* ------------------------------------------Data------------------*/

/* ------------------------------------------Components------------*/
import * as P from '@/components/Playout'
/* ------------------------------------------Function--------------*/

/* ------------------------------------------Run-------------------*/
export default function VideoLightbox({video, poster, className}: Readonly<{ video: PIproduct["media"][number], poster: PIproduct["media"][number], className?: string}>) {

    const [isOpen, setIsOpen] = useState(false);
    return (
    <>        

        <div onClick={() => setIsOpen(true)} className={`relative flex justify-center items-center ${className} cursor-pointer`}>
            <Image 
            alt={poster.alt} 
            src={poster.src} 
            title={poster.title} 
            height={714}
            width={400}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="rounded-lg"
            />
            <P.SvgIcon svgName="xMark" svgSize="large" svgClassName="text-PC-Background absolute bg-PC-Text/80 rounded-full p-1" />
        </div>

        <Dialog 
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-[99992] flex items-center justify-center"
        >



            <div className="fixed inset-0 bg-PC-Black/90 backdrop-blur-sm" onClick={() => setIsOpen(false)} />


            <DialogPanel className="relative">

                <div className="flex justify-center items-center">


                    <video
                    className="max-h-[85vh] max-w-[90vw]"
                    width="100%"
                    height="100%"
                    src={video.src}
                    poster={poster.src}
                    controls
                    autoPlay
                    >
                        Sorry  your browser doesn t support embedded videos  but don t worry  you can
                        <a href={video.src}>download it</a>
                        and watch it with your favorite video player!
                    </video>
                    
                    <button
                        onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(false);
                        }}
                        className="absolute top-3 right-3 p-1 bg-PC-BackgroundDark/72 hover:bg-PC-Background/72 rounded-full pointer-events-auto"
                    >
                        <P.SvgIcon svgName="xCircle" svgSize="large" />
                    </button>

                </div>

            </DialogPanel>

        </Dialog>
    </> 
    );
}