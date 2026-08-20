import Reveal from '@/components/Reveal';

const regions = [
  { name: 'India', flag: 'india', detail: 'Hyderabad headquarters' },
  { name: 'United Arab Emirates', flag: 'uae', detail: 'Dubai market presence' },
];

function Flag({ type }) {
  if (type === 'india') {
    return (
      <span className="relative block h-5 w-8 overflow-hidden rounded-xs shadow-sm" aria-hidden="true">
        <span className="block h-1/3 bg-[#ff8a1f]" />
        <span className="block h-1/3 bg-white" />
        <span className="block h-1/3 bg-[#16844a]" />
        <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#245aa5]" />
      </span>
    );
  }

  return (
    <span className="relative block h-5 w-8 overflow-hidden rounded-xs shadow-sm" aria-hidden="true">
      <span className="absolute inset-y-0 left-0 w-1/4 bg-[#d51f35]" />
      <span className="absolute inset-y-0 right-0 left-1/4 flex flex-col">
        <span className="h-1/3 bg-[#16844a]" />
        <span className="h-1/3 bg-white" />
        <span className="h-1/3 bg-[#111827]" />
      </span>
    </span>
  );
}

export default function Regions() {
  return (
    <section id="regions" className="bg-[#f7f5ef] px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight text-[#1c1c1b] sm:text-4xl">Serving Businesses Across Multiple Regions</h2>
          <div className="mx-auto mt-5 h-1 w-16 bg-[#febf41]" />
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#6e6e6f] sm:text-base">Supporting brands across India and the United Arab Emirates.</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-2xl gap-5 sm:grid-cols-2">
          {regions.map(({ name, flag, detail }, index) => (
            <Reveal key={name} delay={index * 100}>
              <article className="group flex min-h-40 flex-col items-center justify-center border border-[#dedfe2] bg-white px-6 py-6 shadow-[0_12px_24px_-16px_rgba(28,28,27,0.55)] transition-transform duration-300 hover:-translate-y-1">
                <Flag type={flag} />
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-[#1c1c1b] sm:text-base">{name}</h3>
                  <p className="sr-only">{detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}