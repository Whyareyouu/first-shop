import { RatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';
import StartIcon from './Star.svg';
export const Rating = ({
	rating,
	className,
	...props
}: RatingProps): JSX.Element => {
	const { rate, count } = rating;
	return (
		<div className={cn(styles.rating, className)} {...props}>
			<span className={styles.rate}>★★★★★</span>
			<span
				className={styles.ratingActive}
				style={{ width: `${(rate / 100) * 2000}%` }}>
				★★★★★
			</span>
		</div>
	);
};
