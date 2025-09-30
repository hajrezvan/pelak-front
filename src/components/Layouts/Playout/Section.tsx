export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  children,
  className
}: Readonly<SectionProps>) {
  return (
    <section className={className}>
      {children}
    </section>
  );
}