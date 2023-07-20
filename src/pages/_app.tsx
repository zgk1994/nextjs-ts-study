import { AppProps } from 'next/app'
import Layout from '@/components/layout'
import '@/styles/globals.scss'
function App({ Component, pageProps }: AppProps) {
  // console.log((Component as any).getTitle)
  // console.log((Component as any).render)
  // if ((Component as any).render) {
  //   return <Layout>{(Component as any).render()}</Layout>
  // } else {
  //   return (
  //     <Layout>
  //       <Component {...pageProps} />
  //     </Layout>
  //   )
  // }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default App
