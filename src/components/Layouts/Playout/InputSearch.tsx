import { default as Button } from "./Button";
import { default as SvgIcon } from "./SvgIcon";

export interface InputSearchProps {
  placeholder: string;
  buttonText: string;
}

export default function InputSearch({
  placeholder,
  buttonText,
}: Readonly<InputSearchProps>) {
  return (
    <div className="flex items-center gap-P-2 p-P-1 bg-P-Background border border-P-BackgroundBorder rounded-lg">
      <SvgIcon svgName='search' svgClassName="mx-P-1" />
      <input
        type="text"
        className="w-full p-P-2 leading-5 placeholder-P-TextMiddle"
        placeholder={placeholder}
      />
      <Button>
        {buttonText}
      </Button>
    </div>
  );
}