import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductsModel } from '../../interfaces/product.interface';
export interface ProductPageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: ProductsModel;
}
