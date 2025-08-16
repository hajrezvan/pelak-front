
import { PItag } from "@/type/tag";
import Link from "next/link";
import * as P from '@/components/Playout'

export default function TagLabel({tag}: Readonly<{tag: PItag}>) {

    return (
    <div className='inline-flex m-0.5'>
        <Link href={tag.href} title={tag.description} className='flex items-center px-1.5 py-0.5 text-md bg-PC-Background/40 rounded border border-PC-Text/40'>
            <P.SvgIcon svgName={/*tag.icon as P.SvgIconProps['svgName']*/"bookmark"} svgSize='small' svgClassName='mx-PC-0' />
            {tag.name}
        </Link>
    </div>
  );
}
