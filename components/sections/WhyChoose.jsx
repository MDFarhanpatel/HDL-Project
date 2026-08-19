import { Check, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';

const reasons = ['One accountable technology partner', 'AI-enabled product operations', 'Shopify and Amazon expertise', 'Enterprise thinking, human support'];

export default function WhyChoose() {
  return (
    <section id="about" className="bg-[#f7f5ef] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#febf41] p-8 sm:p-12">
            <Sparkles className="mb-16 text-[#824e00]" size={28} />
            <p className="text-7xl font-semibold tracking-[-0.08em] text-[#1c1c1b] sm:text-9xl">50<span className="text-5xl sm:text-6xl">+</span></p>
            <p className="mt-2 text-lg font-medium text-[#575757]">brands supported</p>
            <div className="mt-20 grid grid-cols-1 gap-4 border-t border-[#824e00]/25 pt-5 text-sm text-[#575757] min-[400px]:grid-cols-3">
              <div><strong className="block text-2xl text-[#1c1c1b]">1000</strong>products managed</div>
              <div><strong className="block text-2xl text-[#1c1c1b]">10</strong>cities reached</div>
              <div><strong className="block text-2xl text-[#1c1c1b]">98%</strong>satisfaction</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#a27500]">Why businesses choose HDL</p>
          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-[#1c1c1b] sm:text-5xl">We take the stress away.</h2>
          <p className="mb-8 max-w-lg text-lg leading-8 text-[#6e6e6f]">You focus on the business. We handle the technology, the moving parts, and the next opportunity.</p>
          <div className="space-y-4 border-t border-[#d8d6d6] pt-6">
            {reasons.map((reason) => <div key={reason} className="flex items-center gap-3 text-[#1c1c1b]"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1c1c1b] text-[#febf41]"><Check size={14} /></span>{reason}</div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}