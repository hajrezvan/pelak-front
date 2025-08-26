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
    <div className="flex items-center gap-PC-2 p-PC-1 bg-PC-Background border border-PC-BackgroundBorder rounded-lg">
      <SvgIcon svgName='search' svgClassName="mx-PC-1" />
      <input
        type="text"
        className="w-full p-PC-2 leading-5 placeholder-PC-TextMiddle"
        placeholder={placeholder}
      />
      <Button>
        {buttonText}
      </Button>
    </div>
  );
}