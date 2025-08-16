"use client";

import { default as SvgIcon, type SvgIconProps } from "../SvgIcon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  svgIcon?: SvgIconProps['svgName'];
  svgIconClassName?: string;
  svgIconSize?: SvgIconProps['svgSize'];
  svgIconStroke?: SvgIconProps['svgStroke'];
}

export default function ButtonComponent({
    type = "button",
    className,
    children,
    title,
    svgIcon,
    svgIconClassName,
    svgIconSize,
    svgIconStroke,
    ...props
  }: Readonly<
    ButtonProps
  >) {
    return (
      <button
      type={type}
      className={className}
      title={title}
      {...props}
      >
        {children}
        {svgIcon && <SvgIcon svgName={svgIcon} svgClassName={svgIconClassName} svgSize={svgIconSize} svgStroke={svgIconStroke}/>}
      </button>
    );
}