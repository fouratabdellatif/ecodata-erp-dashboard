import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// import { PowerBIEmbed } from 'powerbi-client-react';
// import { models } from 'powerbi-client';

const PowerBiReport = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Power BI Report" subtitle="Welcome to your Report" />

        {/* <Box width="25%" marginRight="0" marginLeft="auto">
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
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
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
          width="1180px"
          height="541.25px"
        >
        {/* <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: '6cc1e0dd-5af9-48f5-9a13-fbb3167b736e',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=6cc1e0dd-5af9-48f5-9a13-fbb3167b736e",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNjA0ZjFhOTYtY2JlOC00M2Y4LWFiYmYtZjhlYWY1ZDg1NzMwLyIsImlhdCI6MTY4MzQ4NTMzOCwibmJmIjoxNjgzNDg1MzM4LCJleHAiOjE2ODM0OTA0MDksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUF0d2xzd0RBVW1LZW5OWVZDS2RHUFM4eUt4dWFXbDhXLzNlYkFLdU0xSEtHS08wS0ttWWFiRWNFZkhwdi9OU1FwIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjE4ZmJjYTE2LTIyMjQtNDVmNi04NWIwLWY3YmYyYjM5YjNmMyIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQUJERUxBVElGIiwiZ2l2ZW5fbmFtZSI6IkZvdXJhdCIsImlwYWRkciI6IjEwMi4xNTcuNjkuMjUiLCJuYW1lIjoiRm91cmF0IEFCREVMQVRJRiIsIm9pZCI6ImU3Yjg2ZGMwLTMyODMtNDQyNC04ZjVhLTIxOTFlMWI5ZmIzOCIsInB1aWQiOiIxMDAzMjAwMjZENTRERTIxIiwicmgiOiIwLkFUb0FsaHBQWU9qTC1FT3J2X2pxOWRoWE1Ba0FBQUFBQUFBQXdBQUFBQUFBQUFBNkFQcy4iLCJzY3AiOiJBcHAuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZFdyaXRlLkFsbCBDb250ZW50LkNyZWF0ZSBEYXNoYm9hcmQuUmVhZC5BbGwgRGFzaGJvYXJkLlJlYWRXcml0ZS5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZFdyaXRlLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBHYXRld2F5LlJlYWQuQWxsIEdhdGV3YXkuUmVhZFdyaXRlLkFsbCBQaXBlbGluZS5EZXBsb3kgUGlwZWxpbmUuUmVhZC5BbGwgUGlwZWxpbmUuUmVhZFdyaXRlLkFsbCBSZXBvcnQuUmVhZC5BbGwgUmVwb3J0LlJlYWRXcml0ZS5BbGwgU3RvcmFnZUFjY291bnQuUmVhZC5BbGwgU3RvcmFnZUFjY291bnQuUmVhZFdyaXRlLkFsbCBUZW5hbnQuUmVhZC5BbGwgVGVuYW50LlJlYWRXcml0ZS5BbGwgVXNlclN0YXRlLlJlYWRXcml0ZS5BbGwgV29ya3NwYWNlLlJlYWQuQWxsIFdvcmtzcGFjZS5SZWFkV3JpdGUuQWxsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoibWhpQ0VZS1l6QXprcmFsT0I5YnotLXhzTlpqcF9hbmo5QUxMOWhNZkkycyIsInRpZCI6IjYwNGYxYTk2LWNiZTgtNDNmOC1hYmJmLWY4ZWFmNWQ4NTczMCIsInVuaXF1ZV9uYW1lIjoiRm91cmF0LkFiZGVsbGF0aWZAZXNwcml0LXRuLmNvbSIsInVwbiI6IkZvdXJhdC5BYmRlbGxhdGlmQGVzcHJpdC10bi5jb20iLCJ1dGkiOiJ6aUhXLXBUc3VVYVJFd0hPRms0NUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.dpy9JtwZk6JRvhXRu560wW8sbYKMwkkz9cKXfVPAlfwS6Owwg8uqaTF4id1yk_KxvK9MK4ZZhwLoO9MKjq2M93ONXK_SBWsBmDEv-2ZID64nvN3BoQQ5vDdYxFoKnmkL5Mv1USDXjGOF5SYcrj64kSg96bpl7tbwHrncFDY6UugN4jEhWHksh87O_tHK6Ta7i1IdRe0wXD9Y8l_ZmVpfJC1Q30hZ5YLpyAvyoOT3Z1pp1A5hMYAqb5b4v5nk5JAjbsXnsjtOX1jLTZiafejjDybBMIEwj8LBc9dwocOPpbiCSjDZ5vDXaCalH-GRF7Js5Jnx6aooZSoLV25D5vusBQ',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}
  
          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }
  
          cssClassName="embed-container"
  
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        /> */}
        <iframe style={{
          margin: 'auto',
          display: 'block'
        }} title="projetBI" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=6cc1e0dd-5af9-48f5-9a13-fbb3167b736e&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=Top%205" frameborder="0" allowFullScreen="true"></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default PowerBiReport;
