import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface BagProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	counter?: number;
}
