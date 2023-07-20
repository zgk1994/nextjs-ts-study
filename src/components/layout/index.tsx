import Navbar from '../navbar'
import Footer from '../footer'

export default function Layout({ children }: any) {
  return (
    <div className="app-layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
