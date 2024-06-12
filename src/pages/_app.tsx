import { poppins } from '@/styles/fonts'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.className} bg-gray-50 antialiased`}>
      <Component {...pageProps} />
    </main>
  )
}
