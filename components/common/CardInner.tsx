import React from "react";
import "../../styles/CardInner.css"

export default function CardInner({children, className}: { children: React.ReactNode, className?: string }) {
	return (
		<div className={`${className || ''} card-inner p-12`}>
			{children}
		</div>
	);
}