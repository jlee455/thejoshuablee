import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import Seo from './Seo'

export default function Layout() {
  const {pathname}=useLocation()
  const editorial=['/','/work-with-me','/insights','/authority-architecture','/my-world','/about','/speaking'].includes(pathname.replace(/\/$/,'')||'/')
  const page=pathname.split('/')[1]||'home'
  return (
    <div className="site-shell min-h-screen flex flex-col">
      <Seo />
      <ScrollToTop />
      <Nav />
      <main id="main" className={`flex-1 ${editorial ? '' : 'ed-legacy'} ed-${page}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
