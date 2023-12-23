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
import {IoEye} from "react-icons/io5";



export const ForgotPassword = () => {

const [oldpassword, setOldPassword] = useState('');
const [newpassword, setNewPassword] = useState('');
const [confirmnewpassword, setConfirmNewPassword] = useState('');
const [message, setMessage] = useState();
const [error, setError] = useState();
const [token,setToken] = useState('')
const navigate = useNavigate();


// useEffect(() => {
  
// })

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      url: 'https://todo-laravel.brhantech.com/api/v1/forgotpassword',
      params: {
        oldpassword: oldpassword, 
        newpassword: newpassword,
        confirmnewpassword: confirmnewpassword
      }
    };
    try {
      const { data } = await axios.request(options);
      if(data){
        // save token in state 
        setToken(data.access_token)
        navigate('/GotoLogin')
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
          Reset Password
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
              <IoEye position="left">
                <IoEye />
              </IoEye>
            ),
          }}
            margin='normal'
            fullWidth
            name='oldpassword'
            id='oldpassword'
            value={oldpassword}
            onChange={(e) => setOldPassword(e.target.value)}
            //helperText={(e) => (e.target.value)}
            autoComplete='oldpassword'
            type='text'
            label='Enter Old Password'
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
            name='newpassword'
            type='password'
            label='Enter New Password'
            id='newpassword'
            
            value={newpassword}
            onChange={(e) => setNewPassword(e.target.value)}
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

<TextField
          InputProps={{
            endAdornment: (
              <IoEye position="left">
                <IoEye />
              </IoEye>
            ),
          }}
            name='confirmnewpassword'
            type='password'
            label='Confirm Password'
            id='confirmnewpassword'
            
            value={confirmnewpassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
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

          {/* <FormControlLabel
            control={<Checkbox  name='rememberMe' color='secondary' />}
            label='Remember me'
            sx={{mt: 2, textAlign: 'left'}}
          /> */}

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            sx={{ mt: 3, mb: 2 }}
            onClick={handleForgotPassword}
          >
            
           Reset Password
          </Button>

          <Grid container>
            {/* <Grid item xs>
            <NavLink to={"/ForgotPassword"}>
              <IoEye /> Forgot Password ?
            </NavLink>
            </Grid> */}
            {/* <Grid item>
            <NavLink to={"/Register"}>
              <IoPerson /> Create Account 
            </NavLink>
            </Grid> */}
          </Grid>
        </Box>
      </Box>
    </Container>         
  )
}
export default ForgotPassword;