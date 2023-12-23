import { React,useState,useEffect } from 'react'
import {
  TextField,Button,Stack,
  FormControlLabel,Checkbox,
  Link,Grid,Box,Typography,
  Container,AppBar, Toolbar, 
  IconButton,Drawer,Menu, MenuItem
} from '@mui/material';
import axios from 'axios';
import Register from './Register';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";

// require('dotenv').config()

export const Login = () => {

const [users, setUsers] = useState([]);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState();
const [error, setError] = useState();
const [token,setToken] = useState('')
const navigate = useNavigate();


// useEffect(() => {
  
// })

  const handleLogin = async (e) => {
    e.preventDefault();
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    console.log(BASE_URL);
    const options = {
      method: 'POST',
      url: BASE_URL+'login',
      params: {
        email: email, 
        password: password
      }
    };
    try {
      const { data } = await axios.request(options);
      if(data){
        // save token in state 
        setToken(data.access_token)
        navigate('/Dashboard')
      } 
    } catch (error) {
      //console.error(error);
      setError('Incorrect User Name and or Password !!!')
      //navigate('/Dashboard')
    }
    }


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
      <Typography component='h1' variant='h4'>
          Log In
        </Typography>

        <Box 
        component="form" 
        //onSubmit={handleLogin} 
        noValidate 
        sx={{ mt: 2 }}
        >
          <TextField
            margin='normal'
            fullWidth
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            //helperText={(e) => (e.target.value)}
            autoComplete='email'
            type='text'
            label='Enter User Name'
            variant='filled'
            size='small'
            color='secondary'
            autoFocus
            required
          />

          <TextField
            name='password'
            type='password'
            label='Enter Password'
            id='password'
            
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            //helperText={password}
            margin='normal'
            autoComplete='current-password'
            fullWidth
            variant='filled'
            size='small'
            color='secondary'
            required
            sx={{mt: 2}}
          />
          {error}

          <FormControlLabel
            control={<Checkbox  name='rememberMe' color='secondary' />}
            label='Remember me'
            sx={{mt: 2, textAlign: 'left'}}
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
          >
            
            Login
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant='body2'>
                Forgot Password?
              </Link>
            </Grid>
            <Grid item>
            <NavLink to={"/Register"}>
              <IoPerson /> Create Account 
            </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>         
  )
}

export default Login;