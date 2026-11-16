import { useState } from 'react'
import { useLocation } from 'react-router-dom'
const links = [['/about','My Story'],['/speaking','Speaking'],['/insights','Insights'],['/evidence','Proof'],['/collection/','The Collection']]
export default function Nav(){
 const [open,setOpen]=useState(false)
 const {pathname}=useLocation()
 return <header className="ed-nav"><a className="skip-link" href="#main">Skip to content</a><div className="ed-nav-inner">
 <a className="ed-wordmark" href="/">Joshua B. Lee<small>The YOUman Catalyst</small></a>
 <button className="ed-menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={()=>setOpen(!open)}>{open?'Close ×':'Menu ☰'}</button>
 <nav id="primary-navigation" aria-label="Main website" className={`ed-nav-links ${open?'is-open':''}`} onClick={e=>{if((e.target as HTMLElement).closest('a'))setOpen(false)}} onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);document.querySelector<HTMLButtonElement>('.ed-menu-toggle')?.focus()}}}>
 {links.map(([href,label])=><a key={href} href={href} aria-current={pathname.replace(/\/$/,'')===href.replace(/\/$/,'')?'page':undefined}>{label}</a>)}
 <a className="ed-button" href="/speaking/#planner">Book Joshua <span aria-hidden="true">↗</span></a>
 </nav></div></header>
}
