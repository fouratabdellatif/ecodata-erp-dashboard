import { useState } from 'react';
import { useTheme, styled } from '@mui/material/styles';
import {
    Alert,
    Box,
    Button,
    CircularProgress,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AnimateButton from 'components/AnimateButton';
import { signin } from 'actions/auth';

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#ffffff",
  backgroundColor: "#336DBF!important",
  "&:hover": {
    backgroundColor: "#234c85!important"
  }
}));


// const useStyles = makeStyles({
//     alert: {
//         marginTop: '10px',
//         marginBottom: '20px',
//     },
//     loader: {
//         color: `var(--iconLoader)`,
//         margin: 'auto',
//         display: 'block',
//     },
//     loading: {
//         margin: '20 auto 10 auto',
//         cursor: 'not-allowed!important',
//         width: '50%!important',
//         display: 'block!important',
//     },
// });

const AuthLogin = ({ ...others }) => {

    // const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const message = useSelector((state) => state?.reducers?.auth?.error);

    // console.log(message);

    const initState = {
        email: "",
        password: "",
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Email n'est pas valide").max(255).required('Email is required'),
        password: Yup.string().max(255).required('Password is required')
    })

    const renderError = () => {
        if (message) {
            return (
                <Alert severity="error" style={{
                    marginTop: '10px',
                    marginBottom: '20px',
                }}>
                    {message}
                </Alert>
            )
        }
    }

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Formik
                initialValues={initState}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    await setLoader(true);
                    console.log(values);
                    await dispatch(signin(values));
                    await setLoader(false);
                }}
            >
                {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    touched,
                }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl style={{
                            marginBottom: '8px'
                        }} fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-email-login">Email</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-login"
                                type="email"
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Email"
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-login"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        {renderError()}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                {loader ? (
                                    <CircularProgress style={{
                                        color: `var(--iconLoader)`,
                                        margin: 'auto',
                                        display: 'block',
                                    }} />
                                ) : (
                                    <ColorButton
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        // color="secondary"
                                    >
                                        Login
                                    </ColorButton>
                                )}
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthLogin;
