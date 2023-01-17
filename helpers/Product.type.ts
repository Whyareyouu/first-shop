import { Rating } from '../interfaces/product.interface';

export type ProductModel = {
	id: number;
	title: string;
	price: string;
	description: string;
	category: string;
	image: string;
	rating: Rating;
};
