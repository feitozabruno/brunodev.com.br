import { Html, Head, Main, NextScript } from 'next/document'
import { poppins } from '@/styles/fonts'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className={`${poppins.className} bg-gray-100 antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
