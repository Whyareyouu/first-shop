import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import { ProductsModel } from '../../interfaces/product.interface';
import { AllProducts } from '../../components';
import { withLayout } from '../../layouts/Layout';
const Category = ({ category }: CategoryProps): JSX.Element => {
	return <AllProducts products={category} />;
};
export default withLayout(Category);

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: categories } = await axios.get<string[]>(
		'https://fakestoreapi.com/products/categories'
	);
	const paths = categories.map((category) => {
		return {
			params: { category: `${category}` },
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
	const title = params.category;
	const { data: category } = await axios.get<ProductsModel[]>(
		`https://fakestoreapi.com/products/category/${title}`
	);
	return {
		props: { category: category },
	};
};
export interface CategoryProps extends Record<string, unknown> {
	category: ProductsModel[];
}
