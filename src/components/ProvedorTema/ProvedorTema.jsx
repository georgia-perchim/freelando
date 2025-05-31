import { ThemeProvider } from "@emotion/react";

const theme = {
    colors: {
        white: '',
        warning: '',
        focus: '',
        primary: {
            a: '#5754ED',
            b: '',
            c: ''
        },
        secondary: {
            a: '#EBEAF9',
            b: '',
            c: ''
        },
        neutral: {
            a: '#373737',
            b: '',
            c: '',
            d: ''
        },
        dark: {
            a: '',
            b: ''
        }
    },
    spacings: {
        xs: '8px',
        s: '16px',
        l: '32px',
        xl: '48px',
        xxl: '64px'
    },
    fontFamily: '"Montserrat", sans-serif'
}

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
}