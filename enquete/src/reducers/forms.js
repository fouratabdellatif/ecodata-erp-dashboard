import { CREATE } from "../constants/actionTypes";

export const FormReducer = (forms = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...forms, action.payload];
        default:
            return forms;
    }
};

export default FormReducer;