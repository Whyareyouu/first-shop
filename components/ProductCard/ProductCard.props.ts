import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductsModel } from '../../interfaces/product.interface';

export interface ProductCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: ProductsModel;
}
