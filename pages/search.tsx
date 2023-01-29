import { GetStaticProps } from 'next';
import { withLayout } from '../layouts/Layout';
import axios from 'axios';
import { ProductsModel } from '../interfaces/product.interface';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AllProducts } from '../components';
import styles from '../styles/cart.module.css';
import { useRouter } from 'next/router';

const Search = ({ products }: SearchProps): JSX.Element => {
	const router = useRouter();
	const value = router.query.q;
	if (typeof value === 'string') {
		const searchedProducts = products.filter((product) =>
			product.title.toLowerCase().includes(value.toLowerCase())
		);
		return searchedProducts.length > 0 && value ? (
			<AllProducts products={searchedProducts} />
		) : (
			<div className={styles.cartEmpty}>
				Sorry, there are no products for your request.
			</div>
		);
	} else {
		return (
			<div className={styles.cartEmpty}>
				Sorry, there was a mistake. Try refreshing the page or going back a
				step.
			</div>
		);
	}
};
export default withLayout(Search);

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
interface SearchProps extends Record<string, unknown> {
	products: ProductsModel[];
}
