// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography style={{
            color: '#336DBF'
        }} variant="subtitle2" component={Link} href="https://eco-data.netlify.app/" target="_blank" underline="hover">
            &copy; Ecodata 2023
        </Typography>
    </Stack>
);

export default AuthFooter;
