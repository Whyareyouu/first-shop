import { SortCategoryProps } from './SortCategory.props';
import styles from './SortCategory.module.css';
import cn from 'classnames';
export const SortCategory = ({
	type,
	children,
	className,
	...props
}: SortCategoryProps): JSX.Element => {
	switch (type) {
		case "men's clothing":
			return (
				<div className={cn(styles.SortCategory, className)} {...props}>
					{children}
				</div>
			);
		case "women's clothing":
			return (
				<div className={cn(styles.SortCategory, className)} {...props}>
					{children}
				</div>
			);
		case 'jewelery':
			return (
				<div className={cn(styles.SortCategory, className)} {...props}>
					{children}
				</div>
			);
		case 'electronics':
			return (
				<div className={cn(styles.SortCategory, className)} {...props}>
					{children}
				</div>
			);
		default:
			return <h2>Неверный тип сортировки</h2>;
	}
};
