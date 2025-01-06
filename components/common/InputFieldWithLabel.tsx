import React from "react";

type InputFieldWithLabelProps = {
  id: string;
  label: string;
  type: string;
  svg: React.ReactNode;
  className?: string;
  defaultValue?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
};

export default function InputFieldWithLabel({
  id,
  label,
  type,
  svg,
  className,
  defaultValue,
  onChange,
}: InputFieldWithLabelProps) {
  return (
    <div className={`${className || ""}`}>
      <label className="font-medium">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-4 flex items-center ps-3.5 pointer-events-none">
          {svg}
        </div>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[calc(100%-1rem)] ps-10 p-2.5 ml-4"
          defaultValue={defaultValue}
          id={id}
          name={id}
          type={type}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
}
