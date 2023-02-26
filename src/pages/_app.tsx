import type { AppProps } from 'next/app'
import GlobalStyle from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '@/styles/themes/theme'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
