import { Bag, BurgerNavBar, Favorite, Search } from '../../components';
import Link from 'next/link';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={cn(styles.header, className)} {...props}>
			<Search className={styles.input} />
			<Link href='/favorites'>
				<Favorite className={styles.favorite} />
			</Link>
			<Link href='/cart'>
				<Bag className={styles.bag} />
			</Link>
			<BurgerNavBar />
		</header>
	);
};
