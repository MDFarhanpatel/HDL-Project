import Image from 'next/image';
import Reveal from '@/components/Reveal';

export default function About() {
	return (
		<section className="bg-[#f7f5ef] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal><div className="text-center"><p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#d5a900]">Message from co-founder</p><h2 className="text-4xl font-medium tracking-tight text-[#1c1c1b] sm:text-5xl">Building Technology. Building People.</h2></div></Reveal>
				<div className="mx-auto mt-16 grid max-w-5xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
					<Reveal><article className="flex min-h-128 flex-col justify-between rounded-3xl bg-[#292929] p-8 text-[#f7f5ef] sm:p-12"><p className="max-w-2xl text-lg leading-10">HydrixLabs is built on the belief that great ideas come from passionate and ambitious people. We are creating an environment where young talent can learn, innovate, and work on real-world digital transformation projects from day one. Our goal is not only to build technology solutions but also to build future leaders who will shape the next generation of digital commerce, innovation, and mobile application development.</p><div className="flex items-center justify-between border-t border-white/20 pt-6"><span className="text-sm font-semibold text-[#febf41]">Co-Founder</span><span className="flex gap-2"><i className="h-3 w-3 rounded-full bg-white" /><i className="h-3 w-3 rounded-full bg-[#d5a900]" /></span></div></article></Reveal>
					<Reveal delay={120}><div className="relative min-h-128 overflow-hidden rounded-3xl bg-[#d5a900]"><Image src="/meet.jpg" alt="HDL team working together" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" /><div className="absolute inset-0 bg-[#1c1c1b]/10" /></div></Reveal>
				</div>
			</div>
		</section>
	);
}
