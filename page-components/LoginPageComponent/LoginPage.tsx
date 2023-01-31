import Link from 'next/link';
import { LoginForm } from '../../components';
import styles from './LoginPage.module.css';
import { LoginProps } from './LoginPage.props';
import cn from 'classnames';
export const LoginPage = ({ className, ...props }: LoginProps): JSX.Element => {
	return (
		<div className={cn(styles.wrapper, className)} {...props}>
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
