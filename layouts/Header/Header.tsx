import { Input } from '../../components';

export const Header = ({ ...props }) => {
	return (
		<header {...props}>
			<Input placeholder='Search' />
		</header>
	);
};
