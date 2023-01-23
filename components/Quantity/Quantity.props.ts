import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface QuantityProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: 'default' | 'cart';
	idElement: number;
}
