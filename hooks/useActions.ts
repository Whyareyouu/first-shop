import { cartActions } from './../redux/features/cart/cart.slice';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { favoriteActions } from '../redux/features/favorite/favoriteSlice';
import { quantityActions } from '../redux/features/quantity/quantity.slice';

const allActions = {
	...cartActions,
	...favoriteActions,
	...quantityActions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(allActions, dispatch);
};
