import { MainIcons } from "./SvgIcon/Main";
import { ArrowIcons } from "./SvgIcon/Arrows";
import { UserIcons } from "./SvgIcon/Users";
import { WorkIcons } from "./SvgIcon/Work";

// add more svg icons here


const sizes = {
    small: "size-P-4",
    medium: "size-P-5",
    large: "size-P-7",
    xLarge: "size-P-9",
}

const strokes = {
    small: "1",
    medium: "1.4",
    large: "2",
}

type SvgIconName = keyof typeof MainIcons | keyof typeof ArrowIcons | keyof typeof UserIcons | keyof typeof WorkIcons; // add more svg icons here

export interface SvgIconProps {
    svgName: SvgIconName;
    svgClassName?: string;
    svgSize?: keyof typeof sizes;
    svgStroke?: keyof typeof strokes;
}

export default function SvgIcon({
    svgName,
    svgClassName,
    svgSize = "small",
    svgStroke = "medium"
}: Readonly<SvgIconProps>) {

    const svgIcons = { ...MainIcons, ...ArrowIcons, ...UserIcons, ...WorkIcons }; // add more svg icons here

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={sizes[svgSize] + " " + "flex-none" + " " + svgClassName} fill="none" stroke="currentColor" strokeWidth={strokes[svgStroke]} strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
            {svgIcons[svgName as SvgIconName] as React.ReactNode}
        </svg>
    );
}
