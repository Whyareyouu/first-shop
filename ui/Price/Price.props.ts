import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
export interface PriceProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	price: string;
}
