import {ProductCardProps} from './ProductCard.props';
import cn from 'classnames';
import styles from './ProductCard.module.css';
import Image from 'next/image';
import {Button} from '../../ui/Button/Button';
import Link from 'next/link';
import {Favorite} from '../../ui/Favorite/Favorite';
import {Price} from '../../ui/Price/Price';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {RemoveButton} from '../../ui/RemoveButton/RemoveButton';
import {Quantity} from '../Quantity/Quantity';
import {useState} from 'react';

export const ProductCard = ({
                                product,
                                type = 'default',
                                className,
                                ...props
                            }: ProductCardProps): JSX.Element => {
    const {image, title, price, category, id} = product;
    const [quantity, setQuantity] = useState(type === 'cart' ? 1 : 0);
    const {addProduct, addToFavorite, removeProduct, removeFavorite} =
        useActions();
    const {cart, favorite} = useTypedSelector((state) => state);
    const isAddedToCart = cart.some((product) => product.id === id);
    const isAddedToFavorite = favorite.some((product) => product.id === id);
    const IMAGE_PATH = image.replaceAll('https://fakestoreapi.com', '');
    return (
        <div
            className={cn(className, styles.defaultCard, {
                [styles.card]: type === 'default',
                [styles.cartProduct]: type === 'cart',
            })}
            {...props}>
            <Link href={`/product/${id}`} className={styles.link}>
                <Image
                    src={process.env.NEXT_PUBLIC_DOMAIN + IMAGE_PATH}
                    alt={title}
                    width={224}
                    height={236}
                    className={styles.image}
                />
                <div className={styles.description}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.category}>Category: {category}</div>
                </div>
            </Link>
            <div className={styles.priceWrapper}>
                <Price
                    className={styles.price}
                    price={quantity > 1 ? (+price * quantity).toFixed(2) + '' : price}
                />
                <div className={styles.icons}>
                    <Favorite
                        onClick={() =>
                            !isAddedToFavorite
                                ? addToFavorite(product)
                                : removeFavorite({id: id})
                        }
                        isAdded={isAddedToFavorite}
                    />
                    <Button
                        isAdded={isAddedToCart}
                        onClick={() => addProduct({quantity: quantity, ...product})}
                        disabled={isAddedToCart}
                        types={type}
                    />
                    <Quantity
                        type={type}
                        quantity={quantity}
                        setQauntity={setQuantity}
                        idElement={id}
                    />
                    <RemoveButton
                        types={type}
                        isAdded={isAddedToCart}
                        className={styles.remove}
                        onClick={() => removeProduct({id: id})}
                    />
                </div>
            </div>
        </div>
    );
};
