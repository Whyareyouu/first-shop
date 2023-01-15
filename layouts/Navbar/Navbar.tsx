import styles from './Navbar.module.css';
import { categories } from '../../helpers/helpers';
export const Navbar = ({ ...props }): JSX.Element => {
	return (
		<nav {...props}>
			<ul className={styles.Navbar}>
				{categories.map((category) => (
					<li key={category._id} className={styles.category}>
						<span className={styles.icon}>{category.icon}</span>
						{category.title}
					</li>
				))}
			</ul>
		</nav>
	);
};
