import MinusIcon from './minus.svg';
import PlusIcon from './plus.svg';
import { QuantityProps } from './Quantity.props';
import cn from 'classnames';
import styles from './Quantity.module.css';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
export const Quantity = ({
	idElement,
	type = 'default',
	className,
	...props
}: QuantityProps): JSX.Element => {
	const { incrQuantity } = useActions();
	const { cart } = useTypedSelector((state) => state);
	return (
		<div
			className={cn(className, styles.quantity, {
				[styles.disabled]: type !== 'cart',
			})}
			{...props}>
			<button
				className={styles.button}
				// disabled={cart[idElement].quantity <= 1}
				onClick={() => incrQuantity({ id: idElement })}>
				<MinusIcon className={styles.iconMinus} />
			</button>
			<span className={styles.count}>{1}</span>
			<button
				className={styles.button}
				onClick={() => incrQuantity({ id: idElement })}>
				<PlusIcon className={styles.icon} />
			</button>
		</div>
	);
};
