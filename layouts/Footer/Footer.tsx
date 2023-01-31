import { format } from 'date-fns';
import cn from 'classnames';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(styles.footerWrapper, className)} {...props}>
			<p>FirstShop © 2023 - {format(new Date(), 'yyyy')} All rights reserved</p>
		</footer>
	);
};
