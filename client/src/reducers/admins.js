import { FETCH_ALL_ADMINS, CREATE } from "../constants/actionTypes";

const AdminReducer = (admins = [], action) => {

    switch (action.type) {

        case FETCH_ALL_ADMINS:
            return action.payload;

        case CREATE:
            return [...admins, action.payload];

        default:
            return admins;

    }
    
};

export default AdminReducer
