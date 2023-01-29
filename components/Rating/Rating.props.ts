import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Rating } from '../../interfaces/product.interface';

export interface RatingProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	rating: Rating;
}
