import { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';
import cn from 'classnames';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	const { burgermenu } = useTypedSelector((state) => state);
	return (
		<div className={cn(styles.wrapper, { [styles.burgermenu]: burgermenu })}>
			<Header className={styles.header} />
			<Navbar className={styles.navbar} />
			<main className={cn(styles.main)}>{children}</main>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
