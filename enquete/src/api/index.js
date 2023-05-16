import axios from "axios";
// import jwt from "jsonwebtoken";

// const API = axios.create({ baseURL: "https://ecodata-server.onrender.com" });
// API.interceptors.request.use((req) => {
//     if (localStorage.getItem("profile")) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
//     }

//     return req;
// });

// export var decoded = jwt.decode(JSON.parse(localStorage.getItem("profile"))?.token);

const API = axios.create({ baseURL: "https://ecodata-server.onrender.com" });
API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
    }

    return req;
});

export const createForm = (newForm) => API.post('/forms/add', newForm);