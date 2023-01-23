import { ProductCard } from '../ProductCard/ProductCard';
import styles from './AllProducts.module.css';
import { AllProductsProps } from './AllProducts.props';
import cn from 'classnames';
export const AllProducts = ({
	products,
	className,
	type = 'default',
	...props
}: AllProductsProps): JSX.Element => {
	return (
		<div
			className={cn(className, {
				[styles.products]: type === 'default',
				[styles.cart]: type === 'cart',
			})}
			{...props}>
			{products &&
				products.map((product) => (
					<ProductCard key={product.id} product={product} type={type} />
				))}
		</div>
	);
};
