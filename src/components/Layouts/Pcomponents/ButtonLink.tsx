import Link from "next/link";

export default function ButtonLink({text, title, href, className}: Readonly<{text?: string, title?: string, href?: string, className?: string}>) {

    return (
        <Link href={href || '#'} title={title} className={`bg-PC-Primary hover:bg-PC-Secondary text-PC-Light text-2lx text-center px-3 py-2 rounded ${className}`}>
            {text}
        </Link>
    );
}
