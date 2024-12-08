import React from "react";

export default function InputFieldWithLabel({id, label, type, svg, className}) {
	return (
		<div className={`${className || ''}`}>
			<label className="font-medium">{label}</label>
			<div className="relative">
				<div className="absolute inset-y-0 start-4 flex items-center ps-3.5 pointer-events-none">
					{svg}
				</div>
				<input type={type} id={id}
				       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
					        focus:ring-blue-500 focus:border-blue-500 block w-[calc(100%-1rem)] ps-10 p-2.5 ml-4"
				/>
			</div>
		</div>
	);
}