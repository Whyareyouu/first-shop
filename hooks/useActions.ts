import { cartActions } from "./../redux/features/cart/cart.slice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { favoriteActions } from "../redux/features/favorite/favoriteSlice";

const allActions = {
	...cartActions,
	...favoriteActions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(allActions, dispatch);
};
