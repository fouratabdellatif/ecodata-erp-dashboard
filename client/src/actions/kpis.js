import * as api from '../api/index.js';
import { FETCH_ALL_KPIS } from '../constants/actionTypes.js';

export const getKpis = () => async (dispatch) => {
    try {
        const { data } = await api.fetchKpis();

        dispatch({ type: FETCH_ALL_KPIS, payload: data });
    } catch (error) {
        console.log(error);
    }
};