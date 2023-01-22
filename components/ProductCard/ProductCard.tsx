import { ProductCardProps } from './ProductCard.props';
import cn from 'classnames';
import styles from './ProductCard.module.css';
import Image from 'next/image';
import { Button } from '../Button/Button';
import Link from 'next/link';
import { Favorite } from '../Favorite/Favorite';
import { Price } from '../Price/Price';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const ProductCard = ({
	product,
	className,
	...props
}: ProductCardProps): JSX.Element => {
	const { image, title, price, category, id } = product;
	const { addProduct, addToFavorite, removeFavorite } = useActions();
	const { cart, favorite } = useTypedSelector((state) => state);
	const isAddedToCart = cart.some((product) => product.id === id);
	const isAddedToFavorite = favorite.some((product) => product.id === id);
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
			</Link>
			<div className={styles.priceWrapper}>
				<Price price={price} />
				<div className={styles.icons}>
					<Favorite
						onClick={() => addToFavorite(product)}
						isAdded={isAddedToFavorite}
					/>
					<Button
						isAdded={isAddedToCart}
						onClick={() => addProduct(product)}
						disabled={isAddedToCart}
					/>
				</div>
			</div>
		</div>
	);
};
