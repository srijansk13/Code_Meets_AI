import React from 'react';
import { 
  BrainCircuit, Terminal, Sparkles, Code2, Bot, Globe, 
  Bug, Hexagon, Zap, Puzzle, Wrench, Users, Mic, Cpu,
  Monitor, Network, Layout, ScanLine, Blocks, RadioTower, Lightbulb
} from 'lucide-react';

export const IconGradients = () => (
  <svg width="0" height="0" className="absolute hidden">
    <defs>
      <linearGradient id="cyan-purple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f0ff" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <linearGradient id="purple-magenta" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="cyan-blue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f0ff" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

export const PromptEngineeringIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-brand-cyan/20 blur-[20px] rounded-full transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
    <BrainCircuit size={48} stroke="url(#cyan-purple)" strokeWidth={1.2} filter="url(#neon-glow)" className="absolute opacity-80" />
    <BrainCircuit size={48} stroke="#fff" strokeWidth={0.5} className="absolute" />
    <div className="absolute -bottom-1 -right-1 bg-[#050508]/80 backdrop-blur-md rounded border border-brand-cyan/50 p-1.5 shadow-[0_0_10px_rgba(0,240,255,0.3)]">
      <Terminal size={16} stroke="#00f0ff" strokeWidth={2} />
    </div>
    <Sparkles size={16} stroke="#d946ef" className="absolute -top-1 -left-1 animate-pulse" />
  </div>
);

export const GenerativeAIIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-brand-purple/20 blur-[20px] rounded-full transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
    <Hexagon size={56} stroke="url(#purple-magenta)" strokeWidth={1} filter="url(#neon-glow)" className="absolute opacity-60 rotate-90" />
    <Bot size={40} stroke="url(#cyan-purple)" strokeWidth={1.2} className="absolute" />
    <Bot size={40} stroke="#fff" strokeWidth={0.5} className="absolute" />
    {/* Glowing Eyes effect */}
    <div className="absolute top-[48%] left-[42%] w-1.5 h-1.5 bg-[#00f0ff] rounded-full shadow-[0_0_8px_#00f0ff] animate-pulse" />
    <div className="absolute top-[48%] right-[42%] w-1.5 h-1.5 bg-[#00f0ff] rounded-full shadow-[0_0_8px_#00f0ff] animate-pulse" />
  </div>
);

export const CodingIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-blue-500/20 blur-[20px] rounded-full transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
    <Monitor size={48} stroke="url(#cyan-blue)" strokeWidth={1.2} filter="url(#neon-glow)" className="absolute opacity-80" />
    <Monitor size={48} stroke="#fff" strokeWidth={0.5} className="absolute" />
    <Code2 size={24} stroke="#00f0ff" strokeWidth={1.5} className="absolute z-10 drop-shadow-[0_0_5px_#00f0ff]" />
    <div className="absolute w-12 h-0.5 bg-brand-cyan/50 bottom-2 blur-[1px]" />
  </div>
);

export const WebDevelopmentIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-emerald-500/20 blur-[20px] rounded-full transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
    <Globe size={48} stroke="url(#cyan-purple)" strokeWidth={1} filter="url(#neon-glow)" className="absolute opacity-70 animate-[spin_20s_linear_infinite]" />
    <Network size={32} stroke="#fff" strokeWidth={1.5} className="absolute drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
    <div className="absolute -top-1 right-0 bg-[#050508]/80 backdrop-blur-md rounded border border-brand-purple/50 p-1.5">
      <Layout size={14} stroke="#d946ef" />
    </div>
  </div>
);

export const DebuggingIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-red-500/20 blur-[20px] rounded-full transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
    <Bug size={48} stroke="url(#purple-magenta)" strokeWidth={1.2} filter="url(#neon-glow)" className="absolute opacity-80" />
    <Bug size={48} stroke="#fff" strokeWidth={0.5} className="absolute" />
    <div className="absolute inset-0 flex items-center justify-center">
      <ScanLine size={56} stroke="#00f0ff" strokeWidth={1.5} className="absolute opacity-50" />
    </div>
    <div className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_10px_#ef4444] animate-ping" />
  </div>
);

export const AIAssistedCodingIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-brand-cyan/20 blur-[20px] rounded-full transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
    <Code2 size={48} stroke="url(#cyan-purple)" strokeWidth={1} className="absolute opacity-70" />
    <Zap size={32} stroke="url(#purple-magenta)" strokeWidth={1.5} filter="url(#neon-glow)" className="absolute drop-shadow-[0_0_10px_#d946ef]" fill="rgba(217, 70, 239, 0.2)" />
    <Zap size={32} stroke="#fff" strokeWidth={0.5} className="absolute" />
    <Sparkles size={14} stroke="#00f0ff" className="absolute top-0 right-1 animate-pulse" />
  </div>
);

export const ProblemSolvingIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-orange-500/20 blur-[20px] rounded-full transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
    <Puzzle size={44} stroke="url(#cyan-purple)" strokeWidth={1.5} filter="url(#neon-glow)" className="absolute opacity-90 -translate-x-1.5 -translate-y-1.5" fill="rgba(0, 240, 255, 0.1)" />
    <Puzzle size={44} stroke="url(#purple-magenta)" strokeWidth={1.5} className="absolute translate-x-2.5 translate-y-2.5 opacity-60" fill="rgba(217, 70, 239, 0.1)" />
    <Cpu size={22} stroke="#fff" strokeWidth={1.5} className="absolute drop-shadow-[0_0_5px_#fff] bg-[#050508]/50 rounded-full" />
  </div>
);

export const BuildingWithAIIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-brand-purple/20 blur-[20px] rounded-full transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
    <Blocks size={48} stroke="url(#cyan-blue)" strokeWidth={1.2} filter="url(#neon-glow)" className="absolute opacity-80" />
    <Wrench size={24} stroke="#d946ef" strokeWidth={2} className="absolute z-10 drop-shadow-[0_0_8px_#d946ef] rotate-12" />
    <div className="absolute top-1 left-1 bg-brand-purple/20 border border-brand-purple/50 rounded text-[9px] px-1 text-white/90 font-mono backdrop-blur-sm shadow-[0_0_8px_rgba(139,92,246,0.5)]">AI</div>
  </div>
);

export const TeamworkIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-blue-500/20 blur-[20px] rounded-full transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
    <Network size={50} stroke="url(#cyan-purple)" strokeWidth={1.2} filter="url(#neon-glow)" className="absolute opacity-80" />
    <Users size={26} stroke="#fff" strokeWidth={1.5} className="absolute z-10 drop-shadow-[0_0_8px_#fff] bg-[#050508]/80 backdrop-blur-sm rounded-full p-1" />
    <div className="absolute top-1 left-2 w-2 h-2 bg-brand-cyan rounded-full shadow-[0_0_8px_#00f0ff]" />
    <div className="absolute bottom-2 right-1 w-2 h-2 bg-brand-purple rounded-full shadow-[0_0_8px_#8b5cf6]" />
  </div>
);

export const PresentingIdeasIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 bg-purple-500/20 blur-[20px] rounded-full transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
    <RadioTower size={48} stroke="url(#purple-magenta)" strokeWidth={1.2} filter="url(#neon-glow)" className="absolute opacity-80" />
    <Mic size={24} stroke="#00f0ff" strokeWidth={1.5} className="absolute z-10 drop-shadow-[0_0_8px_#00f0ff] bg-[#050508] rounded-full p-1" />
    <Lightbulb size={18} stroke="#fff" className="absolute -top-2 -right-1 drop-shadow-[0_0_8px_#fff]" fill="rgba(255,255,255,0.8)" />
  </div>
);
