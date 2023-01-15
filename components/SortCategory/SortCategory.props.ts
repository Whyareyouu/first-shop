import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
export interface SortCategoryProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: string;
	children: ReactNode;
}
// "men's clothing" | 'jewelery' | 'electronics' | "women's clothing"
