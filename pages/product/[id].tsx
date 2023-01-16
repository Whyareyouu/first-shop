import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ProductsModel } from '../../interfaces/product.interface';

const Product = (products: ProductProps): JSX.Element => {
	return <h1>some text</h1>;
};
export default Product;
export const getStaticPaths: GetStaticPaths = async () => {
	const { data: products } = await axios.get<ProductsModel[]>(
		'https://fakestoreapi.com/products'
	);
	const paths = products.map((product) => {
		return `/product/${product.id}`;
	});
	console.log(paths);
	return {
		paths,
		fallback: false,
	};
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (params) {
		const id = params.id;
	}
	const { data: products } = await axios.get<ProductsModel[]>(
		'https://fakestoreapi.com/products'
	);
	return {
		props: { products },
	};
};
interface ProductProps extends Record<string, unknown> {
	products: ProductsModel[];
}
