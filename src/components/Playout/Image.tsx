import NextImage, { ImageProps as NextImageProps } from 'next/image'
import Link from 'next/link';

interface ImageProps extends NextImageProps {
  href?: string;
  title?: string;
  LinkClassName?: string;
}

export default function Image({
  href,
  title,
  LinkClassName,
  src,
  alt,
  width,
  height,
  className,
  ...props
}: Readonly<ImageProps>) {

  // TODO : if Width and Height are not provided, use the image's original width and height

  if (href) {
    return (
      <Link
        href={href}
        className={LinkClassName}
        title={title || alt}
      >
        <span className="sr-only">
          {title || alt}
        </span>
        <NextImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          {...props}
        />
      </Link>

    );
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
}