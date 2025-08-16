
import { PItag } from "@/type/tag";
import Link from "next/link";
import SvgIcon from "@/components/Layouts/Pcomponents/SvgIcon";

export default function TagLabel({tag}: Readonly<{tag: PItag}>) {

    return (
    <div className='inline-flex m-0.5'>
        <Link href={tag.href} title={tag.description} className='flex items-center px-2 py-1 text-md bg-PC-Light/40 rounded border border-PC-Dark/50'>
            <SvgIcon svgName={tag.icon} className='mx-1 size-5' />
            {tag.name}
        </Link>
    </div>
  );
}
