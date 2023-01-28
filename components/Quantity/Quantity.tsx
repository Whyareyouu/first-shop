import MinusIcon from "./minus.svg";
import PlusIcon from "./plus.svg";
import { QuantityProps } from "./Quantity.props";
import cn from "classnames";
import styles from "./Quantity.module.css";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
export const Quantity = ({
	idElement,
	quantity,
	setQauntity,
	type = "default",
	className,
	...props
}: QuantityProps): JSX.Element => {
	const { changeQuantity } = useActions();
	useEffect(() => {
		if (type === "cart") {
			changeQuantity({ id: idElement, quantity: quantity, type: type });
		}
	}, [quantity]);
	return (
		<div
			className={cn(className, styles.quantity, {
				[styles.disabled]: type !== "cart",
			})}
			{...props}>
			<button
				className={styles.button}
				disabled={quantity <= 1}
				onClick={() => {
					setQauntity(quantity - 1);
				}}>
				<MinusIcon className={styles.iconMinus} />
			</button>
			<span className={styles.count}>{quantity}</span>
			<button
				className={styles.button}
				onClick={() => {
					setQauntity(quantity + 1);
				}}>
				<PlusIcon className={styles.icon} />
			</button>
		</div>
	);
};
