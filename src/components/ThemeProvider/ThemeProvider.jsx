import { ThemeProvider } from "@emotion/react";

const theme = {
    colors: {
        white: '#FFFFFF',
        warning: '#FF0E0E',
        focus: '#B009FF',
        primary: {
            a: '#5754ED',
            b: '#D93114',
            c: '#168070'
        },
        secondary: {
            a: '#EBEAF9',
            b: '#FDF8F8',
            c: '#EBFCF9'
        },
        neutral: {
            a: '#373737',
            b: '#E8E8E8',
            c: '#F5F5F5'
        },
        dark: {
            a: '#110EA0',
            b: '#B61B00'
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

export const SlyledThemeProvider = ({ children }) => {
    return <ThemeProvider theme={theme}>
        { children }
    </ThemeProvider>
}