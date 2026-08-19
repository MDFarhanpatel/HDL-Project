import Reveal from '@/components/Reveal';

const industries = ['Fashion & apparel', 'Pharmaceutical', 'Electronics', 'Retail chains', 'Food & beverage', 'Healthcare', 'Footwear'];

export default function Industries() {
  return (
    <section id="portfolio" className="bg-[#eeeae0] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#a27500]">Built for real-world scale</p>
              <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-[#1c1c1b] sm:text-5xl">Commerce that understands your category.</h2>
            </div>
            <p className="max-w-lg text-lg leading-8 text-[#6e6e6f]">Every industry has its own rhythm. We combine proven systems with the detail your customers and operations actually need.</p>
          </div>
        </Reveal>
        <div className="mt-16 grid border-l border-t border-[#c6c5c5] sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Reveal key={industry} delay={index * 70} className="border-b border-r border-[#c6c5c5]">
              <div className="group flex min-h-36 items-end justify-between p-6 transition-colors duration-300 hover:bg-[#febf41] sm:min-h-44 sm:p-7">
                <span className="max-w-32 text-xl font-semibold leading-tight text-[#1c1c1b]">{industry}</span>
                <span className="text-sm text-[#a27500] transition-transform duration-300 group-hover:translate-x-1">0{index + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}