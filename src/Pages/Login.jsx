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
import { IoPeople,IoPerson,IoLogIn, IoPricetag, 
  IoHome, IoLogOut,IoEye
} from "react-icons/io5";


export const Login = () => {

const [users, setUsers] = useState([]);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState();
const [error, setError] = useState();
const [token,setToken] = useState('')
const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      url: 'https://todo-laravel.brhantech.com/api/v1/login',
      params: {
        email: email, 
        password: password
      }
    };
    try {
      const { data } = await axios.request(options);
      if(data){
        
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
           InputProps={{
            endAdornment: (
              <IoPerson position="left">
                <IoPerson />
              </IoPerson>
            ),
          }}
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
          InputProps={{
            endAdornment: (
              <IoEye position="left">
                <IoEye />
              </IoEye>
            ),
          }}
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
            <NavLink to={"/CheckUSer"}>
              <IoEye /> Forgot Password ? 
            </NavLink>
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