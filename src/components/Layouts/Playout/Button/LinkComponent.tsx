import Link from "next/link";
import { default as SvgIcon, type SvgIconProps } from "../SvgIcon";

interface LinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
    svgIcon?: SvgIconProps['svgName'];
    svgIconClassName?: string;
    svgIconSize?: SvgIconProps['svgSize'];
    svgIconStroke?: SvgIconProps['svgStroke'];
}

export default function LinkComponent({
    href,
    className,
    children,
    title,
    svgIcon,
    svgIconClassName,
    svgIconSize,
    svgIconStroke,
    ...props
}: Readonly<
    LinkProps
    >) {
    return(
        <Link
        href={href || "/"}
        className={className}
        title={title}
        {...props}
        >
            {children}
            {svgIcon && <SvgIcon svgName={svgIcon} svgClassName={svgIconClassName} svgSize={svgIconSize} svgStroke={svgIconStroke}/>}
        </Link>
    );
}