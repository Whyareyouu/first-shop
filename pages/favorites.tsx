import { AllProducts } from '../components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { withLayout } from '../layouts/Layout';
import styles from '../styles/cart.module.css';

const Favorites = ({}) => {
	const { favorite } = useTypedSelector((state) => state);
	return favorite.length > 0 ? (
		<AllProducts products={favorite} className={styles.cart} />
	) : (
		<h1 className={styles.cartEmpty}>The favorites list is empty</h1>
	);
};
export default withLayout(Favorites);
