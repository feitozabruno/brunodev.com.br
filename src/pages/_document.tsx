import { Html, Head, Main, NextScript } from 'next/document'
import { poppins } from '@/styles/fonts'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className={`${poppins.className} antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
