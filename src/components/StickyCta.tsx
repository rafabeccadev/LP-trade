import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { checkoutProps } from '../checkout';

/** Mobile-only bottom bar that appears once the visitor scrolls past the hero. */
export function StickyCta() {
 const [visible, setVisible] = useState(false);
 useEffect(() => {
  const onScroll = () => {
   const pricing = document.getElementById('precos')?.getBoundingClientRect();
   const pricingInView = pricing ? pricing.top < window.innerHeight && pricing.bottom > 0 : false;
   setVisible(window.scrollY > window.innerHeight * 0.8 && !pricingInView);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
 }, []);
 return <div aria-hidden={!visible} className={`md:hidden fixed inset-x-0 bottom-0 z-40 p-3 bg-[#08090C]/95 border-t border-white/10 backdrop-blur-xl transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
  <a {...checkoutProps('sticky_mobile')} tabIndex={visible ? 0 : -1} className="flex items-center justify-between gap-3 rounded-xl bg-[#C4F82A] text-[#08090C] px-5 py-4 font-black">
   <span>Acessar o treinamento</span><span className="flex items-center gap-2">R$ 97 <ArrowRight size={18}/></span>
  </a>
 </div>;
}
