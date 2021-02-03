import React from 'react'
import Header from './Header'
import TextField from '@material-ui/core/TextField';
import '../App.css';
import Button from '@material-ui/core/Button';
import {  Link } from 'react-router-dom';

function Login() {
    return (
      <div>
        <Header />
        <form  class="form">
            <TextField id="standard-basic" label="username" /><br />
            <TextField id="standard-basic" label="password" />
            <br />
            <br />
            <Button variant="contained" class="button" color="primary">
               Sign in
            </Button>
            <p>Don`t have an account?</p> 
             <Link to="/Register">
              sign up
            </Link> 
            
        </form>
       
      </div>
    );
  }
  
  export default Login;