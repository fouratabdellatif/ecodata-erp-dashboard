import * as api from '../api/index.js';
import { CREATE } from '../constants/actionTypes.js';

export const createForm = (form) => async (dispatch) => {
    try {

        const { data } = await api.createForm(form);

        dispatch({ type: CREATE, payload: data });

    } catch (error) {
        console.log(error);
    }
};