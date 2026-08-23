import Image from 'next/image';
import Reveal from '@/components/Reveal';

const projects = [
	{
		title: 'Fashion E-Commerce',
		category: 'Shopify Plus',
		image: '/shopify-banner.jpg',
	},
	{
		title: 'Amazon Marketplace',
		category: 'Amazon SPN',
		image: '/amazon-banner.jpg',
	},
	{
		title: 'AI-Powered PIM',
		category: 'Product Management',
		image: '/PIM.jpg',
	},
	{
		title: 'Mobile App',
		category: 'App Development',
		image: '/appdev.jpg',
	},
	{
		title: 'Retail Analytics',
		category: 'Analytics',
		image: '/meet.jpg',
	},
	{
		title: 'Digital Transformation',
		category: 'E-Commerce',
		image: '/images (1).jpg',
	},
];

export default function Portfolio() {
	return (
		<section id="portfolio" className="bg-[#f7f5ef] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
			<div className="mx-auto max-w-7xl">
				<Reveal>
					<div className="text-center">
						<p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#a27500]">Our Work</p>
						<h2 className="text-4xl font-semibold tracking-tight text-[#1c1c1b] sm:text-5xl">Featured Projects</h2>
						<p className="mx-auto mt-5 max-w-2xl text-lg text-[#575757]">Explore our latest work and success stories across industries.</p>
					</div>
				</Reveal>

				<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<Reveal key={project.title} delay={index * 100}>
							<article className="group relative overflow-hidden rounded-2xl bg-[#1c1c1b] shadow-xl transition-transform duration-300 hover:-translate-y-2">
								<div className="relative aspect-[4/3] overflow-hidden">
									<Image
										src={project.image}
										alt={project.title}
										fill
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
										className="object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-[#1c1c1b] via-[#1c1c1b]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
								</div>
								<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
									<span className="mb-2 inline-block rounded-full bg-[#febf41] px-3 py-1 text-xs font-semibold text-[#1c1c1b]">
										{project.category}
									</span>
									<h3 className="text-lg font-semibold text-[#f7f5ef]">{project.title}</h3>
								</div>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
