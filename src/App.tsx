import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import AuthorityArchitecture from './pages/AuthorityArchitecture'
import WorkWithMe from './pages/WorkWithMe'
import Speaking from './pages/Speaking'
import Insights from './pages/Insights'
import Evidence from './pages/Evidence'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/authority-architecture" element={<AuthorityArchitecture />} />
        <Route path="/work-with-me" element={<WorkWithMe />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/evidence" element={<Evidence />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
