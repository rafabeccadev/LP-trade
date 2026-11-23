import { useEffect, useState } from 'react';
import { ArrowRight, Check, RotateCcw, ArrowLeftRight } from 'lucide-react';
import { checkoutProps } from '../checkout';
export function Experience() {
 useEffect(() => {
 const elements = document.querySelectorAll('main section h2, main section h3');
 // Only skip motion when requested or when the browser cannot observe visibility.
 if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver !== 'function') {
   elements.forEach(el => el.classList.add('revealed'));
   document.querySelector('#integracoes')?.classList.add('circle-visible');
   return;
 }
 const circle = document.querySelector('#integracoes');
 const circleTitle = circle?.querySelector('h2');
 const circleObserver = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting){circle?.classList.add('circle-visible');circleObserver.unobserve(entry.target);}}), {threshold: .15});
 if(circleTitle) circleObserver.observe(circleTitle);
 const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } }), {threshold: .15});
 elements.forEach(el => {el.classList.add('reveal-title'); observer.observe(el)});
 return () => { observer.disconnect(); circleObserver.disconnect(); elements.forEach(el => el.classList.remove('reveal-title')); };
 }, []);
 return null;
}
const routes = [
 { asset: 'BTC', buy: 100000, sell: 101200 },
 { asset: 'ETH', buy: 3000, sell: 3045 },
 { asset: 'SOL', buy: 150, sell: 152.70 },
];
const usd = (value: number) => new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 2}).format(value);
export function Explainer() {
 const [selected, setSelected] = useState(0);
 const [complete, setComplete] = useState(false);
 const route = routes[selected];
 const capital = 1000;
 const gross = capital * (route.sell / route.buy - 1);
 const fees = capital * .001 + (capital + gross) * .001;
 return <section className="explainer">
   <div className="section-label">UM ATIVO. DOIS PREÇOS.</div>
   <h2>Oportunidade na diferença.<br/><span>Veja como funciona.</span></h2>
   <p>O preço de uma mesma moeda pode variar entre corretoras. Explore um exemplo de compra e venda para entender essa diferença.</p>
   <div className="arbitrage-lab">
     <div className="lab-toolbar"><span><span className="lab-dot"/> LAB MIDAS</span><span>SIMULAÇÃO ILUSTRATIVA</span></div>
     <div className="lab-tabs" role="group" aria-label="Escolha a moeda do exemplo">
       {routes.map((item, index) => <button key={item.asset} type="button" aria-pressed={index === selected} onClick={() => {setSelected(index); setComplete(false);}}>{item.asset}<span>/ USDT</span></button>)}
     </div>
     <div className="lab-route">
       <div className="lab-exchange"><span className="lab-step">01 / COMPRA</span><div className="lab-exchange-name"><span>A</span>Corretora A</div><strong>{usd(route.buy)}</strong><p>Preço por {route.asset}</p></div>
       <div className="lab-spread"><ArrowLeftRight size={28}/><strong>+{((route.sell / route.buy - 1) * 100).toFixed(2)}%</strong><span>diferença de preço</span></div>
       <div className="lab-exchange"><span className="lab-step">02 / VENDA</span><div className="lab-exchange-name"><span>B</span>Corretora B</div><strong>{usd(route.sell)}</strong><p>Preço por {route.asset}</p></div>
     </div>
     <div className={`lab-result ${complete ? 'complete' : ''}`} aria-live="polite">
       <div><span>Capital do exemplo</span><strong>{usd(capital)}</strong></div>
       <div><span>Diferença bruta</span><strong>{usd(gross)}</strong></div>
       <div><span>Taxas estimadas*</span><strong>−{usd(fees)}</strong></div>
       <div><span>{complete ? 'Resultado da simulação' : 'Diferença após taxas*'}</span><strong>{complete && <Check size={18}/>}+{usd(gross - fees)}</strong></div>
     </div>
     <button type="button" className="lab-action" onClick={() => setComplete(!complete)}>{complete ? <RotateCcw size={18}/> : <ArrowRight size={18}/>} {complete ? 'Reiniciar exemplo' : 'Simular essa diferença'}</button>
     <p className="lab-note">*Preços fictícios. Taxa ilustrativa de 0,1% por ordem. Não inclui transferência, funding, slippage ou mudanças de preço. Este exemplo não executa operações nem representa rentabilidade garantida.</p>
   </div>
   <p className="explainer-bridge">No treinamento você aprende a fazer essa conta com preços reais — incluindo transferência, funding e slippage.</p>
   <a {...checkoutProps('explainer')} className="contact-pill"><span className="contact-pill-icon"><ArrowRight size={22}/></span><span>QUERO APRENDER POR R$ 97</span></a>
 </section>;
}
