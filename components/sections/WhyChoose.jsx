import Reveal from '@/components/Reveal';

const reasons = [
  ['We Take The Stress Away', 'Focus on your business. We handle technology.'],
  ['AI Enabled PIM', 'Smarter product management and catalog automation.'],
  ['Shopify + Amazon', 'One partner for all channels.'],
  ['Enterprise Experience', 'Retail, Pharma, Manufacturing and Ecommerce.'],
];

export default function WhyChoose() {
  return (
    <section id="about" className="bg-[#f7f5ef] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <Reveal><div><h2 className="text-4xl font-medium tracking-tight text-[#1c1c1b] sm:text-5xl lg:text-6xl">Why Businesses Choose HDL</h2><p className="mt-8 max-w-xl text-lg leading-9 text-[#575757]">We take the stress away. From Shopify stores and Amazon onboarding to mobile apps and AI-powered PIM, HDL becomes your digital transformation partner.</p></div></Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map(([title, text], index) => <Reveal key={title} delay={index * 90}><article className="min-h-36 rounded-2xl border-t-4 border-[#d5a900] bg-[#292929] p-7 text-[#f7f5ef]"><h3 className="mb-3 text-base font-medium">{title}</h3><p className="text-base leading-7 text-[#f7f5ef]">{text}</p></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}