import React, { useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Input from "./Input";
import { ThemeProvider } from '@emotion/react';
import { theme } from '../Theme';

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [action, setAction] = useState("Log In");

  // const hover = {
  //   ':hover': {
  //     bgcolor: 'secondary.main', // theme.palette.primary.main
  //     color: 'secondary.light',
  //   },
  // };

  return (
    <div className='h-screen bg-[#E4F1FF] py-24'>
      <Box className={`rounded-lg items-center hover:bg-[#AED2FF] h-${isSignUp ? "4/5" : "3/5"} w-1/4 ml-auto mr-32`}>
        <div className='flex'>
          <ThemeProvider theme={theme}>
            <ButtonGroup variant="text" color={`primary`} className='w-full'>
              <Button className='w-1/2' onClick={() => { setAction("Log In"); setIsSignUp(false); }}>Log In</Button>
              <Button className='w-1/2' onClick={() => { setAction("Sign Up"); setIsSignUp(true); }}>Sign Up</Button>
            </ButtonGroup>
          </ThemeProvider>
        </div>

        {isSignUp && <Input id="fullname" label="Full Name" icon={<PersonIcon />} />}
        {isSignUp && <Input id="username" label="Username" icon={<AccountCircleIcon />} />}
        <Input id="emailid" label="Email ID" icon={<EmailIcon />} />
        <Input id="password" label="Password" icon={<LockIcon />} isPassword={true} />

        <div className='flex justify-center items-center text-xl py-5'>
          <ThemeProvider theme={theme}>
            <Button variant="outlined" color='primary'>{action}</Button>
          </ThemeProvider>
        </div>
      </Box>
    </div>
  )
};

export default LoginSignup;