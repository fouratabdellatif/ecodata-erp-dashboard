import { FETCH_ALL_FACT_TABLE } from "../constants/actionTypes";

export const FactTableReducer = (factTable = [], action) => {
    switch (action.type) {
        case FETCH_ALL_FACT_TABLE:
            return action.payload;
        default:
            return factTable;
    }
};

export default FactTableReducer;