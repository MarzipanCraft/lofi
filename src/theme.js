import { createMuiTheme } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import blueGrey from '@material-ui/core/colors/blueGrey';
export const lofiTheme = createMuiTheme({
    palette: {
        type:'dark',
        primary: {
            light: lightGreen[100],
            main: lightGreen[500],
            dark: lightGreen[600],
            contrastText: '#fff',
        },
        secondary: {
            light: blueGrey[50],
            main: blueGrey[300],
            dark: blueGrey[900],
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: '"Open Sans", sans-serif',
    },

    overrides: {
    // Name of the component ⚛️ / style sheet
        MuiButton: {
            // Name of the rule
            root: {
                // Some CSS
                borderRadius: 3,
                border: 0,
                height: 48,
                padding: '0 30px',
                boxShadow: '3px 3px 5px 2px rgba(0, 0, 0, .3)',
            },
        },
        MuiPaper: {
            root: {
                padding: '20px',
                square: 'true'
            }

        },
    },
});
