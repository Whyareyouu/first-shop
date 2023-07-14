import { FavoriteProps } from './Favorite.props';
import FavoriteIcon from './Favorite.svg';
import styles from './Favorite.module.css';
import cn from 'classnames';
export const Favorite = ({
	isAdded,
	className,
	...props
}: FavoriteProps): JSX.Element => {
	return (
		<div className={className} {...props}>
			<FavoriteIcon className={cn(styles.icon, { [styles.active]: isAdded })} />
		</div>
	);
};
