import styles from './Bag.module.css';
import { BagProps } from './Bag.props';
import BagIcon from './bag.svg';
import cn from 'classnames';
export const Bag = ({
	counter = 0,
	className,
	...props
}: BagProps): JSX.Element => {
	return (
		<div className={cn(styles.bag, className)} {...props}>
			<BagIcon className={styles.icon} />
			<span className={cn(styles.counter, { [styles.visible]: counter > 0 })}>
				{counter}
			</span>
		</div>
	);
};
