import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
export interface RemoveButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	isAdded?: boolean;
	types?: 'default' | 'cart';
}
