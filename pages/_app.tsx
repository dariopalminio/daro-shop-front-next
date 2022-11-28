import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ThemeCore, GlobalStyle } from '../lib'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={ThemeCore}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
