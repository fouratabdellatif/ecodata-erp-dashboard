import { combineReducers } from "redux";

import auth from "./auth";
import admins from "./admins";
import factTable from "./factTable";
import customers from "./customers";
import produits from "./produits";
import kpis from "./kpis";

const initialState = {
  mode: localStorage.setItem('mode', "light"),
};

export const reducers = combineReducers({
    auth,
    admins,
    customers,
    factTable,
    produits,
    kpis,
    initialState
});