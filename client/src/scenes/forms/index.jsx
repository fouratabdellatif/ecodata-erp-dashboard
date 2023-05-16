/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useGetFormsQuery } from "state/api";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
import CustomColumnMenu from "components/DataGridCustomColumnMenu";
import {
  Looks3,
  Looks4,
  Looks5,
  LooksOne,
  LooksTwo,
  Quiz
} from "@mui/icons-material";
import FormBox from "components/FormBox";
import StatBox from "components/StatBox";

const Forms = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetFormsQuery();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const five = "Très satisfaisant";
  const four = "Satisfaisant";
  const three = "Neutre";
  const two = "Insatisfaisant";
  const one = "Très insatisfaisant";

  function calculateOccurrences(data, searchString) {
    let sumOccurrences = 0;

    for (const prop in data) {
      const occurrences = data[prop].reduce((count, obj) => {
        const lowerCaseName = obj.option.toLowerCase();
        const lowerCaseSearchString = searchString.toLowerCase();
        if (lowerCaseName.includes(lowerCaseSearchString)) {
          return count + obj.count;
        }
        return count;
      }, 0);

      sumOccurrences += occurrences;
    }

    return sumOccurrences;
  }

  const occFive = calculateOccurrences(data?.stats, five);
  const occFour = calculateOccurrences(data?.stats, four);
  const occThree = calculateOccurrences(data?.stats, three);
  const occTwo = calculateOccurrences(data?.stats, two);
  const occOne = calculateOccurrences(data?.stats, one);

  if (data) console.log(data);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 0.5
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1
    },
    {
      field: "question1",
      headerName: "Question 1",
      flex: 1
    },
    {
      field: "question2",
      headerName: "Question 2",
      flex: 1
    },
    {
      field: "question3",
      headerName: "Question 3",
      flex: 1
    },
    {
      field: "question4",
      headerName: "Question 4",
      flex: 1
    },
    {
      field: "question5",
      headerName: "Question 5",
      flex: 1
    },
    {
      field: "question6",
      headerName: "Question 6",
      flex: 1
    },
    {
      field: "question7",
      headerName: "Question 7",
      flex: 1
    },
    {
      field: "question8",
      headerName: "Question 8",
      flex: 1
    },
    {
      field: "question9",
      headerName: "Question 9",
      flex: 1
    },
    {
      field: "question10",
      headerName: "Question 10",
      flex: 1
    }
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="CUSTOMER REVIEWS"
        subtitle="Managing customer feedbacks and answers on our form"
      />
      <Typography
        variant="h4"
        style={{
          marginTop: "10px",
          fontWeight: 700
        }}
      >
        <a
          style={{
            textDecoration: "none",
            color: "#0a2c5b"
          }}
          href="https://ecodata-erp-form.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Link to our form
        </a>
      </Typography>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(10, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" }
        }}
      >
        <StatBox
          title={five}
          value={data && ` ${(occFive / (5 * data?.forms?.length)) * 100}% (${occFive} Answers)`}
          icon={
            <Looks5
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title={four}
          value={data && ` ${(occFour / (5 * data?.forms?.length)) * 100}% (${occFour} Answers)`}
          icon={
            <Looks4
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title={three}
          value={data && ` ${(occThree / (5 * data?.forms?.length)) * 100}% (${occThree} Answers)`}
          icon={
            <Looks3
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title={two}
          value={data && ` ${(occTwo / (5 * data?.forms?.length)) * 100}% (${occTwo} Answers)`}
          icon={
            <LooksTwo
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title={one}
          value={data && ` ${(occOne / (5 * data?.forms?.length)) * 100}% (${occOne} Answers)`}
          icon={
            <LooksOne
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        mt="40px"
        height="60vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none"
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
            backgroundColor: theme.palette.primary.light
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
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data?.forms || []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu
          }}
        />
      </Box>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" }
        }}
      >
        <FormBox
          title="1-À quelle fréquence achetez-vous sur Amazon ?"
          values={data && data?.stats?.question1}
          icon={
            <Quiz
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <FormBox
          title="2-Quels sont les produits que vous avez achetés récemment sur Amazon ?"
          values={data && data?.stats?.question2}
          icon={
            <Quiz
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <FormBox
          title="3-Comment évaluez-vous la qualité des produits que vous avez achetés sur Amazon ?"
          values={data && data?.stats?.question3}
          icon={
            <Quiz
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <FormBox
          title="4-Comment évaluez-vous la rapidité de la livraison de vos produits commandés sur Amazon ?"
          values={data && data?.stats?.question4}
          icon={
            <Quiz
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <FormBox
          title="5-Comment évaluez-vous le service client d'Amazon en cas de problème avec votre commande ?"
          values={data && data?.stats?.question5}
          icon={
            <Quiz
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <FormBox
          title="6-Seriez-vous prêt(e) à recommander Amazon à vos amis et votre famille ?"
          values={data && data?.stats?.question6}
          icon={
            <Quiz
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <FormBox
          title="7-Comment évaluez-vous l'expérience globale d'achat sur Amazon ?"
          values={data && data?.stats?.question7}
          icon={
            <Quiz
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <FormBox
          title="8-Qu'est-ce qui pourrait être amélioré pour rendre votre expérience d'achat sur Amazon encore meilleure ?"
          values={data && data?.stats?.question8}
          icon={
            <Quiz
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <FormBox
          title="9-Avez-vous déjà rencontré des problèmes de sécurité sur Amazon (par exemple, vol d'informations de carte de crédit) ?"
          values={data && data?.stats?.question9}
          icon={
            <Quiz
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <FormBox
          title="10-Comment évaluez-vous le programme de fidélité d'Amazon, Amazon Prime ?"
          values={data && data?.stats?.question10}
          icon={
            <Quiz
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
      </Box>
    </Box>
  );
};

export default Forms;
