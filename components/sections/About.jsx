import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function About() {
	return (
		<section className="bg-[#1c1c1b] px-4 py-24 text-[#f7f5ef] sm:px-6 lg:px-8 lg:py-32">
			<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
				<Reveal><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#febf41]">Building technology. Building people.</p></Reveal>
				<Reveal delay={120}>
					<h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">World-class digital solutions should feel within reach.</h2>
					  <div className="mt-8 flex flex-col justify-between gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-end"><p className="max-w-xl text-lg leading-8 text-[#c6c5c5]">We simplify technology adoption for startups, retailers, manufacturers, and growing enterprises, so your team can focus on growth while we build what powers it.</p><a href="#contact" className="inline-flex min-h-11 shrink-0 items-center gap-2 px-1 font-semibold text-[#febf41]">Meet your technology partner <ArrowUpRight size={18} /></a></div>
				</Reveal>
			</div>
		</section>
	);
}
