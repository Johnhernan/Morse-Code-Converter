import { createTheme } from '@mui/material/styles';

export default createTheme({
    custom: {
        logo: {
            width: "40px", 
            height: "40px",
        }
    },
    //For overriding Built in components
    components: {
        //Example
        // MuiContainer:{
        //     styleOverrides: {
        //         root: {
        //             padding: "5% 14%",
        //             textAlign: "center"
        //         }
        //     }
        // },
    },
    
    palette: {
        text: {
            primary: '#000',
            secondary: '#DCDCE3'
        },
        primary: {
            main: '#203239',
            light: '#42a5f5',
            dark: '#141E27',
        },        
        secondary: {
            main: '#9c27b0',
            light: '#ba68c8',
            dark: '#7b1fa2',
        },
        background: {
            paper: '#FFF',
            default: '#D3DEDC',
        }
    },
    
    typography: {
        htmlFontSize: 16,
        fontFamily: '"Oswald", sans-serif "Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontFamily: '"Oswald", sans-serif, "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: "6rem"
        }, 
        h2: {
            fontFamily: '"Oswald", sans-serif, "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: "3.75rem"
        }, 
        h3: {
            fontFamily: '"Oswald", sans-serif, "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: "3rem"
        }, 
        h4: {
            fontFamily: '"Oswald", sans-serif, "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: "2.125rem"
        }, 
        h5: {
            fontFamily: '"Oswald", sans-serif, "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: "1.5rem"
        }, 
        h6: {
            fontFamily: '"Oswald", sans-serif, "Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 300,
            fontSize: "1.25rem"
        }, 
    }
});
