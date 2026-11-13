import { createRoot } from 'react-dom/client'
import Collection from './Collection'
import './style.css'
import './vault.css'

createRoot(document.getElementById('collection-root')!).render(<Collection />)
