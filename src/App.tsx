/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Filter, Download } from 'lucide-react';
import { dynamics, Dynamic } from './data/dynamics';
import { Card } from './components/Card';
import { Modal } from './components/Modal';
import { downloadAllDynamicsPDF } from './services/pdfService';

const areas = [
  "Todas",
  "Prevenção de Acidentes",
  "Uso de EPIs",
  "Comportamento Seguro",
  "Normas e Procedimentos (NRs)",
  "Situações de Risco e Emergência",
  "Bônus",
  "Vídeos"
];

export default function App() {
  const [selectedArea, setSelectedArea] = useState("Todas");
  const [selectedDynamic, setSelectedDynamic] = useState<Dynamic | null>(null);

  const filteredDynamics = useMemo(() => {
    if (selectedArea === "Todas") return dynamics.filter(d => d.area !== "Vídeos");
    return dynamics.filter(d => d.area === selectedArea);
  }, [selectedArea]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50 via-slate-50 to-slate-100">
      <header className="bg-emerald-950 text-white py-12 lg:py-16 shadow-2xl relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-400 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Acervo Profissional SST
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl mb-6">
              +250 Dinâmicas <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">de Segurança do Trabalho</span>
            </h1>
            <div className="h-1 w-16 bg-emerald-500 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
            
            <button 
              onClick={() => downloadAllDynamicsPDF(dynamics.filter(d => d.area !== "Vídeos"))}
              className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 rounded-2xl font-display font-black text-sm uppercase tracking-widest shadow-xl shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 group"
            >
              <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
              Baixar Acervo Completo (PDF)
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 -mt-8 relative z-20">
        <div className="mb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {areas.map(area => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                className={`group relative p-3 rounded-2xl font-display font-bold text-[9px] md:text-[10px] uppercase tracking-widest transition-all duration-500 border-2 overflow-hidden flex flex-col items-center justify-center gap-2 h-24 md:h-32 ${
                  selectedArea === area
                    ? 'bg-white text-emerald-900 border-emerald-500 shadow-2xl shadow-emerald-200/50 -translate-y-1'
                    : 'bg-white/80 backdrop-blur-md text-slate-500 border-white shadow-sm'
                }`}
              >
                {/* Visual indicator for active state */}
                {selectedArea === area && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
                )}

                <div className="text-2xl md:text-3xl transition-transform duration-500">
                  {area === "Todas" && "🌐"}
                  {area === "Prevenção de Acidentes" && "🛡️"}
                  {area === "Uso de EPIs" && "🦺"}
                  {area === "Comportamento Seguro" && "🧠"}
                  {area === "Normas e Procedimentos (NRs)" && "📜"}
                  {area === "Situações de Risco e Emergência" && "🚨"}
                  {area === "Bônus" && "🎁"}
                  {area === "Vídeos" && "🎥"}
                </div>

                <span className="leading-tight text-center max-w-[100px]">{area}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {filteredDynamics.map(dynamic => (
            <Card key={dynamic.id} dynamic={dynamic} onClick={() => setSelectedDynamic(dynamic)} />
          ))}
        </div>
      </main>

      {selectedDynamic && (
        <Modal dynamic={selectedDynamic} onClose={() => setSelectedDynamic(null)} />
      )}
    </div>
  );
}
