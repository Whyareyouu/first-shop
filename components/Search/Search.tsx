import { Input } from '../Input/Input';
import SearchIcon from './search.svg';
import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import cn from 'classnames';
import { useActions } from '../../hooks/useActions';
import { useRouter } from 'next/router';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const { onChangeValue } = useActions();
	const { SearchInput } = useTypedSelector((state) => state);
	const router = useRouter();
	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: SearchInput.value,
			},
		});
	};
	return (
		<div className={cn(className, styles.search)} {...props}>
			<Input
				placeholder='Search...'
				className={styles.input}
				onChange={(event) => {
					onChangeValue(event.target.value);
				}}
				onKeyDown={(event) => event.key === 'Enter' && goToSearch()}
			/>
			<button className={styles.btn} onClick={goToSearch}>
				<SearchIcon className={styles.icon} />
			</button>
		</div>
	);
};
