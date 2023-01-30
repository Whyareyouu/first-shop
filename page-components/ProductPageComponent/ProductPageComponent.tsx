import styles from './ProductPage.module.css';
import cn from 'classnames';
import { ProductPageProps } from './ProductPage.props';
import Image from 'next/image';
import { Button, Favorite, Price, Rating } from '../../components';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
export const ProductPageComponent = ({
	product,
	className,
	...props
}: ProductPageProps): JSX.Element => {
	const { image, title, price, description, rating, id } = product;
	const { addProduct, addToFavorite, removeFavorite } = useActions();
	const { cart, favorite } = useTypedSelector((state) => state);
	const isAddedToCart = cart.some((product) => product.id === id);
	const isAddedToFavorite = favorite.some((product) => product.id === id);
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
				<Rating rating={rating} />
				<Price price={price} />
				<div className={styles.buttons}>
					<Favorite
						onClick={() =>
							!isAddedToFavorite
								? addToFavorite(product)
								: removeFavorite({ id: id })
						}
						isAdded={isAddedToFavorite}
					/>
					<Button
						isAdded={isAddedToCart}
						onClick={() => addProduct({ quantity: 1, ...product })}
						disabled={isAddedToCart}
						types={'default'}
					/>
				</div>
			</div>
		</div>
	);
};
