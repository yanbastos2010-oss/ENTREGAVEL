import React, { useEffect } from 'react';
import { X, Clock, Target, BarChart, Package, Eye, ListOrdered, Lightbulb, Download } from 'lucide-react';
import { Dynamic } from '../data/dynamics';
import { downloadDynamicPDF } from '../services/pdfService';

interface ModalProps {
  dynamic: Dynamic;
  onClose: () => void;
}

export function Modal({ dynamic, onClose }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {dynamic.externalLink ? (
            <div className="flex flex-col items-center justify-center py-12">
              <a 
                href={dynamic.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-2xl font-display font-black text-lg shadow-xl shadow-emerald-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
              >
                Acessar Material
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          ) : dynamic.area === "Vídeos" ? (
            <div className="flex flex-col items-center justify-center space-y-6 py-10">
              <div className="aspect-[9/16] w-full max-w-[300px] bg-black rounded-3xl shadow-2xl flex flex-col items-center justify-center relative overflow-hidden border-4 border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/40"></div>
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500 mb-4"></div>
                <span className="text-white font-display font-black tracking-widest uppercase text-xs animate-pulse">Carregando...</span>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-50 text-4xl shadow-inner border border-emerald-100 shrink-0 transform -rotate-2">
                  {dynamic.icon}
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {dynamic.area !== "Bônus" && (
                      <span className="text-[8px] font-black text-emerald-600 uppercase tracking-[0.15em] bg-emerald-50 px-2 py-0.5 rounded-md">{dynamic.area}</span>
                    )}
                    <span className={`text-[8px] font-black uppercase tracking-[0.15em] px-2 py-0.5 rounded-md ${
                      dynamic.difficulty === 'Iniciante' ? 'bg-green-50 text-green-600' :
                      dynamic.difficulty === 'Intermediário' ? 'bg-amber-50 text-amber-600' :
                      'bg-rose-50 text-rose-600'
                    }`}>{dynamic.difficulty}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 leading-tight tracking-tight">
                    {dynamic.area !== "Bônus" && dynamic.area !== "Vídeos" && (
                      <span className="text-emerald-600 mr-2">#{dynamic.id}</span>
                    )}
                    {dynamic.title}
                  </h2>
                </div>
              </div>

              {dynamic.area !== "Vídeos" && (
                <button 
                  onClick={() => downloadDynamicPDF(dynamic)}
                  className="w-full mb-8 py-4 bg-slate-900 text-white rounded-2xl font-display font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-slate-200 flex items-center justify-center gap-3"
                >
                  <Download className="w-4 h-4" />
                  BAIXAR EM PDF
                </button>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-slate-50 p-4 rounded-[1.5rem] border border-slate-100 shadow-sm transition-colors duration-500">
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <BarChart className="w-4 h-4 text-emerald-500" />
                    <span className="text-[9px] font-black uppercase tracking-widest">Dificuldade</span>
                  </div>
                  <p className="text-base font-display font-black text-slate-800">{dynamic.difficulty}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-[1.5rem] border border-slate-100 shadow-sm transition-colors duration-500">
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    <span className="text-[9px] font-black uppercase tracking-widest">Duração</span>
                  </div>
                  <p className="text-base font-display font-black text-slate-800">{dynamic.duration}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-[1.5rem] border border-slate-100 shadow-sm transition-colors duration-500">
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Target className="w-4 h-4 text-emerald-500" />
                    <span className="text-[9px] font-black uppercase tracking-widest">Foco</span>
                  </div>
                  <p className="text-base font-display font-black text-slate-800 leading-tight">{dynamic.focus}</p>
                </div>
              </div>

              <div className="space-y-10">
                {dynamic.materials && dynamic.materials.length > 0 && (
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-200">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">Materiais Necessários</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {dynamic.materials.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                          <span className="font-bold text-slate-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {dynamic.subItems && (
                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-200">
                            <ListOrdered className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">Conteúdo Detalhado</h3>
                        </div>
                        <div className="space-y-3">
                          {dynamic.subItems.map((item, idx) => (
                            <details key={idx} className="group bg-white border border-slate-100 rounded-xl shadow-sm overflow-hidden transition-all duration-300">
                              <summary className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">{item.icon}</span>
                                  <span className="font-bold text-slate-800 text-sm">{item.title}</span>
                                </div>
                                <div className="text-emerald-500 transition-transform duration-300 group-open:rotate-180">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                </div>
                              </summary>
                              <div className="p-4 pt-0 border-t border-slate-50 space-y-4">
                                <div className="grid grid-cols-2 gap-2 mt-4">
                                  <div className="bg-slate-50 p-2 rounded-lg">
                                    <span className="text-[8px] font-black text-slate-400 uppercase block mb-1">Duração</span>
                                    <span className="text-xs font-bold text-slate-700">{item.duration}</span>
                                  </div>
                                  <div className="bg-slate-50 p-2 rounded-lg">
                                    <span className="text-[8px] font-black text-slate-400 uppercase block mb-1">Dificuldade</span>
                                    <span className="text-xs font-bold text-slate-700">{item.difficulty}</span>
                                  </div>
                                </div>
                                <div>
                                  <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest block mb-2">Visão Geral</span>
                                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.overview}</p>
                                </div>
                                <div>
                                  <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest block mb-2">Execução</span>
                                  <ul className="space-y-1">
                                    {item.steps.map((step, sIdx) => (
                                      <li key={sIdx} className="text-xs text-slate-700 flex gap-2">
                                        <span className="text-emerald-500 font-black">•</span>
                                        {step}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                  <span className="text-[9px] font-black text-emerald-700 uppercase tracking-widest block mb-1">Dica</span>
                                  <p className="text-xs text-emerald-800 font-bold italic">"{item.tip}"</p>
                                </div>
                                <div className="pt-4 border-t border-slate-50">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      downloadDynamicPDF({ ...item, area: dynamic.area, id: dynamic.id });
                                    }}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-300 font-bold text-xs shadow-sm hover:shadow-md active:scale-95"
                                  >
                                    <Download className="w-3.5 h-3.5" />
                                    BAIXAR EM PDF
                                  </button>
                                </div>
                              </div>
                            </details>
                          ))}
                        </div>
                      </section>
                    )}

                    {!dynamic.subItems && (
                      <>
                        <section>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-200">
                              <Eye className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">Visão Geral</h3>
                          </div>
                          <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                            <p className="text-base text-slate-600 leading-tight font-medium italic">
                              "{dynamic.overview}"
                            </p>
                          </div>
                        </section>

                        <section>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-200">
                              <ListOrdered className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">Execução</h3>
                          </div>
                          <div className="space-y-4">
                            {dynamic.steps.map((step, idx) => (
                              <div key={idx} className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                  <div className="w-8 h-8 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center text-emerald-600 font-black z-10 shadow-sm text-sm">
                                    {idx + 1}
                                  </div>
                                  {idx !== dynamic.steps.length - 1 && (
                                    <div className="w-0.5 h-full bg-emerald-100 -mt-1 mb-[-1rem]"></div>
                                  )}
                                </div>
                                <div className="pb-6">
                                  <p className="text-base text-slate-700 font-bold leading-snug pt-1">{step}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>

                        <section className="bg-emerald-950 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                          <div className="absolute -right-8 -bottom-8 text-emerald-900/30 transform rotate-12 transition-transform duration-700">
                            <Lightbulb className="w-48 h-48" />
                          </div>
                          <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                                <Lightbulb className="w-4 h-4 text-white" />
                              </div>
                              <h3 className="text-xl font-display font-black text-emerald-400 uppercase tracking-widest">Dica de Ouro</h3>
                            </div>
                            <p className="text-lg sm:text-xl text-white font-display font-bold leading-tight tracking-tight">
                              {dynamic.tip}
                            </p>
                          </div>
                        </section>
                      </>
                    )}
                  </div>
                </>
              )}
        </div>
      </div>
    </div>
  );
}
