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
import {GenIcon} from "react-icons"



export const CheckUser = () => {

const [email, setEmail] = useState('');
const [message, setMessage] = useState();
const [error, setError] = useState();
const [token,setToken] = useState('')
const navigate = useNavigate();

  const checkUser = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      url: 'https://todo-laravel.brhantech.com/api/v1/checkuser',
      params: {
        email: email
      }
    };
    try {
      const { data } = await axios.request(options);
      if(data){
        // save token in state 
        setToken(data.access_token)
        navigate('/ForgotPassword')
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
      <Typography component='h1' variant='h5'>
          Enter Email Address
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
              <GenIcon position="left">
                <GenIcon />
              </GenIcon>
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
            label='Enter Email Address'
            variant='filled'
            size='small'
            color='secondary'
            autoFocus
            required
          />

          
          {error}

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            sx={{ mt: 3, mb: 2 }}
            onClick={checkUser}
          >
            
           Send
          </Button>

          <Grid container>
            
          </Grid>
        </Box>
      </Box>
    </Container>         
  )
}
export default CheckUser;