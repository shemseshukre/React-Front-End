import {
    TextField, Button, Stack,
    FormControlLabel, Checkbox,
    Link, Grid, Box, Typography,
    Container, AppBar, Toolbar,
    IconButton, Drawer, Menu, MenuItem
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoPerson, IoLogIn, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";

export const GotoLogin = () => {

    return (
        <Container component='main' maxWidth="xs">

            <Box
                sx={{
                    boxShadow: 4,
                    borderRadius: 5,
                    px: 5,
                    py: 6,
                    marginTop: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component='h1' variant='h5'>
                    Go to Log In Page to Login
                </Typography>

                <Box
                    component="form"
                    //onSubmit={handleLogin} 
                    noValidate
                    sx={{ mt: 2 }}
                >
                    <Grid container>
                        <Grid item>
                            <NavLink to={"/"}>
                                <IoLogIn /> Go to Login Page
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}
export default GotoLogin;