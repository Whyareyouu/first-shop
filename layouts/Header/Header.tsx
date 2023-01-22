import { Bag, Favorite, Input } from '../../components';
import Link from 'next/link';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={cn(styles.header, className)} {...props}>
			<Input placeholder='Search' className={styles.input} />
			<Link href='/favorites'>
				<Favorite icon='true' className={styles.favorite} />
			</Link>
			<Link href='/cart'>
				<Bag className={styles.bag} />
			</Link>
			<span className={styles.avatar}>Avatar</span>
		</header>
	);
};
