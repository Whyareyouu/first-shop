import { ProductCardProps } from './ProductCard.props';
import cn from 'classnames';
import styles from './ProductCard.module.css';
import Image from 'next/image';
import { Button } from '../Button/Button';
import Link from 'next/link';
import { Favorite } from '../Favorite/Favorite';

export const ProductCard = ({
	image,
	description,
	title,
	price,
	category,
	className,
	id,
	...props
}: ProductCardProps): JSX.Element => {
	const IMAGE_PATH = image.replaceAll('https://fakestoreapi.com', '');
	return (
		<div className={cn(className, styles.card)} {...props}>
			<Link href={`/product/${id}`}>
				<Image
					src={process.env.NEXT_PUBLIC_DOMAIN + IMAGE_PATH}
					alt={title}
					width={331}
					height={290}
				/>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.category}>Category: {category}</div>
				<div className={styles.description}>{description}</div>
			</Link>
			<div className={styles.priceWrapper}>
				<div className={styles.price}>
					{price} <span className={styles.currency}>$</span>
				</div>
				<div className={styles.icons}>
					<Favorite icon='true' />
					<Button icon='true' />
				</div>
			</div>
		</div>
	);
};
