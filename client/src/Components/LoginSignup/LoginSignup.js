import React, { useState, useEffect } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import Input from "./Input";
import { ThemeProvider } from '@emotion/react';
import { theme } from '../Theme';
import { Tooltip } from "@mui/material";
import { validateRegistrationForm, validateLoginForm } from '../validators';

const getFormNotValidMessage = () => {
  return "Enter correct e-mail address and password should contains between 6 and 12 characters";
};


const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [action, setAction] = useState("Log In");
  const [isFormValid, setIsFormValid] = useState(false);
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    if(!isSignUp) setIsFormValid(validateLoginForm({ user }));
    else setIsFormValid(validateRegistrationForm({ user }))
  }, [user.email, user.password, setIsFormValid]);

  // const hover = {
  //   ':hover': {
  //     bgcolor: 'secondary.main', // theme.palette.primary.main
  //     color: 'secondary.light',
  //   },
  // };

  const getFormValidMessage = () => {
    let value="Log In"
    if(isSignUp) value="Sign Up"
    return `Press to ${value} !`;
  };
  
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

        {isSignUp && <Input name="fullname" id="fullname" user={user} setUser={setUser} label="Full Name" icon={<PersonIcon />} />}
        {isSignUp && <Input name="username" id="username" user={user} setUser={setUser} label="Username" icon={<AccountCircleIcon />} />}
        <Input name="email" id="email" user={user} setUser={setUser} label="Email ID" icon={<EmailIcon />} />
        <Input name="password" id="password" user={user} setUser={setUser} value="password" label="Password" icon={<LockIcon />} isPassword={true} />

        <div className='flex justify-center items-center text-xl py-5'>
          <ThemeProvider theme={theme}>
            <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
              <div>
                <Button variant="outlined" color='primary'>{action}</Button>
              </div>
            </Tooltip> 
          </ThemeProvider>
        </div>
      </Box>
    </div>
  )
};

export default LoginSignup;