import { articleIndex } from './articleIndex'
const seen = new Set<string>()
export const uniqueArticles = articleIndex.filter(a => {const key = a.title.toLowerCase().replace(/[^a-z0-9]/g,'')+'|'+a.date;if(seen.has(key))return false;seen.add(key);return true})
export const featuredArticles = ['why-doesnt-trust-scale','why-doesnt-success-automatically-create-peace','future-of-leadership-is-human-ai-are-you-ready'].map(slug => articleIndex.find(a=>a.slug===slug)!).filter(Boolean)
