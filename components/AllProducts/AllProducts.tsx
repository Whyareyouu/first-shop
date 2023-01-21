import { ProductCard } from '../ProductCard/ProductCard';
import styles from './AllProducts.module.css';
import { AllProductsProps } from './AllProducts.props';
import cn from 'classnames';
export const AllProducts = ({
	products,
	className,
	...props
}: AllProductsProps): JSX.Element => {
	return (
		<div className={cn(styles.products, className)} {...props}>
			{products &&
				products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id.toString()}
						title={product.title}
						price={product.price}
						description={product.description}
						image={product.image}
						category={product.category}
					/>
				))}
		</div>
	);
};
