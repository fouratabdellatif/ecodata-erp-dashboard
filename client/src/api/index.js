import axios from "axios";
// import jwt from "jsonwebtoken";

// const API = axios.create({ baseURL: "http://localhost:9000" });
// // const API = axios.create({ baseURL: "https://ghostprod-server.cyclic.app" });
// API.interceptors.request.use((req) => {
//     if (localStorage.getItem("profile")) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
//     }

//     return req;
// });

// export var decoded = jwt.decode(JSON.parse(localStorage.getItem("profile"))?.token);

const API = axios.create({ baseURL: "http://localhost:9000" });
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }

    return req;
});

export const addAdmin = (formData) => API.post("/superadmin/admins/add", formData);
export const signIn = (formData) => API.post("/admins/signIn", formData);

export const fetchKpis = () => API.get('/client/kpis');
export const fetchCustomers = () => API.get('/client/customers');
export const fetchProduits = () => API.get('/client/produits');
export const fetchFactTable = () => API.get('/client/purchases');
export const fetchAdmins = () => API.get('/management/admins');