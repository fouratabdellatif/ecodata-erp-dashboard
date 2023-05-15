import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetFormsQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
import CustomColumnMenu from "components/DataGridCustomColumnMenu";

const Forms = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetFormsQuery();

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "question1",
      headerName: "Question 1",
      flex: 1,
    },
    {
      field: "question2",
      headerName: "Question 2",
      flex: 1,
    },
    {
      field: "question3",
      headerName: "Question 3",
      flex: 1,
    },
    {
      field: "question4",
      headerName: "Question 4",
      flex: 1,
    },
    {
      field: "question5",
      headerName: "Question 5",
      flex: 1,
    },
    {
      field: "question6",
      headerName: "Question 6",
      flex: 1,
    },
    {
      field: "question7",
      headerName: "Question 7",
      flex: 1,
    },
    {
      field: "question8",
      headerName: "Question 8",
      flex: 1,
    },
    {
      field: "question9",
      headerName: "Question 9",
      flex: 1,
    },
    {
      field: "question10",
      headerName: "Question 10",
      flex: 1,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="ADMINS" subtitle="Managing admins and list of admins" />
      <Box
        mt="40px"
        height="75vh"
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
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />
      </Box>
    </Box>
  );
};

export default Forms;
