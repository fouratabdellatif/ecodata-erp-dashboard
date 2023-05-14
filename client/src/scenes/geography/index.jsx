import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetCitiesGeoQuery } from "state/api";
import Header from "components/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "state/geoData";

const Geography = () => {
  const theme = useTheme();
  const { data } = useGetCitiesGeoQuery();
  // const colorScale = ['#fff', '#f0ad4e', '#d9534f'];

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Top 10 Ship Cities"
        subtitle="Find where your most purchases are located."
      />
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {data ? (
          <ResponsiveChoropleth
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.secondary[200]
                  }
                },
                legend: {
                  text: {
                    fill: theme.palette.secondary[200]
                  }
                },
                ticks: {
                  line: {
                    stroke: theme.palette.secondary[200],
                    strokeWidth: 1
                  },
                  text: {
                    fill: theme.palette.secondary[200]
                  }
                }
              },
              legends: {
                text: {
                  fill: theme.palette.secondary[200]
                }
              },
              tooltip: {
                container: {
                  color: theme.palette.primary.main
                }
              }
            }}
            // colors={colorScale}
            // tooltip={({ feature }) => (
            //   <div>
            //     <strong>{feature.properties.name}</strong>
            //     <br />
            //     Purchases: {feature.properties.purchases}
            //   </div>
            // )}
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            domain={[0, 8000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            isInteractive={true}
            projectionTranslation={[0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            projectionScale={200}
            enableGraticule={true}
            graticuleLineColor="#dddddd"
            borderWidth={1.3}
            borderColor="#ffffff"
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: true,
                translateX: 0,
                translateY: -125,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: theme.palette.secondary[200],
                itemOpacity: 0.85,
                symbolSize: 22,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.background.alt,
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]}
          />
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  );
};

export default Geography;
