import Head from 'next/head';
import { GetStaticProps } from 'next';
import { ProductsModel } from '../../interfaces/product.interface';
import axios from 'axios';
import { ProductCard } from '../../components';
import { withLayout } from '../../layouts/Layout';

function Home({ products }: ProductProps): JSX.Element {
	return (
		<>
			{products &&
				products.map((product) => (
					<ProductCard
						key={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
						image={product.image}
						category={product.category}
					/>
				))}
		</>
	);
}
export default withLayout(Home);
export const getStaticProps: GetStaticProps = async () => {
	const { data: products } = await axios.get<ProductsModel[]>(
		'https://fakestoreapi.com/products'
	);
	return {
		props: {
			products,
		},
	};
};

interface ProductProps extends Record<string, unknown> {
	products: ProductsModel[];
}
