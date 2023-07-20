import { AppProps } from 'next/app'
import Layout from '@/components/layout'
import '@/styles/globals.scss'
function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default App
