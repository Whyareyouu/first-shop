import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ProductsModel } from '../../interfaces/product.interface';
import { ProductPageComponent } from '../../page-components';

const Product = (product: ProductProps): JSX.Element => {
	return <ProductPageComponent product={product} />;
};
export default Product;
export const getStaticPaths: GetStaticPaths = async () => {
	const { data: products } = await axios.get<ProductsModel[]>(
		'https://fakestoreapi.com/products'
	);
	const paths = products.map((product) => {
		return `/product/${product.id}`;
	});
	return {
		paths,
		fallback: false,
	};
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params) {
		return {
			notFound: true,
		};
	}
	const id = params.id;
	const { data: product } = await axios.get<ProductsModel[]>(
		`https://fakestoreapi.com/products/${id}`
	);
	return {
		props: { product },
	};
};
interface ProductProps extends Record<string, unknown> {
	products: ProductsModel[];
}
