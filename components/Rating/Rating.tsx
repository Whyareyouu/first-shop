import { RatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';
import StartIcon from './Star.svg';
export const Rating = ({
	rating,
	className,
	...props
}: RatingProps): JSX.Element => {
	return <div className={cn(styles.rating, className)} {...props}></div>;
};
