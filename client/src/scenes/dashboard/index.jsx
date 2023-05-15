import React, { useEffect } from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  People,
  PointOfSale,
  AttachMoney,
  MonetizationOn
} from "@mui/icons-material";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "components/BreakdownChart";
import OverviewChart from "components/OverviewChart";
import { useGetKpisQuery } from "state/api";
import StatBox from "components/StatBox";
import { topTenColors, topTenShipCities } from "state/topTen";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  // const customersData = useGetCustomersQuery();
  const kpiData = useGetKpisQuery();
  // const purchasesData = useGetPurchasesQuery();

  let totalCustomers;
  let totalSales;
  let totalExpenses;
  let totalProfit;

  if (!kpiData.isLoading) {
    totalCustomers = kpiData?.data[0]?.totalCustomers;
    totalSales = kpiData?.data[0]?.totalSales;
    totalExpenses = kpiData?.data[0]?.totalExpenses;
    totalProfit = kpiData?.data[0]?.totalProfit;
  }

  useEffect(() => {
    if (kpiData) {
      console.log(kpiData);
    }
  });

  const shipCitiesColumns = [
    {
      field: "city",
      headerName: "Ship City",
      flex: 1
    },
    {
      field: "purchases",
      headerName: "Purchases",
      flex: 1
    }
  ];

  const colorsColumns = [
    {
      field: "color",
      headerName: "Color",
      flex: 1
    },
    {
      field: "purchases",
      headerName: "Purchases",
      flex: 1
    }
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        {/* <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px"
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box> */}
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" }
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Total Customers"
          value={kpiData && totalCustomers}
          icon={
            <People
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Total Sales"
          value={kpiData && `${Number(totalSales).toFixed(0)}`}
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="2rem"
          borderRadius="0.55rem"
        >
          <Header
            subtitle="Overview of Total Profit By Month"
          />
          <OverviewChart isDashboard={true} />
        </Box>
        <StatBox
          title="Total Expenses"
          value={kpiData && `${Number(totalExpenses).toFixed(0)}`}
          icon={
            <AttachMoney
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Total Profit"
          value={kpiData && `${Number(totalProfit).toFixed(0)}`}
          icon={
            <MonetizationOn
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* ROW 2 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem"
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none"
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none"
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none"
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`
            }
          }}
        >
          <DataGrid
            loading={!topTenShipCities}
            getRowId={(row) => row.city}
            rows={(topTenShipCities && topTenShipCities) || []}
            columns={shipCitiesColumns}
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem"
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none"
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none"
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none"
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`
            }
          }}
        >
          <DataGrid
            loading={!topTenColors}
            getRowId={(row) => row.color}
            rows={(topTenColors && topTenColors) || []}
            columns={colorsColumns}
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Sales Avg. By Fullfilment
          </Typography>
          <BreakdownChart isDashboard={true} />
          {/* <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Breakdown of real states and information via category for revenue
            made for this year and total sales.
          </Typography> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
