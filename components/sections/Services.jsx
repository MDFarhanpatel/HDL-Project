import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Reveal from '@/components/Reveal';

const services = [
  {
    number: '01',
    title: 'Shopify Plus',
    text: 'High-converting storefronts, migrations, and growth systems built for ambitious brands.',
    image: '/shopify-banner.jpg',
  },
  {
    number: '02',
    text: 'Marketplace onboarding, catalog management, and growth systems for global selling.',
    title: 'Amazon SPN',
    image: '/amazon-banner.jpg',
  },
  {
    number: '03',
    title: 'AI-powered PIM',
    text: 'One intelligent product hub for clean catalogs, faster launches, and content that scales.',
    image: '/PIM.jpg',
  },
  {
    number: '04',
    title: 'Mobile applications',
    text: 'Thoughtful Android, iOS, and hybrid apps that turn customer moments into lasting habits.',
    image: '/appdev.jpg',
  },
];

function ServicePhone({ image, title }) {
  return (
    <div className="relative mx-auto h-[25rem] w-[14.5rem] rounded-[2rem] border-[5px] border-[#2b2b2b] bg-[#171717] p-1 shadow-[0_22px_35px_-18px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1 sm:h-[27rem] sm:w-[14.5rem]">
      <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white">
        <Image src={image} alt={`${title} service`} fill sizes="232px" className="object-contain transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute left-1/2 top-2 h-5 w-16 -translate-x-1/2 rounded-full bg-[#171717]" />
        <div className="absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-[#1c1c1b]/45 to-transparent" />
        <span className="absolute bottom-4 left-1/2 max-w-[calc(100%-1rem)] -translate-x-1/2 rounded-full bg-[#1c1c1b]/80 px-3 py-1 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-[#febf41] backdrop-blur-sm">
          {title}
        </span>
      </div>
      <div className="absolute bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-white/70" />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-[#1c1c1b] px-4 py-24 text-[#f7f5ef] sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#febf41]">Digital commerce services</p>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Everything your next stage needs.</h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-[#c6c5c5]">From first storefront to full commerce ecosystem, we make complex technology feel simple.</p>
          </div>
        </Reveal>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ number, title, text, image }, index) => (
            <Reveal key={title} delay={index * 100}>
              <article className="group text-center">
                <ServicePhone image={image} title={title} />
                <div className="mx-auto max-w-xs px-3 pt-7 sm:px-0">
                  <div className="mb-3 flex items-start justify-center gap-3"><h3 className="text-xl font-semibold">{title}</h3><span className="text-sm text-white/40">{number}</span></div>
                  <p className="leading-7 text-[#c6c5c5]">{text}</p>
                  <ArrowUpRight className="mx-auto mt-5 text-[#febf41] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}