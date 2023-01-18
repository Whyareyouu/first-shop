import styles from './Price.module.css';
import cn from 'classnames';
import { PriceProps } from './Price.props';
export const Price = ({
	price,
	className,
	...props
}: PriceProps): JSX.Element => {
	return (
		<div className={cn(styles.price, className)} {...props}>
			{price} <span className={styles.currency}>$</span>
		</div>
	);
};
