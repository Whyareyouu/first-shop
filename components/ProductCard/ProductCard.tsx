import { ProductCardProps } from './ProductCard.props';
import cn from 'classnames';
import styles from './ProductCard.module.css';
import AddIcon from './Plus.svg';
import FavoriteIcon from './Favorite.svg';
import Image from 'next/image';
import Link from 'next/link';

export const ProductCard = ({
	image,
	description,
	title,
	price,
	category,
	className,
	...props
}: ProductCardProps): JSX.Element => {
	const IMAGE_PATH = image.replaceAll('https://fakestoreapi.com', '');
	return (
		<div className={cn(className, styles.card)} {...props}>
			<Image
				src={process.env.NEXT_PUBLIC_DOMAIN + IMAGE_PATH}
				alt={title}
				width={331}
				height={290}
			/>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.category}>Category: {category}</div>
			<div className={styles.description}>{description}</div>
			<div className={styles.priceWrapper}>
				<div className={styles.price}>
					{price} <span className={styles.currency}>$</span>
				</div>
				<div className={styles.icons}>
					<FavoriteIcon />
					<AddIcon />
				</div>
			</div>
		</div>
	);
};
