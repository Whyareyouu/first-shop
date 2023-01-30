import { RegisterForm } from '../../components';
import styles from './SignupPage.module.css';
export const SignupPage = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Create an account</h1>
			<RegisterForm />
		</div>
	);
};

export default SignupPage;
