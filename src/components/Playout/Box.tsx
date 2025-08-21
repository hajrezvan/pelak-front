const sizes = {
	"1/5": "w-full sm:w-1/3 md:w-1/5",
	"1/4": "w-full sm:w-1/3 md:w-1/4",
	"1/3": "w-full sm:w-1/2 md:w-1/3",
	"2/5": "w-full sm:w-1/2 md:w-2/5",
	"1/2": "w-full sm:w-1/2",
	"3/5": "w-full sm:w-1/2 md:w-3/5",
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
	full: "px-PC-2 -mx-PC-2   box-content",
	box: "",
	boxFull: "px-PC-2 sm:px-PC-0 -mx-PC-2 sm:-mx-PC-0    sm:rounded-PC-1    box-content sm:box-border",
}

const OrientationStyles = {
	horizontal: "flex-row",
	vertical: "flex-col",
	verticalReverse: "flex-col-reverse",
	horizontalReverse: "flex-row-reverse",
	wrap: "flex-wrap",
}

export interface BoxProps {
	UI?: keyof typeof UIs;
	size?: keyof typeof sizes;
	children: React.ReactNode;
	className?: string;
	Orientation?: keyof typeof OrientationStyles;
}

export default function Box({
	UI = "box",
	size = "full",
	children,
	className,
	Orientation = "vertical"
}: Readonly<BoxProps>) {

	const baseStyles = "flex"

	return (
		<div className={baseStyles + " " + OrientationStyles[Orientation] + " " + sizes[size] + " " + UIs[UI] + " " + className}>
			{children}
		</div>
	);
}