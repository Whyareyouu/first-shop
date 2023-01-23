import { AllProducts } from '../components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { withLayout } from '../layouts/Layout';
import styles from '../styles/cart.module.css';

const Cart = ({}) => {
	const { cart } = useTypedSelector((state) => state);
	return cart.length > 0 ? (
		<AllProducts products={cart} className={styles.cart} type='cart' />
	) : (
		<h1 className={styles.cartEmpty}>The shopping cart is empty</h1>
	);
};
export default withLayout(Cart);
