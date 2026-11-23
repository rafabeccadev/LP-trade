import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
const questions = [
 ['O que estou comprando por R$ 97?', 'O Treinamento Midas de Arbitragem de Criptomoedas, com 5 módulos e 68 aulas em vídeo. O valor é do curso, em pagamento único.'],
 ['E se eu não gostar do curso?', 'Você tem 7 dias de garantia. Se achar que o treinamento não é para você, é só pedir o reembolso nesse prazo e devolvemos 100% do valor pago.'],
 ['Como recebo o acesso?', 'Logo após a confirmação do pagamento você recebe por e-mail os dados de acesso à área de membros. No Pix, a confirmação costuma ser imediata.'],
 ['Preciso ter experiência com criptomoedas?', 'O conteúdo começa pelos fundamentos e avança para modalidades, custos e análise de operações. Você pode começar estudando os conceitos antes de colocar dinheiro em uma operação.'],
 ['A assinatura da plataforma está incluída?', 'A plataforma Midas é usada nas demonstrações do curso. Sua assinatura é vendida separadamente em uma etapa posterior e não está incluída nos R$ 97 do treinamento.'],
 ['Vou aprender apenas a usar uma ferramenta?', 'Você vai estudar a lógica da arbitragem: diferenças de preço, modalidades, taxas, liquidez e riscos. A plataforma aparece como ferramenta para demonstrar esses conceitos na prática.'],
 ['O curso garante lucro?', 'Não. O treinamento é educacional. Taxas, variações de preço, liquidez e execução podem causar perdas. Os exemplos apresentados não representam promessa de resultado.'],
 ['Preciso investir para acompanhar as aulas?', 'Você pode começar pelo estudo e pelos exemplos. Para executar operações reais, será necessário capital próprio e avaliar os custos e os riscos envolvidos. O preço do curso não inclui capital para operar.'],
];
export function FaqSection() {
 const [open, setOpen] = useState<number|null>(0);
 return <section id="faq" className="py-24 px-4"><div className="max-w-3xl mx-auto"><h2 className="text-3xl sm:text-5xl font-black text-center mb-12">Antes de começar,<br/><span>tire suas dúvidas.</span></h2><div className="space-y-3">{questions.map(([question,answer],index)=><div key={question} className="rounded-2xl border border-white/10 bg-[#11131A]"><button aria-expanded={open===index} aria-controls={`faq-${index}`} onClick={()=>setOpen(open===index?null:index)} className="w-full p-6 text-left font-bold flex justify-between items-center gap-4 cursor-pointer">{question}{open===index?<Minus className="shrink-0 text-[#C4F82A]"/>:<Plus className="shrink-0"/>}</button>{open===index && <p id={`faq-${index}`} className="px-6 pb-6 text-slate-300 text-sm leading-relaxed">{answer}</p>}</div>)}</div></div></section>;
}
