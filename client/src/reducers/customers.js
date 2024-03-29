import { FETCH_ALL_CUSTOMERS } from "../constants/actionTypes";

export const CustomerReducer = (customers = [], action) => {
    switch (action.type) {
        case FETCH_ALL_CUSTOMERS:
            return action.payload;
        default:
            return customers;
    }
};

export default CustomerReducer;