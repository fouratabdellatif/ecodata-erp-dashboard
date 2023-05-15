import * as api from '../api/index.js';
import { CREATE, FETCH_ALL_ADMINS } from '../constants/actionTypes.js';

export const getAdmins = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAdmins();

        dispatch({ type: FETCH_ALL_ADMINS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const addAdmin = (admin) => async (dispatch) => {
    try {

        const { data } = await api.addAdmin(admin);

        dispatch({ type: CREATE, payload: data });

    } catch (error) {
        console.log(error);
    }
};