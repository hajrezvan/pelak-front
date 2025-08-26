export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  H?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} 

const baseClass = 'text-center sm:text-start';

export default function Heading({
  children,
  className,
  H = 'h1',
  ...props
}: Readonly<HeadingProps>) {

  return (
    <>
      {H === 'h1' && <h1 className={baseClass + " " + className} {...props}>{children}</h1>}
      {H === 'h2' && <h2 className={baseClass + " " + className} {...props}>{children}</h2>}
      {H === 'h3' && <h3 className={baseClass + " " + className} {...props}>{children}</h3>}
      {H === 'h4' && <h4 className={baseClass + " " + className} {...props}>{children}</h4>}
      {H === 'h5' && <h5 className={baseClass + " " + className} {...props}>{children}</h5>}
      {H === 'h6' && <h6 className={baseClass + " " + className} {...props}>{children}</h6>}
    </>
  );
}