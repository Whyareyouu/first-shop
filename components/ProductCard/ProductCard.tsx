import { ProductCardProps } from './ProductCard.props';
import cn from 'classnames';
import styles from './ProductCard.module.css';
import Image from 'next/image';
import { Button } from '../Button/Button';
import Link from 'next/link';
import { Favorite } from '../Favorite/Favorite';
import { Price } from '../Price/Price';
import { useActions } from '../../hooks/useActions';

export const ProductCard = ({
	product,
	className,
	...props
}: ProductCardProps): JSX.Element => {
	const { image, title, price, category, id } = product;
	const { addProduct } = useActions();
	const IMAGE_PATH = image.replaceAll('https://fakestoreapi.com', '');
	return (
		<div className={cn(className, styles.card)} {...props}>
			<Link href={`/product/${id}`} className={styles.link}>
				<Image
					src={process.env.NEXT_PUBLIC_DOMAIN + IMAGE_PATH}
					alt={title}
					width={224}
					height={236}
					className={styles.image}
				/>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.category}>Category: {category}</div>
				{/* <div className={styles.description}>{description}</div> */}
			</Link>
			<div className={styles.priceWrapper}>
				<Price price={price} />
				<div className={styles.icons}>
					<Favorite icon='true' />
					<Button icon='true' onClick={() => addProduct(product)} />
				</div>
			</div>
		</div>
	);
};
