import style from './ProductPage.module.css';
import cn from 'classnames';
import { ProductPageProps } from './ProductPage.props';
import Image from 'next/image';
export const ProductPageComponent = ({
	product,
	className,
	...props
}: ProductPageProps): JSX.Element => {
	const { image, title } = product.product;
	const IMAGE_PATH = image.replaceAll('https://fakestoreapi.com', '');
	return (
		<div className={cn(className, style.ProductPage)} {...props}>
			<h1>{title}</h1>
			<Image
				src={process.env.NEXT_PUBLIC_DOMAIN + IMAGE_PATH}
				alt={title}
				width={500}
				height={500}
			/>
		</div>
	);
};
