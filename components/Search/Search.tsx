import { Input } from "../Input/Input";
import SearchIcon from "./search.svg";
import styles from "./Search.module.css";
import { SearchProps } from "./Search.props";
import cn from "classnames";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input placeholder="Search..." className={styles.input} />
			<button className={styles.btn}>
				<SearchIcon className={styles.icon} />
			</button>
		</div>
	);
};
