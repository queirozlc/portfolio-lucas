import GlobalStyle from '@/styles/global'
import theme from '@/styles/themes/theme'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'styled-components'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NextNProgress
          color={theme.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <GlobalStyle />
        <Toaster position="bottom-right" />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
