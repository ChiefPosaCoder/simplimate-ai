import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['Gotham Light', 'sans-serif'].join(','),
    fontSize: 16,
    htmlFontSize: 10,
    color: '#9b9b9b',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  palette: {
    primary: {500: '#003A53'},
    error: {500: '#ff0000'},
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  fontWeightMedium: 500,
  button: {
    borderRadius: 0,
  },
  status: {
    danger: '#ff0000',
  },
  overrides: {
    MuiButton: {
      // Name of the component
      text: {
        // Name of the rule
        color: '#fff', // Some CSS
      },
    },
  },
});

export default theme;
