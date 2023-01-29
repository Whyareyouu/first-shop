import styles from './Navbar.module.css';
import { categories } from '../../helpers/helpers';
import LogoIcon from './logo.svg';
import Link from 'next/link';
import cn from 'classnames';
import { NavbarProps } from './Navbar.props';
import UserIcon from './user.svg';
export const Navbar = ({ className, ...props }: NavbarProps): JSX.Element => {
	return (
		<nav className={cn(styles.Navbar, className)} {...props}>
			<ul className={styles.list}>
				<Link href='/'>
					<LogoIcon className={styles.logo} />
				</Link>
				<span className={styles.title}>Categories</span>
				{categories.map((category) => (
					<li key={category._id}>
						<Link href={category.route} className={styles.category}>
							<span className={styles.icon}>{category.icon}</span>
							{category.title}
						</Link>
					</li>
				))}
			</ul>
			<Link href='/login' className={cn(styles.category, styles.account)}>
				<span className={styles.icon}>
					<UserIcon />
				</span>
				<span>Account</span>
			</Link>
		</nav>
	);
};
