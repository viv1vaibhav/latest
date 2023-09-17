import React, { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, OutlinedInput } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';

const Input = (props) => {
    const {className, id, label, icon, isPassword=false} = props;
    
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
        <div className={`flex justify-center items-center py-5 ${className}`}>
          <FormControl variant="outlined" className='w-4/5'>
            <InputLabel htmlFor={`outlined-adornment-${label}`}>{label}</InputLabel>
            <OutlinedInput
              id={`outlined-adornment-${id}`}
              type={isPassword && (showPassword ? 'text' : 'password')}
              startAdornment={
                <InputAdornment position="start">
                  {icon}
                </InputAdornment>
              }
              endAdornment={isPassword &&
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
              label={label}
            />
          </FormControl>
        </div>
    );
}

export default Input;