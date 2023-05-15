import { FETCH_ALL_KPIS } from "../constants/actionTypes";

export const KpiReducer = (kpis = [], action) => {
    switch (action.type) {
        case FETCH_ALL_KPIS:
            return action.payload;
        default:
            return kpis;
    }
};

export default KpiReducer;