const sizes = {
	"1/5": "w-full sm:w-1/3 md:w-1/5",
	"1/4": "w-full sm:w-1/3 md:w-1/4",
	"1/3": "w-full sm:w-1/2 md:w-1/3",
	"2/5": "w-full lg:w-2/5",
	"1/2": "w-full sm:w-1/2",
	"3/5": "w-full lg:w-3/5",
	"2/3": "w-full sm:w-1/2 md:w-2/3",
	"3/4": "w-full sm:w-2/3 md:w-3/4",
	"4/5": "w-full sm:w-2/3 md:w-4/5",
	"full": "w-full",
	"none": "flex-initial",
	"flex": "flex-1",
	"initial": "flex-initial",
	"auto": "flex-auto",
}

const UIs = {
	full: "px-P-2 -mx-P-2   box-content",
	box: "",
	boxFull: "px-P-2 sm:px-P-0 -mx-P-2 sm:-mx-P-0    sm:rounded-P-1    box-content sm:box-border",
}

const OrientationStyles = {
	horizontal: "flex-row",
	vertical: "flex-col",
	verticalReverse: "flex-col-reverse",
	horizontalReverse: "flex-row-reverse",
	wrap: "flex-wrap",
	wrapReverse: "flex-wrap-reverse",
}

const Gaps = {
	none: "gap-0",
	small: "gap-P-2",
	medium: "gap-P-4",
	large: "gap-P-6",
}

export interface BoxProps {
	UI?: keyof typeof UIs;
	size?: keyof typeof sizes;
	gap?: keyof typeof Gaps;
	children: React.ReactNode;
	className?: string;
	Orientation?: keyof typeof OrientationStyles;
}

export default function Box({
	UI = "box",
	size = "full",
	gap = "none",
	children,
	className,
	Orientation = "vertical"
}: Readonly<BoxProps>) {

	const baseStyles = "flex"

	return (
		<div className={baseStyles + " " + OrientationStyles[Orientation] + " " + sizes[size] + " " + UIs[UI] + " " + Gaps[gap] + " " + className}>
			{children}
		</div>
	);
}