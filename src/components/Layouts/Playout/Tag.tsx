import LinkComponent from "./Button/LinkComponent";
import { type SvgIconProps } from "./SvgIcon";

const UIs = {
  primary: "shadow-P-PrimaryDark/40 bg-P-Primary hover:bg-P-PrimaryLight active:bg-P-PrimaryDark text-P-ExactWhite",
  secondary: "shadow-P-SecondaryDark/40 bg-P-Secondary hover:bg-P-SecondaryLight active:bg-P-SecondaryDark text-P-ExactWhite",
  third: "shadow-P-ThirdDark/40 bg-P-Third hover:bg-P-ThirdLight active:bg-P-ThirdDark text-P-ExactWhite",

  success: "shadow-P-SuccessDark/40 bg-P-Success hover:bg-P-SuccessLight active:bg-P-SuccessDark text-P-ExactWhite",
  error: "shadow-P-ErrorDark/40 bg-P-Error hover:bg-P-ErrorLight active:bg-P-ErrorDark text-P-ExactWhite",
  warning: "shadow-P-WarningDark/40 bg-P-Warning hover:bg-P-WarningLight active:bg-P-WarningDark text-P-ExactWhite",

  primaryOutline: "shadow-P-PrimaryDark/40 border-P-1 border-P-Primary text-P-Primary hover:border-P-PrimaryLight hover:text-P-PrimaryLight hover:bg-P-PrimaryDark/10 active:border-P-PrimaryDark active:text-P-PrimaryDark active:bg-P-PrimaryLight/10",
  secondaryOutline: "shadow-P-SecondaryDark/40 border-P-1 border-P-Secondary text-P-Secondary hover:border-P-SecondaryLight hover:text-P-SecondaryLight hover:bg-P-SecondaryDark/10 active:border-P-SecondaryDark active:text-P-SecondaryDark active:bg-P-SecondaryLight/10",
  thirdOutline: "shadow-P-ThirdDark/40 border-P-1 border-P-Third text-P-Third hover:border-P-ThirdLight hover:text-P-ThirdLight hover:bg-P-ThirdDark/10 active:border-P-ThirdDark active:text-P-ThirdDark active:bg-P-ThirdLight/10",

  successOutline: "shadow-P-SuccessDark/40 border-P-1 border-P-Success text-P-Success hover:border-P-SuccessLight hover:text-P-SuccessLight hover:bg-P-SuccessDark/10 active:border-P-SuccessDark active:text-P-SuccessDark active:bg-P-SuccessLight/10",
  errorOutline: "shadow-P-ErrorDark/40 border-P-1 border-P-Error text-P-Error hover:border-P-ErrorLight hover:text-P-ErrorLight hover:bg-P-ErrorDark/10 active:border-P-ErrorDark active:text-P-ErrorDark active:bg-P-ErrorLight/10",
  warningOutline: "shadow-P-WarningDark/40 border-P-1 border-P-Warning text-P-Warning hover:border-P-WarningLight hover:text-P-WarningLight hover:bg-P-WarningDark/10 active:border-P-WarningDark active:text-P-WarningDark active:bg-P-WarningLight/10",

  light: "shadow-P-BackgroundLow/40 bg-P-BackgroundDark hover:bg-P-BackgroundBorder active:bg-P-BackgroundLight text-P-Text hover:text-P-TextDark",
  middle: "shadow-P-BackgroundLow/40 bg-P-BackgroundBorder hover:bg-P-BackgroundMiddle active:bg-P-BackgroundDark text-P-Text hover:text-P-TextDark",
  dark: "shadow-P-Gray/40 bg-P-TextMiddle hover:bg-P-TextShadow active:bg-P-Gray text-P-Background",

  grayOutline: "shadow-P-Gray/40 border-P-1 border-P-TextLow text-P-Text hover:border-P-TextShadow hover:text-P-TextDark hover:bg-P-TextShadow/10 active:border-P-TextMiddle active:text-P-TextLight active:bg-P-TextLow/10",
  linkBackground: "bg-P-BackgroundDark text-P-Primary hover:text-P-PrimaryDark active:font-bold  underline-offset-4 hover:underline",
  linkOutline: "border-P-1 border-P-Primary text-P-Primary hover:border-P-PrimaryDark hover:text-P-PrimaryDark active:font-bold hover:bg-P-PrimaryDark/10 underline-offset-4 hover:underline active:bg-P-PrimaryLight/10",
};

const aligns = {
  between: ["justify-between    gap-2", "justify-center"],
  betweenReverse: ["flex-row-reverse justify-between    gap-2", "justify-center"],
  center: ["flex-row-reverse justify-center    gap-2", "justify-center"],
  centerReverse: ["justify-center    gap-2", "justify-center"],
  start: ["flex-row justify-between    gap-2", "justify-start"],
  end: ["flex-row-reverse justify-between    gap-2", "justify-end"],
};

interface TagProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
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

  const baseStyles = "flex items-center    px-P-3 py-P-2    rounded-full    transition";

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
      className={baseStyles + " shadow-P-0 hover:shadow-P-1b active:shadow-P-0b " + iconStyles[align] + " " + UIs[UI] + " " + className}
      title={title}
      svgIcon={svgIcon}
      svgIconClassName={svgIconClassName}
      svgIconSize={svgIconSize}
      svgIconStroke={svgIconStroke}
      {...props}
    >
      {children}
    </LinkComponent>
  );
}
