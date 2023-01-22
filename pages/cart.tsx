import { useTypedSelector } from '../hooks/useTypedSelector';

const Cart = ({}) => {
	const { cart } = useTypedSelector((state) => state);
	console.log(cart);
	return <h1>Cart</h1>;
};
export default Cart;
