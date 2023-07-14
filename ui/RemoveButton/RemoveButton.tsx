import { RemoveButtonProps } from './RemoveButton.props';
import RemoveIcon from './remove.svg';
import styles from './RemoveButton.module.css';
import cn from 'classnames';
export const RemoveButton = ({
	isAdded,
	types = 'default',
	className,
	...props
}: RemoveButtonProps): JSX.Element => {
	return (
		<button className={cn(className, styles.button)} {...props}>
			<RemoveIcon
				className={cn(styles.disabled, {
					[styles.active]: types === 'cart' && isAdded,
				})}
			/>
		</button>
	);
};
