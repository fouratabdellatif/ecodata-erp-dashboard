import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import { useGetFormsQuery } from "state/api";

const FormBox = ({ title, values, increase, icon, description }) => {
  const theme = useTheme();
  const { data } = useGetFormsQuery();
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
    >
      <FlexBetween>
        <Typography variant="h5" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>

      {values?.map((item, index) => (
        <Typography
          variant="h6"
          fontWeight="600"
          sx={{ color: theme.palette.secondary[200] }}
          key={index}
        >
          <div style={{
            display: 'flex',
          }}>
            <div>{item.option}</div>
            <div style={{
              marginLeft: 'auto',
              marginRight: 0
            }}>{item.count}/{data?.forms?.length}</div>
            <div style={{
              marginLeft: '20px',
              marginRight: 0
            }}>{((item.count / data?.forms?.length) * 100).toFixed(0)} %</div>
          </div>
        </Typography>
      ))}
      <FlexBetween gap="1rem">
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: theme.palette.secondary.light }}
        >
          {increase}
        </Typography>
        <Typography>{description}</Typography>
      </FlexBetween>
    </Box>
  );
};

export default FormBox;
