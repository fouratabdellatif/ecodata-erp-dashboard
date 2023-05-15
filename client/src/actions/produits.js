import * as api from '../api/index.js';
import { FETCH_ALL_PRODUITS } from '../constants/actionTypes.js';

export const getProduits = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProduits();

        dispatch({ type: FETCH_ALL_PRODUITS, payload: data });
    } catch (error) {
        console.log(error);
    }
};