import React from "react";
import { Formik, Form, Field } from "formik";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  TextField,
  CircularProgress,
  Container,
  Paper,
  Typography,
  Box,
  CssBaseline,
  AppBar,
  Toolbar
} from "@mui/material";
import * as Yup from "yup";
import { dataForm } from "./formData";
import { Logo } from "./Logo";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createForm } from "actions/forms";

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

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
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

const initialValues = {
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

const theme = createTheme();

const MyForm = () => {
  const [loader, setLoader] = React.useState(false);
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    // Handle form submission
    await setLoader(true);
    await dispatch(createForm(values));
    await setLoader(false);
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
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, handleChange }) => (
                <Form noValidate>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    autoComplete="name"
                    onChange={handleChange}
                    label="Name"
                    name="name"
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    autoComplete="email"
                    onChange={handleChange}
                    label="Email"
                    name="email"
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />

                  {dataForm.map((question, index) => (
                    <div key={index}>
                      <p>{question.question}</p>
                      <Field name={`question${index + 1}`}>
                        {({ field }) => (
                          <RadioGroup
                            name={`question${index + 1}`}
                            value={field.value}
                            onChange={field.onChange}
                          >
                            {question.options.map((option, optionIndex) => (
                              <FormControlLabel
                                key={optionIndex}
                                value={option}
                                control={<Radio />}
                                label={option}
                              />
                            ))}
                          </RadioGroup>
                        )}
                      </Field>
                    </div>
                  ))}

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
                </Form>
              )}
            </Formik>
          </Box>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};

export default MyForm;
