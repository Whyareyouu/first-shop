import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ProductModel } from '../../helpers/Product.type';
import { ProductsModel } from '../../interfaces/product.interface';
import { withLayout } from '../../layouts/Layout';
import { ProductPageComponent } from '../../page-components';

const Product = (product: ProductModel): JSX.Element => {
	return <ProductPageComponent product={product} />;
};
export default withLayout(Product);
export const getStaticPaths: GetStaticPaths = async () => {
	const { data: products } = await axios.get<ProductsModel[]>(
		'https://fakestoreapi.com/products'
	);
	const paths = products.map((product) => {
		// return `/product/${product.id}`;
		return {
			params: { id: `${product.id}` },
		};
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
	const { data: product } = await axios.get<ProductModel>(
		`https://fakestoreapi.com/products/${id}`
	);
	return {
		props: product,
	};
};
