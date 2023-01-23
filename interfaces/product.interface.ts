export interface Rating {
	rate: number;
	count: number;
}
export interface ProductsModel {
	id: number;
	title: string;
	price: string;
	description: string;
	category: string;
	image: string;
	rating: Rating;
	quantity?: number;
}
