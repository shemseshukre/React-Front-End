import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

export default function SignIn() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const [message,setMessage] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://todo-laravel.brhantec.com/api/v1/login?", {
        email: email,
        password: password,
      });
      console.log(email,password);
      //navigate("/users");
    } catch (error) {
      if (error.response) {
        //setMsg(error.response.data.msg);
      }
    }
  };

  

  

  useEffect(() => {
    //checkUser(users)
      }, [email,password])
      



  

  // const checkUser = () => {
  //   const usercheck = users.find(user => (user.username === data.username && user.password === data.password));
  //   if(usercheck) {
  //     console.log("Login successful");
  //   }else {
  //     console.log("Wrong password or username");
  //   }
  //   // console.log(uname);
  //   console.log(usercheck);
  // }


 
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 6,
          borderRadius: 4,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            autoComplete="email"
            autoFocus
            variant="filled"
            color="secondary"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            autoComplete="current-password"
            variant="filled"
            color="secondary"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="secondary" 
            fullWidth 
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Login 
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}