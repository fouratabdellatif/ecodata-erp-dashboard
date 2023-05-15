import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetPurchasesQuery } from "state/api";
import Header from "components/Header";

const Purchases = () => {
  const theme = useTheme();

  // values to be sent to the backend
  const { data, isLoading } = useGetPurchasesQuery();
  // console.log(data);

  const columns = [
    {
      field: "id_purchases",
      headerName: "id_purchases",
      flex: 1,
    },
    {
      field: "SKU",
      headerName: "SKU",
      flex: 1,
    },
    {
      field: "rating",
      headerName: "rating",
      flex: 1,
    },
    {
      field: "actual_price",
      headerName: "actual_price",
      flex: 1,
    },
    {
      field: "discount_percentage",
      headerName: "discount_percentage",
      flex: 1,
    },
    {
      field: "discounted_price",
      headerName: "discounted_price",
      flex: 1,
    },
    {
      field: "GrossAmount",
      headerName: "GrossAmount",
      flex: 1,
    },
    {
      field: "customer",
      headerName: "Customer",
      flex: 1,
    },
    {
      field: "moving_avg",
      headerName: "moving_avg",
      flex: 1,
    },
    {
      field: "PCS",
      headerName: "PCS",
      flex: 1,
    },
    {
      field: "Rate",
      headerName: "Rate",
      flex: 1,
    },
    {
      field: "rates",
      headerName: "rates",
      flex: 1,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PURCHASES" subtitle="Entire list of purchases" />
      <Box
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data?.fact_table}
          getRowId={(row) => row._id}
          rows={data?.fact_table || []}
          columns={columns}
          pageSize={50}
          rowsPerPageOptions={[50, 100, 500]}
        />
      </Box>
    </Box>
  );
};

export default Purchases;
