import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { checkoutProps } from '../checkout';
export function Navbar() {
 const [open, setOpen] = useState(false);
 const links = [{label:'O treinamento',href:'#treinamento'},{label:'Na prática',href:'#pratica'},{label:'Investimento',href:'#precos'},{label:'Dúvidas',href:'#faq'}];
 return <header className="fixed inset-x-0 top-0 z-40 bg-[#08090C]/95 border-b border-white/10 backdrop-blur-xl"><div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
 <a href="#" className="font-black text-xl tracking-tight">MIDAS <span className="block text-[9px] tracking-[.2em] text-[#C4F82A]">TREINAMENTO</span></a>
 <nav aria-label="Navegação principal" className="hidden md:flex gap-7 text-sm text-slate-300">{links.map(link=><a key={link.href} href={link.href}>{link.label}</a>)}</nav>
 <div className="flex items-center gap-3"><a {...checkoutProps('navbar')} className="bg-[#C4F82A] text-[#08090C] font-bold text-xs sm:text-sm rounded-xl px-4 py-3 cursor-pointer"><span className="hidden sm:inline">Quero o curso · </span>R$ 97</a><button className="md:hidden p-2" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
 </div>{open && <nav id="mobile-menu" aria-label="Navegação móvel" className="md:hidden px-6 pb-6 flex flex-col gap-4">{links.map(link=><a key={link.href} href={link.href} onClick={()=>setOpen(false)}>{link.label}</a>)}</nav>}</header>;
}
