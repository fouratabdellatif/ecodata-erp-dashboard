import * as api from '../api/index.js';
import { FETCH_ALL_FACT_TABLE } from '../constants/actionTypes.js';

export const getFactTable = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFactTable();

        dispatch({ type: FETCH_ALL_FACT_TABLE, payload: data });
    } catch (error) {
        console.log(error);
    }
};