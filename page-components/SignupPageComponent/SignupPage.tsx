import { RegisterForm } from '../../components';
import styles from './SignupPage.module.css';
import cn from 'classnames';
import { SignUpProps } from './SignupPage.props';
export const SignupPage = ({
	className,
	...props
}: SignUpProps): JSX.Element => {
	return (
		<div className={cn(styles.wrapper, className)} {...props}>
			<h1 className={styles.title}>Create an account</h1>
			<RegisterForm />
		</div>
	);
};

export default SignupPage;
