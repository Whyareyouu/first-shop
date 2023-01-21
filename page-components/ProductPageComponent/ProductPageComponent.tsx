import styles from './ProductPage.module.css';
import cn from 'classnames';
import { ProductPageProps } from './ProductPage.props';
import Image from 'next/image';
import { Button, Favorite, Price } from '../../components';
export const ProductPageComponent = ({
	product,
	className,
	...props
}: ProductPageProps): JSX.Element => {
	const { image, title, price, description, rating } = product;
	const IMAGE_PATH = image.replaceAll('https://fakestoreapi.com', '');
	return (
		<div className={cn(className, styles.ProductPage)} {...props}>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.product}>
				<Image
					src={process.env.NEXT_PUBLIC_DOMAIN + IMAGE_PATH}
					alt={title}
					width={500}
					height={500}
				/>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={styles.cart}>
				<h2>Add to cart</h2>
				<span>Rating :{rating.rate}</span>
				<Price price={price} />
				<div className={styles.buttons}>
					<Favorite icon='true' />
					<Button icon='true' />
				</div>
			</div>
		</div>
	);
};
