import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
export interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	isAdded?: boolean;
	types?: 'cart' | 'default';
}
