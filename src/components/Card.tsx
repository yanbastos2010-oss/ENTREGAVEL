import React from 'react';
import { Clock, Target } from 'lucide-react';
import { Dynamic } from '../data/dynamics';

interface CardProps {
  key?: React.Key;
  dynamic: Dynamic;
  onClick: () => void;
}

export function Card({ dynamic, onClick }: CardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-[1.5rem] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] cursor-pointer border border-slate-100 flex flex-col h-full group relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute -right-4 -top-4 w-16 h-16 bg-emerald-50 rounded-full opacity-50"></div>
      
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-2xl shadow-inner border border-emerald-100/50">
          {dynamic.icon}
        </div>
        {dynamic.area !== "Vídeos" && (
          <div className="flex flex-col items-end gap-2">
            <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full shadow-sm border ${
              dynamic.difficulty === 'Iniciante' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
              dynamic.difficulty === 'Intermediário' ? 'bg-amber-50 text-amber-600 border-amber-100' :
              'bg-rose-50 text-rose-600 border-rose-100'
            }`}>
              {dynamic.difficulty}
            </span>
          </div>
        )}
      </div>
      
      <div className="relative z-10">
        <h3 className="text-sm md:text-base font-display font-black text-slate-800 mb-2 leading-tight transition-colors">
          {dynamic.area !== "Bônus" && dynamic.area !== "Vídeos" && (
            <span className="text-emerald-600 mr-1.5">#{dynamic.id}</span>
          )}
          {dynamic.title}
        </h3>
        {dynamic.area !== "Bônus" && dynamic.area !== "Vídeos" && (
          <p className="text-[9px] text-emerald-600 font-black uppercase tracking-[0.15em] mb-4 inline-block px-1.5 py-0.5 bg-emerald-50 rounded-md">{dynamic.area}</p>
        )}
      </div>
      
      {dynamic.area !== "Vídeos" && (
        <div className="mt-auto space-y-3 pt-4 border-t border-slate-50 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-[10px] text-slate-500 font-bold">
              <Clock className="w-3 h-3 mr-1.5 text-emerald-400" />
              {dynamic.duration}
            </div>
            <div className="flex items-center text-[10px] text-slate-500 font-bold max-w-[60%]">
              <Target className="w-3 h-3 mr-1.5 text-emerald-400 shrink-0" />
              <span className="truncate" title={dynamic.focus}>{dynamic.focus}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
