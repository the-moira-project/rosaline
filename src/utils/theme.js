import { createTheme } from '@mui/material/styles';
import { cyan, purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      main: cyan[200],
    },
  },
});
