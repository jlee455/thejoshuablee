import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useLocation } from 'react-router-dom'
const links = [['/about/','My Story'],['/speaking/','Speaking'],['/work-with-me/','Work With Me'],['/my-world/','Inside My World'],['/collection/','The Collection'],['/insights/','Insights'],['/evidence/','Proof']]
export default function Nav(){
 const [open,setOpen]=useState(false)
 const {pathname}=useLocation()
 return <header className="ed-nav" onKeyDown={e=>{if(e.key==='Escape' && open){setOpen(false);document.querySelector<HTMLButtonElement>('.ed-menu-toggle')?.focus()}}}><a className="skip-link" href="#main">Skip to content</a><div className="ed-nav-inner">
 <a className="ed-wordmark" href="/">Joshua B. Lee<small>The YOUman Catalyst</small></a>
 <button className="ed-menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'} {open?<X size={18} aria-hidden="true"/>:<Menu size={18} aria-hidden="true"/>}</button>
 <nav id="primary-navigation" aria-label="Main website" className={`ed-nav-links ${open?'is-open':''}`} onClick={e=>{if((e.target as HTMLElement).closest('a'))setOpen(false)}} onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);document.querySelector<HTMLButtonElement>('.ed-menu-toggle')?.focus()}}}>
 {links.map(([href,label])=><a key={href} href={href} aria-current={pathname.replace(/\/$/,'')===href.replace(/\/$/,'')?'page':undefined}>{label}</a>)}
 <a className="ed-button" href="/speaking/#planner">Book Joshua <ArrowUpRight size={16} aria-hidden="true"/></a>
 </nav></div></header>
}
