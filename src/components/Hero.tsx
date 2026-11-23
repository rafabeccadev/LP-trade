import { ArrowRight, ShieldCheck, Zap, CreditCard } from 'lucide-react';
import { checkoutProps } from '../checkout';

const stats = [
  { value: '68', label: 'aulas em vídeo' },
  { value: '+16h', label: 'de conteúdo' },
  { value: '5', label: 'módulos do zero ao avançado' },
];

export const Hero = () => (
  <section className="landing-hero relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-dot-grid">
    <div className="hero-glow" aria-hidden="true" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C4F82A]/10 border border-[#C4F82A]/30 text-xs sm:text-sm font-bold text-[#C4F82A] mb-6">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C4F82A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C4F82A]"></span>
          </span>
          <span>CURSO ONLINE • ARBITRAGEM DE CRIPTOMOEDAS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.06] mb-6">
          A mesma moeda, dois preços.{' '}
          <span className="text-[#C4F82A] block">Aprenda a aproveitar a diferença.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
          O passo a passo para <strong className="text-white font-semibold">encontrar, calcular e avaliar</strong> oportunidades de arbitragem entre corretoras — com taxas e riscos na conta, mesmo começando do zero.
        </p>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto mb-9">
          {stats.map(stat => (
            <div key={stat.label} className="rounded-2xl bg-[#11131A] border border-white/10 py-4 px-2">
              <div className="text-2xl sm:text-4xl font-black text-[#C4F82A] font-mono">{stat.value}</div>
              <div className="text-[11px] sm:text-sm text-slate-400 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        <a {...checkoutProps('hero')} className="checkout-cta inline-flex w-full sm:w-auto items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-lg text-[#08090C] bg-[#C4F82A] hover:bg-[#D4FF4D] shadow-xl shadow-[#C4F82A]/25 hover:scale-[1.02] active:scale-[0.99] transition-all">
          Quero acessar o treinamento <ArrowRight className="w-5 h-5" />
        </a>

        <p className="mt-4 text-sm text-slate-300">
          Pagamento único de <strong className="text-white text-base">R$ 97</strong> · sem mensalidade
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-5 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C4F82A]" />Garantia de 7 dias</span>
          <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-[#C4F82A]" />Acesso imediato</span>
          <span className="flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-[#C4F82A]" />Pix ou cartão</span>
        </div>
      </div>
    </div>
  </section>
);
