import '../styles/globals.scss'
import {themeOptions} from "../theme";
import {responsiveFontSizes, ThemeProvider} from "@mui/material";
import {SelectedProvider} from "../context/selectedElementContext";

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider theme={responsiveFontSizes(themeOptions)}>
        <SelectedProvider>
            <Component {...pageProps} />
        </SelectedProvider>
      </ThemeProvider>
  )
}

export default MyApp
