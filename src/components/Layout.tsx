import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import ExitIntentPopup from './ExitIntentPopup'
import ScrollToTop from './ScrollToTop'
import Seo from './Seo'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo />
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ExitIntentPopup />
    </div>
  )
}
