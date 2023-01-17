import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ProductModel } from '../../helpers/Product.type';
export interface ProductPageProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	product: ProductModel;
}
