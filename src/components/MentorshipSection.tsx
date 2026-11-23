import React, { useState } from 'react';
import { 
  GraduationCap, 
  PlayCircle, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Users, 
  Award
} from 'lucide-react';
import { COURSES } from '../data/mockData';

export const MentorshipSection: React.FC = () => {
  const [expandedCourse, setExpandedCourse] = useState<string>('01');

  return (
    <section id="treinamento" className="py-24 bg-[#08090C] relative">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#C4F82A]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C4F82A]/10 border border-[#C4F82A]/25 text-[#C4F82A] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>O QUE VOCÊ VAI APRENDER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Comece do Zero Absoluto.{' '}
            <span className="text-[#C4F82A]">5 Módulos. 68 Aulas em Vídeo.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Construa sua base antes de operar. Aprenda os fundamentos, conheça as modalidades de arbitragem e acompanhe exemplos para entender como avaliar uma oportunidade.
          </p>
        </div>

        {/* Feature Badges Header */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-12 text-xs sm:text-sm text-slate-300 font-semibold">
          <div className="flex items-center gap-2 bg-[#11131A] px-4 py-2 rounded-xl border border-white/5 font-mono">
            <PlayCircle className="w-4 h-4 text-[#C4F82A]" />
            <span>68 Aulas Práticas Passo a Passo</span>
          </div>
          <div className="flex items-center gap-2 bg-[#11131A] px-4 py-2 rounded-xl border border-white/5 font-mono">
            <Users className="w-4 h-4 text-[#C4F82A]" />
            <span>Fundamentos e análise de operações</span>
          </div>
          <div className="flex items-center gap-2 bg-[#11131A] px-4 py-2 rounded-xl border border-white/5 font-mono">
            <Award className="w-4 h-4 text-[#C4F82A]" />
            <span>Custos e gestão de risco</span>
          </div>
        </div>

        <div className="course-covers" aria-label="Módulos do treinamento">
          {COURSES.map((course, index) => <button key={course.number} className={`course-cover ${expandedCourse === course.number ? 'active' : ''}`} aria-pressed={expandedCourse === course.number} onMouseEnter={() => setExpandedCourse(course.number)} onFocus={() => setExpandedCourse(course.number)} onClick={() => setExpandedCourse(course.number)}>
            <img src="/images/midas-courses.png" alt="" loading="lazy" style={{objectPosition: `${index * 25}% center`}}/>
            <span className="course-number">{course.number} / MIDAS ACADEMY</span><strong>{course.title}</strong>
          </button>)}
        </div>
        {/* Courses Accordion */}
        <div className="space-y-3.5 max-w-4xl mx-auto">
          {COURSES.map((course) => {
            const isExpanded = expandedCourse === course.number;
            return (
              <div
                key={course.number}
                className={`rounded-2xl transition-all duration-200 border ${
                  isExpanded
                    ? 'bg-[#141822] border-[#C4F82A] shadow-xl shadow-[#C4F82A]/10'
                    : 'bg-[#11131A] border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => setExpandedCourse(isExpanded ? '' : course.number)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-black text-lg shrink-0 transition-colors ${
                      isExpanded
                        ? 'bg-[#C4F82A] text-[#08090C] shadow-md shadow-[#C4F82A]/20'
                        : 'bg-white/5 text-[#C4F82A] border border-white/10'
                    }`}>
                      {course.number}
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#C4F82A]">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1">
                          <PlayCircle className="w-3.5 h-3.5 text-slate-400" />
                          {course.lessonsCount} aulas
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {course.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-white/5 text-slate-400 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-[#C4F82A]" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/5 animate-in fade-in duration-200">
                    <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="bg-black/40 rounded-xl p-4 border border-white/5">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#C4F82A] mb-3">
                        Tópicos abordados nas aulas:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {course.topics.map((topic, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-[#C4F82A] shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-slate-400 font-mono">
          Treinamento Midas por R$ 97, em pagamento único · Garantia de 7 dias
        </div>

      </div>
    </section>
  );
};
