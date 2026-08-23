'use client';

import { useEffect, useRef, useState } from 'react';
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

const serviceImages = services.map(({ image }) => image);

function PhoneFrame({ children }) {
	return (
		<div className="relative mx-auto h-100 w-58 rounded-4xl border-[5px] border-[#2b2b2b] bg-[#171717] p-1 shadow-[0_22px_35px_-18px_rgba(0,0,0,0.9)] sm:h-108 sm:w-58">
			<div className="relative h-full w-full overflow-hidden rounded-3xl bg-white">
				{children}
				<div className="absolute left-1/2 top-2 h-5 w-16 -translate-x-1/2 rounded-full bg-[#171717]" />
				<div className="absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-[#1c1c1b]/45 to-transparent" />
			</div>
			<div className="absolute bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-white/70" />
		</div>
	);
}

function ImageSliderPhone() {
	const [activeImage, setActiveImage] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveImage((current) => (current + 1) % serviceImages.length);
		}, 3000);
		return () => clearInterval(timer);
	}, []);

	return (
		<PhoneFrame>
			<Image
				src={serviceImages[activeImage]}
				alt="HDL digital commerce services"
				fill
				sizes="232px"
				className="object-contain transition-opacity duration-500"
			/>
		</PhoneFrame>
	);
}

function VideoPhone() {
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 1.5;
		}
	}, []);

	return (
		<PhoneFrame>
			<video
				ref={videoRef}
				data-lenis-prevent
				className="h-full w-full object-cover will-change-transform"
				src="/HDL_enhanced_fixed.mp4"
				autoPlay
				muted
				loop
				playsInline
				preload="metadata"
				aria-label="HDL digital commerce showcase"
			/>
		</PhoneFrame>
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

				<div className="mx-auto grid max-w-3xl gap-12 sm:grid-cols-2">
					<Reveal>
						<article className="group text-center sm:text-left">
							<ImageSliderPhone />
							<div className="mx-auto max-w-xs px-3 pt-7 sm:px-0">
								<h3 className="mb-3 text-xl font-semibold">Digital commerce suite</h3>
								<p className="leading-7 text-[#c6c5c5]">Shopify, Amazon, PIM, and mobile solutions working together.</p>
								<ArrowUpRight className="mx-auto mt-5 text-[#febf41] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
							</div>
						</article>
					</Reveal>
					<Reveal delay={120}>
						<article className="group text-center sm:text-left">
							<VideoPhone />
							<div className="mx-auto max-w-xs px-3 pt-7 sm:px-0">
								<h3 className="mb-3 text-xl font-semibold">HDL in action</h3>
								<p className="leading-7 text-[#c6c5c5]">See the people and technology behind every transformation.</p>
								<ArrowUpRight className="mx-auto mt-5 text-[#febf41] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
							</div>
						</article>
					</Reveal>
				</div>
			</div>
		</section>
	);
}