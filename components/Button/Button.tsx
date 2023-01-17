import { ButtonProps } from './Button.props';
import AddIcon from './Plus.svg';
import styles from './Button.module.css';
import cn from 'classnames';
export const Button = ({ icon = 'false' }: ButtonProps): JSX.Element => {
	return (
		<>
			<AddIcon
				className={cn(styles.icon, { [styles.visible]: icon === 'true' })}
			/>
		</>
	);
};
