import LinkComponent from "./Button/LinkComponent";
import { type SvgIconProps } from "./SvgIcon";

const UIs = {
  primary: "bg-PC-Primary hover:bg-PC-PrimaryDark    text-PC-Background",
  secondary: "bg-PC-Secondary hover:bg-PC-SecondaryDark    text-PC-Background",
  success: "bg-PC-Success hover:bg-PC-SuccessDark    text-PC-Background",
  error: "bg-PC-Error hover:bg-PC-ErrorDark    text-PC-Background",
  warning: "bg-PC-Warning hover:bg-PC-WarningDark    text-PC-Background",
  disabled: "bg-PC-BackgroundDarkness    text-PC-TextLight",
  light: "bg-PC-BackgroundPanel hover:bg-PC-BackgroundBorder    text-PC-Text hover:text-PC-TextDark",
  dark: "bg-PC-Text hover:bg-PC-TextDark    text-PC-TextLight",
  link: "text-PC-Primary hover:text-PC-PrimaryDark    underline-offset-4 hover:underline",
  linkPanel: "bg-PC-BackgroundPanel    text-PC-Primary hover:text-PC-PrimaryDark     underline-offset-4 hover:underline",
  linkHover: "text-PC-Primary hover:text-PC-PrimaryDark     hover:bg-PC-BackgroundPanel     underline-offset-4 hover:underline",
  primaryOutline: "border-PC-1 border-PC-Primary    text-PC-Primary hover:text-PC-PrimaryDark    hover:bg-PC-PrimaryLightness",
  secondaryOutline: "border-PC-1 border-PC-Secondary    text-PC-Secondary hover:text-PC-SecondaryDark    hover:bg-PC-SecondaryLightness",
  successOutline: "border-PC-1 border-PC-Success    text-PC-Success hover:text-PC-SuccessDark    hover:bg-PC-SuccessLightness",
  errorOutline: "border-PC-1 border-PC-Error    text-PC-Error hover:text-PC-ErrorDark    hover:bg-PC-ErrorLightness",
  warningOutline: "border-PC-1 border-PC-Warning    text-PC-Warning hover:text-PC-WarningDark    hover:bg-PC-WarningLightness",
  lightOutline: "border-PC-1 border-PC-BackgroundDark    text-PC-Text hover:text-PC-TextDark   hover:bg-PC-BackgroundPanel",
  darkOutline: "border-PC-1 border-PC-Text    text-PC-Text hover:text-PC-TextDark   hover:bg-PC-BackgroundPanel",
  linkHoverOutline: "ring-0 ring-PC-Primary hover:ring-1    text-PC-Primary hover:text-PC-PrimaryDark    underline-offset-4 hover:underline",
  white: "bg-PC-TextWhite hover:bg-PC-White    text-PC-Primary",
  whiteOutline: "ring-1 ring-PC-TextWhite hover:ring-0    text-PC-TextWhite hover:text-PC-Primary    hover:bg-PC-TextWhite"
};

const aligns = {
  between: ["justify-between    gap-2", "justify-center"],
  betweenReverse: ["flex-row-reverse justify-between    gap-2", "justify-center"],
  center: ["flex-row-reverse justify-center    gap-2", "justify-center"],
  centerReverse: ["justify-center    gap-2", "justify-center"],
  start: ["flex-row justify-between    gap-2", "justify-start"],
  end: ["flex-row-reverse justify-between    gap-2", "justify-end"],
};

interface TagProps extends React.LinkHTMLAttributes<HTMLLabelElement> {
  href: string;
  UI?: keyof typeof UIs;
  align?: keyof typeof aligns;
  svgIcon?: SvgIconProps['svgName'];
  svgIconClassName?: string;
  svgIconSize?: SvgIconProps['svgSize'];
  svgIconStroke?: SvgIconProps['svgStroke'];
}

export default function Tag({
  href,
  UI = "primary",
  title,
  className,
  children,
  align = "between",
  svgIcon,
  svgIconClassName,
  svgIconSize,
  svgIconStroke,
  ...props
}: Readonly<TagProps>) {

  const baseStyles = "flex items-center    px-PC-3 py-PC-2    rounded-full    transition";

  const iconStyles = {
    between: (svgIcon ? aligns[align][0] : aligns[align][1]),
    betweenReverse: (svgIcon ? aligns[align][0] : aligns[align][1]),
    center: (svgIcon ? aligns[align][0] : aligns[align][1]),
    centerReverse: (svgIcon ? aligns[align][0] : aligns[align][1]),
    start: (svgIcon ? aligns[align][0] : aligns[align][1]),
    end: (svgIcon ? aligns[align][0] : aligns[align][1]),
  };

  return (
    <LinkComponent
      href={href}
      className={baseStyles + " " + iconStyles[align] + " " + UIs[UI] + " " + className}
      title={title}
      svgIcon={svgIcon}
      svgIconClassName={svgIconClassName}
      svgIconSize={svgIconSize}
      svgIconStroke={svgIconStroke}
    >
      {children}
    </LinkComponent>
  );
}
