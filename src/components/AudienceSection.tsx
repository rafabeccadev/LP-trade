import { Check, X } from 'lucide-react';

const forYou = [
 'Já ouviu falar de arbitragem e quer entender como ela funciona de verdade',
 'Está começando em cripto e quer aprender antes de colocar dinheiro',
 'Já opera, mas não sabe calcular se uma diferença de preço paga as taxas',
 'Prefere um método com critério a seguir “calls” e dicas soltas',
];
const notForYou = [
 'Procura dinheiro fácil ou lucro garantido',
 'Não está disposto a estudar e assistir às aulas',
 'Quer operar sem entender os riscos envolvidos',
];

export function AudienceSection() {
 return <section className="py-24 px-4 bg-[#0A0C12]"><div className="max-w-5xl mx-auto">
  <div className="text-center mb-12"><div className="section-label">PARA QUEM É</div><h2 className="text-3xl sm:text-5xl font-black">Esse treinamento<br/><span>é para você se…</span></h2></div>
  <div className="grid md:grid-cols-5 gap-4">
   <div className="md:col-span-3 rounded-3xl border border-[#C4F82A]/40 bg-[#11131A] p-7"><ul className="space-y-4">{forYou.map(item=><li key={item} className="flex gap-3 text-slate-200"><Check className="text-[#C4F82A] shrink-0 mt-0.5" size={20}/>{item}</li>)}</ul></div>
   <div className="md:col-span-2 rounded-3xl border border-white/10 bg-[#0D0F15] p-7"><p className="text-sm font-bold text-slate-400 mb-4">Não é para você se:</p><ul className="space-y-4">{notForYou.map(item=><li key={item} className="flex gap-3 text-slate-400"><X className="text-red-400/80 shrink-0 mt-0.5" size={20}/>{item}</li>)}</ul></div>
  </div>
 </div></section>;
}
