import { cartActions } from './../redux/features/cart/cart.slice';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { favoriteActions } from '../redux/features/favorite/favoriteSlice';
import { SearchInputActions } from '../redux/features/SearchInput/searchInput.slice';
import { BurgenMenuActions } from '../redux/features/burgermenu/burgermenu.slise';

const allActions = {
	...cartActions,
	...favoriteActions,
	...SearchInputActions,
	...BurgenMenuActions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(allActions, dispatch);
};
