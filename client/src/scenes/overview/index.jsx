import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";
import OverviewChart from "components/OverviewChart";

const Overview = () => {

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Profit By Month"
        subtitle="Overview of Total Profit By Month"
      />
      <Box height="75vh">
          <OverviewChart isDashboard={true} />
      </Box>
    </Box>
  );
};

export default Overview;
