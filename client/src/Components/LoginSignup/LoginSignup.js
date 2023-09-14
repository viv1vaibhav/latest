import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';

const LoginSignup = () => {

  const [action,setAction]=useState("Sign Up");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className='h-screen flex justify-center items-center bg-blue-500'>
      <Box 
        className='rounded-lg'
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'white',
        }}
      > 
      <div className=' flex justify-center items-center'>
        <Tabs >
          <Tab label="Login"/>
          <Tab label="Sign Up" />
        </Tabs>
      </div>
        {/* <div className='flex justify-center items-center text-xl py-2 pb-3'>Login</div> */}
        <div className='pb-2'>
          <FormControl className=" " variant="outlined">
            <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
            <OutlinedInput
              id="outlined-adornment-username"
              startAdornment={
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              }
              aria-describedby="outlined-username-helper-text"
              inputProps={{
                'aria-label': 'username',
              }}
              label="Username"
            />
          </FormControl>
        </div>
        <div>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <div className='flex justify-center items-center text-xl'>
          <Button variant="contained">{action}</Button>
        </div>
        {/* <div className='py-2 px-1 flex'>
          <p>New User? Sign Up</p>
        </div> */}
      </Box>
    </div>
  )
};

export default LoginSignup;