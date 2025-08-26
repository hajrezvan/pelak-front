const OrientationStyles = {
	vertical: "flex-col",
	verticalReverse: "flex-col-reverse",
	horizontal: "flex-col sm:flex-row",
	horizontalReverse: "flex-col-reverse sm:flex-row-reverse",
	wrap: "flex-wrap",
}

const UIs = {
	full: "w-full",
	box: "max-w-7xl    xl:mx-auto",
}

const Gaps = {
	none: "gap-0",
	small: "gap-PC-2",
	medium: "gap-PC-4",
	large: "gap-PC-6",
}

export interface ContainerProps {
	UI?: keyof typeof UIs;
	Orientation?: keyof typeof OrientationStyles;
	gap?: keyof typeof Gaps;
	children?: React.ReactNode;
	className?: string;
}

export default function Container({
	UI = "box",
	Orientation = "vertical",
	gap = "medium",
	children,
	className
}: Readonly<ContainerProps>) {

	const baseStyles = "flex px-PC-2 justify-center"

	return (
		<div className={baseStyles + " " + OrientationStyles[Orientation] + " " + UIs[UI] + " " + Gaps[gap] + " " + className}>
			{children}
		</div>
	);
}