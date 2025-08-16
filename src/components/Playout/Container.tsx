const OrientationStyles = {
	vertical: "flex-col",
	verticalReverse: "flex-col-reverse",
	horizontal: "flex-col sm:flex-row",
	horizontalReverse: "flex-col sm:flex-row-reverse",
	wrap: "flex-wrap",
}

const UIs = {
	full: "w-full",
	box: "max-w-7xl    xl:mx-auto",
}

export interface ContainerProps {
	UI?: keyof typeof UIs;
	Orientation?: keyof typeof OrientationStyles;
	children?: React.ReactNode;
	className?: string;
}


export default function Container({
	UI = "box",
	Orientation = "vertical",
	children,
	className
}: Readonly<ContainerProps>) {

	const baseStyles = "flex px-PC-2 justify-center"

	return (
		<div className={baseStyles + " " + OrientationStyles[Orientation] + " " + UIs[UI] + " " + className}>
			{children}
		</div>
	);
}