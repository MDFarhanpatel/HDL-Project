import { BarChart3, Boxes, Globe2 } from 'lucide-react';
import Reveal from '@/components/Reveal';

const ecosystem = [
  { icon: Boxes, title: 'Central product hub', text: 'A clean source of truth for every channel.' },
  { icon: Globe2, title: 'Connected marketplaces', text: 'Shopify Plus and Amazon growth in sync.' },
  { icon: BarChart3, title: 'Actionable analytics', text: 'Reports that make the next move obvious.' },
];

export default function Ecosystem() {
  return (
    <section id="community" className="bg-[#d8d6d6] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-[#a2a1a1] pb-10 lg:flex-row lg:items-end">
            <div><p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#824e00]">HDL digital commerce ecosystem</p><h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-[#1c1c1b] sm:text-5xl">One platform. One partner. More momentum.</h2></div>
            <p className="max-w-sm text-[#575757]">A connected operating system for the modern brand.</p>
          </div>
        </Reveal>
        <div className="grid gap-4 pt-10 md:grid-cols-3">
          {ecosystem.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * 100}><div className="border border-[#a2a1a1] bg-[#f7f5ef]/50 p-7 transition-colors duration-300 hover:bg-[#f7f5ef]"><Icon className="mb-14 text-[#a27500]" size={28} /><h3 className="mb-2 text-xl font-semibold text-[#1c1c1b]">{title}</h3><p className="leading-7 text-[#6e6e6f]">{text}</p></div></Reveal>)}
        </div>
      </div>
    </section>
  );
}