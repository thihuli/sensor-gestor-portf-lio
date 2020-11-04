import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globals';
import DEFAULT from '../themes/default';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={DEFAULT}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
