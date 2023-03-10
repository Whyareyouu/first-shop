import { ButtonProps } from './Button.props';
import AddIcon from './Plus.svg';
import AddedIcon from './added.svg';
import styles from './Button.module.css';
import cn from 'classnames';
export const Button = ({
	isAdded,
	types = 'default',
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(className, styles.button, {
				[styles.disabled]: types === 'cart',
			})}
			{...props}>
			<AddedIcon
				className={cn(styles.disabled, styles.added, {
					[styles.active]: isAdded,
				})}
			/>
			<AddIcon
				className={cn(styles.icon, {
					[styles.disabled]: isAdded,
				})}
			/>
		</button>
	);
};
