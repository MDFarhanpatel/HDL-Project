'use client';

import { Play, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const sliderImages = [
	'/amazon-banner.jpg',
	'/appdev.jpg',
	'/meet.jpg',
	'/PIM.jpg',
	'/shopify-banner.jpg',
];

export default function Hero() {
	const [currentImage, setCurrentImage] = useState(0);
	const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
	const [smoothPos, setSmoothPos] = useState({ x: -200, y: -200 });
	const sectionRef = useRef(null);
	const animationRef = useRef(null);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % sliderImages.length);
		}, 2000);
		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (sectionRef.current) {
				const rect = sectionRef.current.getBoundingClientRect();
				setMousePos({
					x: e.clientX - rect.left,
					y: e.clientY - rect.top,
				});
			}
		};

		const section = sectionRef.current;
		if (section) {
			section.addEventListener('mousemove', handleMouseMove);
			return () => section.removeEventListener('mousemove', handleMouseMove);
		}
	}, []);

	useEffect(() => {
		const animate = () => {
			setSmoothPos((prev) => ({
				x: prev.x + (mousePos.x - prev.x) * 0.15,
				y: prev.y + (mousePos.y - prev.y) * 0.15,
			}));
			animationRef.current = requestAnimationFrame(animate);
		};
		animationRef.current = requestAnimationFrame(animate);
		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, [mousePos]);

	return (
		<section ref={sectionRef} id="top" className="relative min-h-screen overflow-hidden bg-[#f7f5ef] pt-20">
			{/* Grid lines background */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(213,169,0,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(213,169,0,0.12)_1px,transparent_1px)] bg-size-[50px_50px]" />

			{/* Floating gradient orbs */}
			<div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-[#febf41]/30 blur-3xl opacity-60 animate-pulse" />
			<div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-[#d5a900]/25 blur-3xl opacity-50 animate-pulse" />

			{/* Mouse-following spotlight - larger and more visible */}
			<div
				className="pointer-events-none absolute rounded-full will-change-transform"
				style={{
					width: '400px',
					height: '400px',
					transform: `translate3d(${smoothPos.x - 200}px, ${smoothPos.y - 200}px, 0)`,
					background: 'radial-gradient(circle, rgba(255,191,65,0.5) 0%, rgba(255,191,65,0.25) 30%, rgba(213,169,0,0.1) 50%, transparent 70%)',
				}}
			/>

			{/* Secondary soft glow - more visible */}
			<div
				className="pointer-events-none absolute rounded-full blur-2xl will-change-transform"
				style={{
					width: '280px',
					height: '280px',
					transform: `translate3d(${smoothPos.x - 140}px, ${smoothPos.y - 140}px, 0)`,
					background: 'radial-gradient(circle, rgba(255,191,65,0.4) 0%, rgba(213,169,0,0.15) 50%, transparent 70%)',
				}}
			/>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					{/* Left Content */}
					<div className="space-y-6 sm:space-y-8 z-10">
						{/* Badge */}
						<div className="inline-flex items-center gap-2 rounded-full border border-[#e2b23e]/50 bg-[#febf41]/15 px-4 py-2">
							<span className="h-2 w-2 rounded-full bg-[#febf41] animate-pulse" />
							<span className="text-sm font-medium text-[#824e00]">We&apos;re live and ready</span>
						</div>

						{/* Headline */}
						<div className="space-y-4">
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
								<span className="block bg-linear-to-r from-[#824e00] via-[#febf41] to-[#575757] bg-clip-text text-transparent animate-pulse">
									Taking Local Businesses Digital
								</span>
							</h1>

							<p className="text-lg sm:text-xl text-[#575757] max-w-xl leading-relaxed">
								Helping Brands Scale Through Shopify, Amazon &amp; AI-Powered Commerce
							</p>
						</div>

						{/* Features */}
						<ul className="space-y-3 pt-4">
							<li className="flex items-center gap-3">
								<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#febf41]">
									<svg className="h-3 w-3 text-[#1c1c1b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
									</svg>
								</span>
								<span className="text-base font-medium text-[#575757]">Official Shopify Partner</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#febf41]">
									<svg className="h-3 w-3 text-[#1c1c1b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
									</svg>
								</span>
								<span className="text-base font-medium text-[#575757]">Amazon SPN Partner</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#febf41]">
									<svg className="h-3 w-3 text-[#1c1c1b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
									</svg>
								</span>
								<span className="text-base font-medium text-[#575757]">AI Powered PIM</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#febf41]">
									<svg className="h-3 w-3 text-[#1c1c1b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
									</svg>
								</span>
								<span className="text-base font-medium text-[#575757]">Mobile App Development</span>
							</li>
						</ul>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row gap-4 pt-4">
							<button className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#1c1c1b] to-[#575757] px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#1c1c1b]/25 active:scale-95">
								Get Started
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
							</button>

							<a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#c6c5c5] px-8 py-4 font-semibold text-[#575757] transition-all duration-300 hover:border-[#a2a1a1] hover:bg-white/60 active:scale-95">
								<Play className="w-5 h-5" />
								Watch Demo
							</a>
						</div>
					</div>

					{/* Right Image Slider */}
					<div className="relative z-10 h-full min-h-96 lg:min-h-screen flex items-center">
						<div className="w-full space-y-4">
							<div className="relative group">
								<div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-[#febf41]/35 via-[#6e6e6f]/25 to-[#febf41]/35 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

								<div className="relative aspect-video overflow-hidden rounded-3xl border border-[#575757]/40 bg-[#1c1c1b] shadow-2xl">
									{sliderImages.map((src, index) => (
										<Image
											key={src}
											src={src}
											alt={`HydrixLabs showcase ${index + 1}`}
											fill
											sizes="(max-width: 1024px) 100vw, 50vw"
											priority={index === 0}
											className="object-cover transition-opacity duration-700"
											style={{ opacity: currentImage === index ? 1 : 0 }}
										/>
									))}
									<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#1c1c1b]/35 to-transparent" />
									<div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/20 bg-[#1c1c1b]/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
										HydrixLabs showcase
									</div>
								</div>

								<div className="mt-4 flex justify-center gap-2">
									{sliderImages.map((_, index) => (
										<button
											key={index}
											onClick={() => setCurrentImage(index)}
											className={`h-2 w-2 rounded-full transition-all duration-300 ${currentImage === index ? 'bg-[#febf41] w-6' : 'bg-gray-400 hover:bg-gray-600'}`}
											aria-label={`Go to slide ${index + 1}`}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom gradient divider */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent" />
		</section>
	);
}

