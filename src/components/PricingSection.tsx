import { Check, ArrowRight, ShieldCheck, Zap, CreditCard } from 'lucide-react';
import { checkoutProps } from '../checkout';

const items = [
 '5 módulos com 68 aulas em vídeo (+16h de conteúdo)',
 'Fundamentos da arbitragem de criptomoedas, do zero',
 'Modalidades, spreads e leitura de oportunidades',
 'Como calcular taxas, liquidez e gestão de risco antes de operar',
 'Demonstrações práticas na tela usando a plataforma Midas',
];

export function PricingSection() {
 return <section id="precos" className="py-24 px-4 bg-[#08090C]"><div className="max-w-3xl mx-auto">
 <div className="text-center mb-12"><div className="section-label">SEU PRÓXIMO PASSO</div><h2 className="text-3xl sm:text-5xl font-black mb-5">Tudo que você precisa<br/><span>para começar certo.</span></h2><p className="text-slate-300">Aprenda o método antes de arriscar o seu dinheiro.</p></div>
 <div className="rounded-3xl border border-[#C4F82A]/60 bg-[#11131A] p-7 sm:p-12 shadow-2xl shadow-[#C4F82A]/10">
  <div className="text-xs font-mono text-[#C4F82A] mb-4">CURSO ONLINE • PAGAMENTO ÚNICO</div>
  <h3 className="text-2xl font-bold">Treinamento de Arbitragem de Criptomoedas</h3>
  <ul className="space-y-4 my-8">{items.map(item=><li key={item} className="flex gap-3 text-slate-200"><Check className="text-[#C4F82A] shrink-0" size={20}/>{item}</li>)}</ul>
  <div className="border-t border-white/10 pt-8 mb-8 text-center"><p className="text-sm text-slate-400 mb-1">Investimento único</p><strong className="text-6xl font-black text-[#C4F82A]">R$ 97</strong><p className="text-sm text-slate-400 mt-3">Sem mensalidade. Menos que o custo de uma operação mal calculada.</p></div>
  <a {...checkoutProps('pricing')} className="checkout-cta w-full bg-[#C4F82A] hover:bg-[#D4FF4D] text-[#08090C] py-5 px-4 rounded-xl font-black text-lg cursor-pointer flex justify-center items-center gap-3 shadow-xl shadow-[#C4F82A]/25 transition-colors">Quero acessar agora <ArrowRight size={20}/></a>
  <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-5 text-xs text-slate-400">
   <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#C4F82A]"/>Acesso imediato</span>
   <span className="flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-[#C4F82A]"/>Pix ou cartão</span>
   <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C4F82A]"/>Compra segura</span>
  </div>
 </div>
 <div className="mt-6 rounded-3xl border border-white/10 bg-[#0D0F15] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
  <div className="shrink-0 w-20 h-20 rounded-full border-2 border-[#C4F82A] grid place-items-center"><ShieldCheck className="text-[#C4F82A]" size={36}/></div>
  <div><h3 className="text-xl font-black mb-2">Garantia incondicional de 7 dias</h3><p className="text-slate-300 text-sm leading-relaxed">Entre, assista às aulas e veja se o conteúdo é para você. Se não gostar, peça o reembolso em até 7 dias e devolvemos 100% do valor. Sem perguntas. O risco é todo nosso.</p></div>
 </div>
 </div></section>;
}
