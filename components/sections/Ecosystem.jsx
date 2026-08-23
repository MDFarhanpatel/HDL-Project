import { BarChart3, Boxes, Globe2, Smartphone, Store } from 'lucide-react';
import Reveal from '@/components/Reveal';

const ecosystem = [
  { icon: Store, title: 'Shopify Plus', text: 'E-Commerce Store' },
  { icon: Globe2, title: 'Amazon SPN', text: 'Marketplace Growth' },
  { icon: Boxes, title: 'HDL AI-PIM', text: 'Central Product Hub' },
  { icon: Smartphone, title: 'Mobile Apps', text: 'Android & iOS' },
  { icon: BarChart3, title: 'Analytics', text: 'Reports & Insights' },
];

export default function Ecosystem() {
  return (
    <section id="community" className="bg-[#f7f5ef] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center"><h2 className="text-4xl font-medium tracking-tight text-[#1c1c1b] sm:text-5xl">HDL Digital Commerce Ecosystem</h2><div className="mx-auto mt-6 h-1 w-20 bg-[#d5a900]" /><p className="mx-auto mt-5 max-w-2xl text-lg text-[#575757]">One platform. One partner. Complete digital commerce transformation.</p></div>
        </Reveal>
        <div className="mx-auto mt-16 grid max-w-5xl gap-7 sm:grid-cols-2 lg:grid-cols-6">
          {ecosystem.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * 80} className="lg:col-span-2"><div className="group flex min-h-36 flex-col items-center justify-center border-t-4 border-[#d5a900] bg-white px-6 text-center shadow-[0_14px_28px_-18px_rgba(28,28,27,0.4)] transition-transform duration-300 hover:-translate-y-1"><Icon className="mb-5 text-[#a27500]" size={24} /><h3 className="text-base font-medium text-[#1c1c1b]">{title}</h3><p className="mt-1 text-base text-[#575757]">{text}</p></div></Reveal>)}
        </div>
      </div>
    </section>
  );
}