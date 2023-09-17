import { createTheme } from '@mui/material/styles';
import { blue, grey, lightBlue } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[700],
      light: grey[700],
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#01579b',
      light: '#FFFFFF',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#47008F',
    }, 
  },
});