import Image from 'next/image';
import Reveal from '@/components/Reveal';

const industries = [
	{ name: 'Fashion & apparel', image: '/photo-1445205170230-053b83016050.webp' },
	{ name: 'Pharmaceutical', image: '/photo-1584308666744-24d5c474f2ae.webp' },
	{ name: 'Electronics', image: '/photo-1498049794561-7780e7231661.webp' },
	{ name: 'Retail chains', image: '/photo-1567401893414-76b7b1e5a7a5.webp' },
	{ name: 'Food & beverage', image: '/photo-1504674900247-0877df9cc836.webp' },
	{ name: 'Healthcare', image: '/images.jpg' },
	{ name: 'Footwear', image: '/photo-1542291026-7eec264c27ff.webp' },
];

export default function Industries() {
	return (
		<section id="industries" className="bg-[#f7f5ef] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
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
					{industries.map(({ name, image }, index) => (
						<Reveal key={name} delay={index * 70} className="border-b border-r border-[#c6c5c5]">
							<div className="group relative flex min-h-36 flex-col justify-end overflow-hidden p-6 transition-colors duration-300 hover:bg-[#febf41] sm:min-h-44 sm:p-7">
								<div className="absolute inset-0">
									<Image src={image} alt={name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw" className="object-cover opacity-30 transition-opacity duration-300 group-hover:opacity-15" />
								</div>
								<div className="relative z-10 items-end justify-between sm:flex">
									<span className="text-xl font-semibold leading-tight text-[#1c1c1b]">{name}</span>
									<span className="mt-2 block text-sm text-[#a27500] transition-transform duration-300 group-hover:translate-x-1 sm:mt-0">0{index + 1}</span>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}