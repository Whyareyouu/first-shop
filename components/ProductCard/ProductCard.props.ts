import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string;
	image: string;
	description: string;
	price: string;
	category: string;
}
