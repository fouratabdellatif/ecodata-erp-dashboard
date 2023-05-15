import { FETCH_ALL_PRODUITS } from "../constants/actionTypes";

export const ProduitReducer = (produits = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PRODUITS:
            return action.payload;
        default:
            return produits;
    }
};

export default ProduitReducer;