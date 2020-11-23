import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { brown } from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Inconsolata, Arial',
  },
  palette: {
    primary: {
      main: brown[900],
    }
  }
});

export default theme;