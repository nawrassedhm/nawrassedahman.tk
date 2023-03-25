import { DefaultSeo, ThemeProvider } from 'components'
import type { AppProps } from 'next/app'
import React from 'react'
import '../public/fonts.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <DefaultSeo />
      <ThemeProvider>
       <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}
