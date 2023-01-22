import { ButtonProps } from './Button.props';
import AddIcon from './Plus.svg';
import styles from './Button.module.css';
import cn from 'classnames';
export const Button = ({
	icon = 'false',
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button className={cn(className, styles.button)} {...props}>
			<AddIcon
				className={cn(styles.icon, { [styles.visible]: icon === 'true' })}
			/>
		</button>
	);
};
