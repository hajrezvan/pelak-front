export default function Container({children,className}: Readonly<{children: React.ReactNode;className?: string}>) {
    return (
    <div className={`container max-w-7xl mx-auto ${className}`}>
        {children}
    </div>
  );
}
