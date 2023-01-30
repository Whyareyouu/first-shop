import Link from 'next/link';
import { LoginForm } from '../../components';
import styles from './LoginPage.module.css';
export const LoginPage = (): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.loginPage}>
				<h1 className={styles.title}>Hello</h1>
				<p className={styles.register}>
					Sign in to FirstShop or{' '}
					<Link href='/signup' className={styles.link}>
						create an account
					</Link>
				</p>
				<LoginForm />
			</div>
		</div>
	);
};
