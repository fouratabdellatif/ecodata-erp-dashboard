import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://ecodata-server.onrender.com" }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Produits",
    "Customers",
    "Kpis",
    "Transactions",
    "Purchases",
    "Geography",
    "CitiesGeo",
    "Sales",
    "Admins",
    "Forms",
    "Performance",
    "Dashboard",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getProduits: build.query({
      query: () => "client/produits",
      providesTags: ["Produits"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Customers"],
    }),
    getKpis: build.query({
      query: () => "client/kpis",
      providesTags: ["Kpis"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
    getPurchases: build.query({
      query: () => "client/purchases",
      providesTags: ["Purchases"],
    }),
    getGeography: build.query({
      query: () => "client/geography",
      providesTags: ["Geography"],
    }),
    getCitiesGeo: build.query({
      query: () => "client/citiesgeo",
      providesTags: ["CitiesGeo"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "management/admins",
      providesTags: ["Admins"],
    }),
    getForms: build.query({
      query: () => "management/forms",
      providesTags: ["Forms"],
    }),
    getUserPerformance: build.query({
      query: (id) => `management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetProduitsQuery,
  useGetCustomersQuery,
  useGetKpisQuery,
  useGetTransactionsQuery,
  useGetPurchasesQuery,
  useGetGeographyQuery,
  useGetCitiesGeoQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetFormsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
