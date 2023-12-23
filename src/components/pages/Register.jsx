import { React,useState } from 'react'
import {
  TextField,Button,Stack,
  FormControlLabel,Checkbox,
  Link,Grid,Box,Typography,
  Container,AppBar, Toolbar, 
  IconButton,Drawer,Menu, MenuItem
} from '@mui/material';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const Register = () => {

  const navigate = useNavigate();
  const [token,setToken] = useState('');
  const [message,setMessage] = useState('');

  // const [RegisterFormData, setRegisterFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmpassword: ''
  // })

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [error, setError] = useState([])

  const ValidateRegisterForm = () => {

    let valid = true;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{3,}$/;
    
    var newError = []
    // const newError = {
    //   name: '',
    //   email: '', 
    //   password: '', 
    //   confirmpassword: '',
    //   //message: ''
    // };

    console.log(newError);

    if(!name) {
      newError.push({name: 'User Name  Required'});
      console.log(newError);
      valid = false;
    }
     if(!email) {
      newError.push({email: 'User Email  Required'});
      valid = false;
    }
     if(!password) {
      newError.push({password: 'Password Required'});
      valid = false;
    }
    // else if(!passwordRegex.test(password)){
    //   newError.push({password: 'Password must be at least 3 characters with at least one uppercase and one lowercase letter'});
    //   valid = false;
    // }
     if(!confirmpassword) {
      newError.push({confirmpassword: 'Confirm Password Required'});
      valid = false;
    }
    //  if(password !== confirmpassword){
    //   newError.push({confirmpassword: 'Password does not match'});
    //   valid = false;
    // }

    if (newError.length > 0) {
      setError(newError);
    }
    else {
      return valid;
    }

  }

  const handleRegister = async (e) => {
  e.preventDefault();

  if(ValidateRegisterForm()){
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const options = {
      method: 'POST',
      url: BASE_URL+'register',
      header: [{'Content-Type': 'application/json'}],
      data: {
        name: name,
        email: email, 
        password: password,
        password_confirmation: confirmpassword
      }
    };
    try {
      const { data } = await axios.request(options);
      if(data){
        // save token in state 
        //setToken(data.access_token)
        //navigate('/Dashboard')
        console.log('Registration Successfull !!!')
      } 
    } catch (error) {
      //console.error(error);
      setError('Incorrect User Name and or Password !!!')
      //navigate('/Dashboard')
    }
  }
  else{
    console.log("validation error");
  }
}

// const handleChange = (e) => {
//   const {name, value} = e.target.value;

//   // setRegisterFormData({
//   //   ...RegisterFormData,
//   //   [name]: value,
//   // })
// }

  return (
    <Container component='main' maxWidth="xs">
      <Box
        sx={{
          boxShadow: 4,
          borderRadius: 5,
          px: 5,
          py: 6,
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
      <Typography component='h1' variant='h4'>
          Sign Up
        </Typography>

        <Box 
        component="form" 
        //onSubmit={handleLogin} 
        //noValidate 
        sx={{ mt: 2 }}

        // sx={{ 
        //   maxWidth: '500px',
        //   margin: 'auto',
        //   padding: '20px',
        //   borderRadius: '20px',
        //   boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        //   backgroundColor: 'white',
        // }}
        >
          <div>
            {/* {{
              if (error.length > 0) {          

for (const key in error) {
  if (Object.hasOwnProperty.call(error, key)) {
    const element = error[key];
console.log(element);
    // <span className='error'>{{element}}</span>
    
  }
}
            }
          }} */}
          </div>
          <TextField
            margin='normal'
            fullWidth
            name='name'
            id='name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            // error={Boolean(error.name)}
            // helperText={error.name}
            autoComplete='name'
            type='text'
            label='Enter your Name'
            variant='filled'
            size='small'
            color='secondary'
            autoFocus
            required
          />

           <TextField
            margin='normal'
            fullWidth
            name='email'
            id='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            // error={Boolean(error.email)}
            // helperText={error.email}
            autoComplete='email'
            type='text'
            label='Enter your Email'
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
            onChange={(e)=>setPassword(e.target.value)}
            // error={Boolean(error.password)}
            // helperText={error.password}
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
            name='confirmpassword'
            type='password'
            label='Confirm Password'
            id='confirmpassword'
            value={confirmpassword}
            onChange={(e)=>setConfirmpassword(e.target.value)}
            // error={Boolean(error.confirmpassword)}
            // helperText={error.confirmpassword}
            margin='normal'
            autoComplete='current-password'
            fullWidth
            variant='filled'
            size='small'
            color='secondary'
            required
            sx={{mt: 2}}
          />

          {/* {message} */}

          {/* <FormControlLabel
            control={<Checkbox checked={formData.rememberMe} onChange={handleChange} name='rememberMe' color='primary' />}
            label='Remember me'
            sx={{mt: 2, textAlign: 'left'}}
          /> */}
          {/* {error} */}

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            sx={{ mt: 3, mb: 2 }}
            onClick={handleRegister}
          >
            Register
          </Button>

          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant='body2'>
                Forgot Password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant='body2'>
                {"Create New Account"}
              </Link>
            </Grid>
          </Grid> */}
          
        </Box>
      </Box>
    </Container>         
  )
}
export default Register;