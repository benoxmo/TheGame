import App from 'next/app'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

export default class WebApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
        <ThemeProvider>
            <CSSReset/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
  }
}