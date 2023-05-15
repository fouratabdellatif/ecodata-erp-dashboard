import * as api from '../api/index.js';
import { FETCH_ALL_CUSTOMERS } from '../constants/actionTypes.js';

export const getCustomers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCustomers();

        dispatch({ type: FETCH_ALL_CUSTOMERS, payload: data });
    } catch (error) {
        console.log(error);
    }
};