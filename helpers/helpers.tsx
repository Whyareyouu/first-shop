import ManIcon from './icons/men-clothing-svgrepo-com.svg';
import WomanIcon from './icons/women-clothing-svgrepo-com.svg';
import TreasureIcon from './icons/treasure-chest-free-illustration-4-svgrepo-com.svg';
import ElectronicsIcon from './icons/electronics-svgrepo-com.svg';
import CategoriesIcon from './icons/category.svg';
import Categories from './../interfaces/categories.interface';

export const categories: Categories[] = [
	{
		title: 'all categories',
		_id: '34d841fb-5d2e-4bd6-9dda-1b659f9717fd',
		icon: <CategoriesIcon />,
	},
	{
		title: "men's clothing",
		_id: '55f6e7b7-d2ed-44c2-90aa-5b6c9a872c95',
		icon: <ManIcon />,
	},
	{
		title: "women's clothing",
		_id: 'aa5db5e3-5803-493b-9800-8254e0f5e20b',
		icon: <WomanIcon />,
	},
	{
		title: 'jewelery',
		_id: 'b4a13dcf-63a5-42a3-8127-ff2eb7929202',
		icon: <TreasureIcon />,
	},
	{
		title: 'electronics',
		_id: 'c5d37f5a-3abc-4daf-997a-10ed125ce69f',
		icon: <ElectronicsIcon />,
	},
];
