import { Bag, Favorite, Input } from '../../components';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={cn(styles.header, className)} {...props}>
			<Input placeholder='Search' className={styles.input} />
			<Favorite icon='true' className={styles.favorite} />
			<Bag className={styles.bag} />
			<span className={styles.avatar}>Avatar</span>
		</header>
	);
};
