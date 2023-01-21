import styles from './Navbar.module.css';
import { categories } from '../../helpers/helpers';
import LogoIcon from './logo.svg';
import Link from 'next/link';
export const Navbar = ({ ...props }): JSX.Element => {
	return (
		<nav {...props}>
			<ul className={styles.Navbar}>
				<LogoIcon className={styles.logo} />
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
		</nav>
	);
};
