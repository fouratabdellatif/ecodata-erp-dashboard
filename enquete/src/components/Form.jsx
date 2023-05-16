import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material";
import { Logo } from "./Logo";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createForm } from "actions/forms";
import { Formik } from "formik/dist";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyrights © "}
      <Link
        color="inherit"
        target="_blank"
        href="https://eco-data.netlify.app/"
      >
        Ecodata
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Form() {
  const [status1, setStatus1] = React.useState(0);
  const [status2, setStatus2] = React.useState(0);
  const [status3, setStatus3] = React.useState(0);
  const [status4, setStatus4] = React.useState(0);
  const [status5, setStatus5] = React.useState(0);
  const [status6, setStatus6] = React.useState(0);
  const [status7, setStatus7] = React.useState(0);
  const [status8, setStatus8] = React.useState(0);
  const [status9, setStatus9] = React.useState(0);
  const [status10, setStatus10] = React.useState(0);
  const dispatch = useDispatch();
  const [loader, setLoader] = React.useState(false);

  const initState = {
    name: "",
    email: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: ""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(255).required("Name is required"),
    email: Yup.string().max(255).required("Email is required"),
    question1: Yup.string().max(255).required("required"),
    question2: Yup.string().max(255).required("required"),
    question3: Yup.string().max(255).required("required"),
    question4: Yup.string().max(255).required("required"),
    question5: Yup.string().max(255).required("required"),
    question6: Yup.string().max(255).required("required"),
    question7: Yup.string().max(255).required("required"),
    question8: Yup.string().max(255).required("required"),
    question9: Yup.string().max(255).required("required"),
    question10: Yup.string().max(255).required("required")
  });

  const radioHandler1 = (status) => {
    setStatus1(status);
  };
  const radioHandler2 = (status) => {
    setStatus2(status);
  };
  const radioHandler3 = (status) => {
    setStatus3(status);
  };
  const radioHandler4 = (status) => {
    setStatus4(status);
  };
  const radioHandler5 = (status) => {
    setStatus5(status);
  };
  const radioHandler6 = (status) => {
    setStatus6(status);
  };
  const radioHandler7 = (status) => {
    setStatus7(status);
  };
  const radioHandler8 = (status) => {
    setStatus8(status);
  };
  const radioHandler9 = (status) => {
    setStatus9(status);
  };
  const radioHandler10 = (status) => {
    setStatus10(status);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`
        }}
      >
        <Toolbar>
          <Typography
            style={{
              width: "180px",
              padding: "10px"
            }}
            variant="h6"
            color="inherit"
            noWrap
          >
            <Logo />
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography
            component="h1"
            variant="h6"
            style={{
              fontSize: "16px"
            }}
          >
            This form is made for our dear customers, so that we can improve our
            services in the future. Please fill out the form and let us know
            what you think about us. Thank you in advance dear customer.
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Formik
              initialValues={initState}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                setLoader(true);
                console.log(values);
                dispatch(createForm(values));
                setLoader(false);
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                touched
              }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    onChange={handleChange}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                    onBlur={handleBlur}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    onBlur={handleBlur}
                  />
                  <Grid
                    item
                    xs={12}
                    style={{
                      marginTop: "50px"
                    }}
                  >
                    <FormControl
                      style={{
                        marginBottom: "20px"
                      }}
                      component="fieldset"
                    >
                      <FormLabel component="legend" color="primary">
                        1-À quelle fréquence achetez-vous sur Amazon ?
                      </FormLabel>
                      <RadioGroup row aria-label="question1" name="question1" onChange={handleChange}>
                        <FormControlLabel
                          name="question1"
                          value="Plusieurs fois par semaine"
                          checked={status1 === 1}
                          error={Boolean(touched.question1 && errors.question1)}
                          helperText={touched.question1 && errors.question1}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler1(1)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Plusieurs fois par semaine"
                        />
                        <FormControlLabel
                          name="question1"
                          value="Une fois par semaine"
                          checked={status1 === 2}
                          error={Boolean(touched.question1 && errors.question1)}
                          helperText={touched.question1 && errors.question1}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler1(2)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Une fois par semaine"
                        />
                        <FormControlLabel
                          name="question1"
                          value="Plusieurs fois par mois"
                          checked={status1 === 3}
                          error={Boolean(touched.question1 && errors.question1)}
                          helperText={touched.question1 && errors.question1}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler1(3)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Plusieurs fois par mois"
                        />
                        <FormControlLabel
                          name="question1"
                          value="Une fois par mois"
                          checked={status1 === 4}
                          error={Boolean(touched.question1 && errors.question1)}
                          helperText={touched.question1 && errors.question1}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler1(4)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Une fois par mois"
                        />
                        <FormControlLabel
                          name="question1"
                          value="Rarement"
                          checked={status1 === 5}
                          error={Boolean(touched.question1 && errors.question1)}
                          helperText={touched.question1 && errors.question1}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler1(5)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Rarement"
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl
                      style={{
                        marginBottom: "20px"
                      }}
                      component="fieldset"
                    >
                      <FormLabel component="legend" color="primary">
                        2-Quels sont les produits que vous avez achetés
                        récemment sur Amazon ?
                      </FormLabel>
                      <RadioGroup row aria-label="question2" name="question2" onChange={handleChange}>
                        <FormControlLabel
                          name="question2"
                          value="Électronique"
                          checked={status2 === 1}
                          error={Boolean(touched.question2 && errors.question2)}
                          helperText={touched.question2 && errors.question2}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler2(1)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Électronique"
                        />
                        <FormControlLabel
                          name="question2"
                          value="Livres"
                          checked={status2 === 2}
                          error={Boolean(touched.question2 && errors.question2)}
                          helperText={touched.question2 && errors.question2}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler2(2)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Livres"
                        />
                        <FormControlLabel
                          name="question2"
                          value="Vêtements et accessoires"
                          checked={status2 === 3}
                          error={Boolean(touched.question2 && errors.question2)}
                          helperText={touched.question2 && errors.question2}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler2(3)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Vêtements et accessoires"
                        />
                        <FormControlLabel
                          name="question2"
                          value="Produits de beauté et de soins personnels"
                          checked={status2 === 4}
                          error={Boolean(touched.question2 && errors.question2)}
                          helperText={touched.question2 && errors.question2}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler2(4)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Produits de beauté et de soins personnels"
                        />
                        <FormControlLabel
                          name="question2"
                          value="Épicerie"
                          checked={status2 === 5}
                          error={Boolean(touched.question2 && errors.question2)}
                          helperText={touched.question2 && errors.question2}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler2(5)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Épicerie"
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl
                      style={{
                        marginBottom: "20px"
                      }}
                      component="fieldset"
                    >
                      <FormLabel component="legend" color="primary">
                        3-Comment évaluez-vous la qualité des produits que vous
                        avez achetés sur Amazon ?
                      </FormLabel>
                      <RadioGroup row aria-label="question3" name="question3" onChange={handleChange}>
                        <FormControlLabel
                          name="question3"
                          value="Très satisfaisante"
                          checked={status3 === 1}
                          error={Boolean(touched.question3 && errors.question3)}
                          helperText={touched.question3 && errors.question3}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler3(1)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Très satisfaisante"
                        />
                        <FormControlLabel
                          name="question3"
                          value="Satisfaisante"
                          checked={status3 === 2}
                          error={Boolean(touched.question3 && errors.question3)}
                          helperText={touched.question3 && errors.question3}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler3(2)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Satisfaisante"
                        />
                        <FormControlLabel
                          name="question3"
                          value="Neutre"
                          checked={status3 === 3}
                          error={Boolean(touched.question3 && errors.question3)}
                          helperText={touched.question3 && errors.question3}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler3(3)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Neutre"
                        />
                        <FormControlLabel
                          name="question3"
                          value="Insatisfaisante"
                          checked={status3 === 4}
                          error={Boolean(touched.question3 && errors.question3)}
                          helperText={touched.question3 && errors.question3}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler3(4)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Insatisfaisante"
                        />
                        <FormControlLabel
                          name="question3"
                          value="Très insatisfaisante"
                          checked={status3 === 5}
                          error={Boolean(touched.question3 && errors.question3)}
                          helperText={touched.question3 && errors.question3}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler3(5)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Très insatisfaisante"
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl
                      style={{
                        marginBottom: "20px"
                      }}
                      component="fieldset"
                    >
                      <FormLabel component="legend" color="primary">
                        4-Comment évaluez-vous la rapidité de la livraison de
                        vos produits commandés sur Amazon ?
                      </FormLabel>
                      <RadioGroup row aria-label="question4" name="question4" onChange={handleChange}>
                        <FormControlLabel
                          name="question4"
                          value="Très satisfaisante"
                          checked={status4 === 1}
                          error={Boolean(touched.question4 && errors.question4)}
                          helperText={touched.question4 && errors.question4}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler4(1)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Très satisfaisante"
                        />
                        <FormControlLabel
                          name="question4"
                          value="Satisfaisante"
                          checked={status4 === 2}
                          error={Boolean(touched.question4 && errors.question4)}
                          helperText={touched.question4 && errors.question4}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler4(2)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Satisfaisante"
                        />
                        <FormControlLabel
                          name="question4"
                          value="Neutre"
                          checked={status4 === 3}
                          error={Boolean(touched.question4 && errors.question4)}
                          helperText={touched.question4 && errors.question4}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler4(3)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Neutre"
                        />
                        <FormControlLabel
                          name="question4"
                          value="Insatisfaisante"
                          checked={status4 === 4}
                          error={Boolean(touched.question4 && errors.question4)}
                          helperText={touched.question4 && errors.question4}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler4(4)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Insatisfaisante"
                        />
                        <FormControlLabel
                          name="question4"
                          value="Très insatisfaisante"
                          checked={status4 === 5}
                          error={Boolean(touched.question4 && errors.question4)}
                          helperText={touched.question4 && errors.question4}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler4(5)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Très insatisfaisante"
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl
                      style={{
                        marginBottom: "20px"
                      }}
                      component="fieldset"
                    >
                      <FormLabel component="legend" color="primary">
                        5-Comment évaluez-vous le service client d'Amazon en cas
                        de problème avec votre commande ?
                      </FormLabel>
                      <RadioGroup row aria-label="question5" name="question5" onChange={handleChange}>
                        <FormControlLabel
                          name="question5"
                          value="Très satisfaisant"
                          checked={status5 === 1}
                          error={Boolean(touched.question5 && errors.question5)}
                          helperText={touched.question5 && errors.question5}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler5(1)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Très satisfaisant"
                        />
                        <FormControlLabel
                          name="question5"
                          value="Satisfaisant"
                          checked={status5 === 2}
                          error={Boolean(touched.question5 && errors.question5)}
                          helperText={touched.question5 && errors.question5}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler5(2)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Satisfaisant"
                        />
                        <FormControlLabel
                          name="question5"
                          value="Neutre"
                          checked={status5 === 3}
                          error={Boolean(touched.question5 && errors.question5)}
                          helperText={touched.question5 && errors.question5}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler5(3)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Neutre"
                        />
                        <FormControlLabel
                          name="question5"
                          value="Insatisfaisant"
                          checked={status5 === 4}
                          error={Boolean(touched.question5 && errors.question5)}
                          helperText={touched.question5 && errors.question5}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler5(4)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Insatisfaisant"
                        />
                        <FormControlLabel
                          name="question5"
                          value="Très insatisfaisant"
                          checked={status5 === 5}
                          error={Boolean(touched.question5 && errors.question5)}
                          helperText={touched.question5 && errors.question5}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler5(5)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Très insatisfaisant"
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl
                      style={{
                        marginBottom: "20px"
                      }}
                      component="fieldset"
                    >
                      <FormLabel component="legend" color="primary">
                        6-Seriez-vous prêt(e) à recommander Amazon à vos amis et
                        votre famille ?
                      </FormLabel>
                      <RadioGroup row aria-label="question6" name="question6" onChange={handleChange}>
                        <FormControlLabel
                          name="question6"
                          value="Oui"
                          checked={status6 === 1}
                          error={Boolean(touched.question6 && errors.question6)}
                          helperText={touched.question6 && errors.question6}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler6(1)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Oui"
                        />
                        <FormControlLabel
                          name="question6"
                          value="Non"
                          checked={status6 === 2}
                          error={Boolean(touched.question6 && errors.question6)}
                          helperText={touched.question6 && errors.question6}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler6(2)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Non"
                        />
                        <FormControlLabel
                          name="question6"
                          value="Peut-être"
                          checked={status6 === 3}
                          error={Boolean(touched.question6 && errors.question6)}
                          helperText={touched.question6 && errors.question6}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler6(3)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Peut-être"
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl
                      style={{
                        marginBottom: "20px"
                      }}
                      component="fieldset"
                    >
                      <FormLabel component="legend" color="primary">
                        7-Comment évaluez-vous l'expérience globale d'achat sur
                        Amazon ?
                      </FormLabel>
                      <RadioGroup row aria-label="question7" name="question7" onChange={handleChange}>
                        <FormControlLabel
                          name="question7"
                          value="Très satisfaisante"
                          checked={status7 === 1}
                          error={Boolean(touched.question7 && errors.question7)}
                          helperText={touched.question7 && errors.question7}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler7(1)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Très satisfaisante"
                        />
                        <FormControlLabel
                          name="question7"
                          value="Satisfaisante"
                          checked={status7 === 2}
                          error={Boolean(touched.question7 && errors.question7)}
                          helperText={touched.question7 && errors.question7}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler7(2)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Satisfaisante"
                        />
                        <FormControlLabel
                          name="question7"
                          value="Neutre"
                          checked={status7 === 3}
                          error={Boolean(touched.question7 && errors.question7)}
                          helperText={touched.question7 && errors.question7}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler7(3)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Neutre"
                        />
                        <FormControlLabel
                          name="question7"
                          value="Insatisfaisante"
                          checked={status7 === 4}
                          error={Boolean(touched.question7 && errors.question7)}
                          helperText={touched.question7 && errors.question7}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler7(4)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Insatisfaisante"
                        />
                        <FormControlLabel
                          name="question7"
                          value="Très insatisfaisante"
                          checked={status7 === 5}
                          error={Boolean(touched.question7 && errors.question7)}
                          helperText={touched.question7 && errors.question7}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler7(5)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Très insatisfaisante"
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl
                      style={{
                        marginBottom: "20px"
                      }}
                      component="fieldset"
                    >
                      <FormLabel component="legend" color="primary">
                        8-Qu'est-ce qui pourrait être amélioré pour rendre votre
                        expérience d'achat sur Amazon encore meilleure ?
                      </FormLabel>
                      <RadioGroup row aria-label="question8" name="question8" onChange={handleChange}>
                        <FormControlLabel
                          name="question8"
                          value="La qualité des produits"
                          checked={status8 === 1}
                          error={Boolean(touched.question8 && errors.question8)}
                          helperText={touched.question8 && errors.question8}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler8(1)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="La qualité des produits"
                        />
                        <FormControlLabel
                          name="question8"
                          value="La rapidité de livraison"
                          checked={status8 === 2}
                          error={Boolean(touched.question8 && errors.question8)}
                          helperText={touched.question8 && errors.question8}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler8(2)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="La rapidité de livraison"
                        />
                        <FormControlLabel
                          name="question8"
                          value="Le service client"
                          checked={status8 === 3}
                          error={Boolean(touched.question8 && errors.question8)}
                          helperText={touched.question8 && errors.question8}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler8(3)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Le service client"
                        />
                        <FormControlLabel
                          name="question8"
                          value="Le prix des produits"
                          checked={status8 === 4}
                          error={Boolean(touched.question8 && errors.question8)}
                          helperText={touched.question8 && errors.question8}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler8(4)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Le prix des produits"
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl
                      style={{
                        marginBottom: "20px"
                      }}
                      component="fieldset"
                    >
                      <FormLabel component="legend" color="primary">
                        9-Avez-vous déjà rencontré des problèmes de sécurité sur
                        Amazon (par exemple, vol d'informations de carte de
                        crédit) ?
                      </FormLabel>
                      <RadioGroup row aria-label="question9" name="question9" onChange={handleChange}>
                        <FormControlLabel
                          name="question9"
                          value="Oui"
                          checked={status9 === 1}
                          error={Boolean(touched.question9 && errors.question9)}
                          helperText={touched.question9 && errors.question9}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler9(1)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Oui"
                        />
                        <FormControlLabel
                          name="question9"
                          value="Non"
                          checked={status9 === 2}
                          error={Boolean(touched.question9 && errors.question9)}
                          helperText={touched.question9 && errors.question9}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler9(2)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Non"
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl
                      style={{
                        marginBottom: "20px"
                      }}
                      component="fieldset"
                    >
                      <FormLabel component="legend" color="primary">
                        10-Comment évaluez-vous le programme de fidélité
                        d'Amazon, Amazon Prime ?
                      </FormLabel>
                      <RadioGroup row aria-label="question10" name="question10" onChange={handleChange}>
                        <FormControlLabel
                          name="question10"
                          value="Très satisfaisant"
                          checked={status10 === 1}
                          error={Boolean(touched.question10 && errors.question10)}
                          helperText={touched.question10 && errors.question10}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler10(1)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Très satisfaisant"
                        />
                        <FormControlLabel
                          name="question10"
                          value="Satisfaisant"
                          checked={status10 === 2}
                          error={Boolean(touched.question10 && errors.question10)}
                          helperText={touched.question10 && errors.question10}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler10(2)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Satisfaisant"
                        />
                        <FormControlLabel
                          name="question10"
                          value="Neutre"
                          checked={status10 === 3}
                          error={Boolean(touched.question10 && errors.question10)}
                          helperText={touched.question10 && errors.question10}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler10(3)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Neutre"
                        />
                        <FormControlLabel
                          name="question10"
                          value="Insatisfaisant"
                          checked={status10 === 4}
                          error={Boolean(touched.question10 && errors.question10)}
                          helperText={touched.question10 && errors.question10}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler10(4)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Insatisfaisant"
                        />
                        <FormControlLabel
                          name="question10"
                          value="Très insatisfaisant"
                          checked={status10 === 5}
                          error={Boolean(touched.question10 && errors.question10)}
                          helperText={touched.question10 && errors.question10}
                          onBlur={handleBlur}
                          onClick={(e) => radioHandler10(5)}
                          control={
                            <Radio
                              sx={{
                                color: "primary",
                                "&.Mui-checked": {
                                  color: "#336dbf"
                                }
                              }}
                            />
                          }
                          label="Très insatisfaisant"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  {/* {renderError()} */}
                  {loader ? (
                    <Button
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      style={{
                        margin: "20 0 10 0",
                        cursor: "not-allowed!important"
                      }}
                      disabled
                    >
                      <CircularProgress
                        style={{
                          color: "#ffffff!important",
                          marginLeft: "10px",
                          marginBottom: "-5px"
                        }}
                        size={25}
                      />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Send Answers
                    </Button>
                  )}
                </form>
              )}
            </Formik>
          </Box>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
