import styles from './BurgerNavBar.module.css';
import OpenIcon from './open.svg';
import UserIcon from './user.svg';
import CloseIcon from './close.svg';
import cn from 'classnames';
import Link from 'next/link';
import { categories } from '../../helpers/helpers';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { BurgerNavBarProps } from './BurgerNavBar.props';
export const BurgerNavBar = ({
	className,
	...props
}: BurgerNavBarProps): JSX.Element => {
	const { burgermenu } = useTypedSelector((state) => state);
	const { isOppened } = useActions();
	return (
		<div className={cn(styles.BurgerNavBar, className)} {...props}>
			<button className={styles.btn} onClick={() => isOppened()}>
				<OpenIcon
					className={cn(styles.openIcon, { [styles.disabled]: burgermenu })}
				/>
				<CloseIcon
					className={cn(styles.openIcon, { [styles.disabled]: !burgermenu })}
				/>
			</button>
			<nav className={cn(styles.disabled, { [styles.Navbar]: burgermenu })}>
				<ul className={styles.list}>
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
		</div>
	);
};
