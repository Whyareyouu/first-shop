import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface QuantityProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	idElement: number;
	type: "default" | "cart";
	quantity: number;
	setQauntity: (quantity: number) => void;
}
