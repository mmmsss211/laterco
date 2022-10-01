// import '../styles/globals.css'
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material";
import createEmotionCache from '../utility/createEmotionCache'
import { CacheProvider } from '@emotion/react'

const MyApp = ({ Component, pageProps }: AppProps) =>{
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Montserrat',
      ].join(','),
    },
  });

  return (
  <ThemeProvider theme={theme}>
  <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp;
