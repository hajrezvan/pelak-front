export default function SvgIcon({svgName,className}: Readonly<{svgName: string;className?: string}>) {
  
    const svgIcon = {
        circle : (
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="5" fill="none" />
        ),
        box : (
        <rect x="5" y="5" width="90" height="90" stroke="currentColor" strokeWidth="5" fill="none" />
        ),
        bar : (
        <path d="M15 25 L85 25 M15 50 L85 50 M15 75 L85 75" stroke="currentColor" strokeWidth="5" fill="none" />
        ),
        arrowDown : (
        <path d="M15 25 L50 85 M50 85 L85 25" stroke="currentColor" strokeWidth="5" fill="none" />
        ),
        arrowLeft : (
        <path d="M75 15 L15 50 M15 50 L75 85" stroke="currentColor" strokeWidth="5" fill="none" />
        ),
        arrowRight : (
        <path d="M25 15 L85 50 M85 50 L25 85" stroke="currentColor" strokeWidth="5" fill="none" />
        ),
        xMark : (
        <path d="M25 25 L75 75 M25 75 L75 25" stroke="currentColor" strokeWidth="5" fill="none" />
        )
    }
  
    return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
        {svgIcon[svgName as keyof typeof svgIcon]}
    </svg>
  );
}
