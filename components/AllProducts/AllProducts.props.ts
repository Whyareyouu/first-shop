import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductsModel } from '../../interfaces/product.interface';
export interface AllProductsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	products: ProductsModel[];
	type?: 'cart' | 'default';
}
