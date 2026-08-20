'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';

const heroSlides = [
  {
    image: '/shopify-banner.jpg',
    eyebrow: 'Commerce systems',
    title: 'Storefronts that move at the speed of your brand.',
    tag: 'Shopify Plus',
  },
  {
    image: '/amazon-banner.jpg',
    eyebrow: 'Marketplace growth',
    title: 'Turn global reach into repeatable revenue.',
    tag: 'Amazon SPN',
  },
  {
    image: '/PIM.jpg',
    eyebrow: 'Product intelligence',
    title: 'One source of truth for every product moment.',
    tag: 'AI-powered PIM',
  },
  {
    image: '/appdev.jpg',
    eyebrow: 'Digital experiences',
    title: 'Useful mobile experiences people come back to.',
    tag: 'Mobile applications',
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showSlide = (index) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length);
  };

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#f7f5ef] via-[#fbfaf6] to-[#eeeae0] pt-20">
      {/* Animated background elements */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#febf41]/15 blur-3xl opacity-70 animate-pulse" />
      <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-[#6e6e6f]/15 blur-3xl opacity-60 animate-pulse delay-1000" />
      
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
                <span className="block">Transform Your</span>
                <span className="block bg-linear-to-r from-[#824e00] via-[#febf41] to-[#575757] bg-clip-text text-transparent animate-pulse">
                  Digital Commerce
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
                Powerful solutions to scale your business faster. Build, launch, and grow with our comprehensive technology platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#1c1c1b] to-[#575757] px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#1c1c1b]/25 active:scale-95">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <a href="#hero-slider" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#c6c5c5] px-8 py-4 font-semibold text-[#575757] transition-all duration-300 hover:border-[#a2a1a1] hover:bg-white/60 active:scale-95">
                <Play className="w-5 h-5" />
                Explore our work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-4 border-t border-gray-200/50 pt-8 min-[400px]:grid-cols-3">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-600 min-[400px]:whitespace-nowrap">Active Users</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">$50M+</p>
                <p className="text-sm text-gray-600 min-[400px]:whitespace-nowrap">GMV Processed</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">150+</p>
                <p className="text-sm text-gray-600 min-[400px]:whitespace-nowrap">Enterprise Clients</p>
              </div>
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="relative z-10 h-full min-h-96 lg:min-h-screen flex items-center">
            <div className="w-full space-y-4">
              <div
                id="hero-slider"
                className="group relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="absolute -inset-3 rounded-[2rem] bg-linear-to-br from-[#febf41]/35 via-transparent to-[#575757]/20 blur-2xl transition-opacity duration-500 group-hover:opacity-90" />

                <div className="relative overflow-hidden rounded-[2rem] border border-[#575757]/35 bg-[#1c1c1b] p-2 shadow-2xl shadow-[#1c1c1b]/20">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#f7f5ef]">
                    <Image
                      key={slide.image}
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={activeSlide === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-5 transition-opacity duration-500 sm:p-8"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#1c1c1b]/75 via-transparent to-transparent" />
                    <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white sm:inset-x-8 sm:bottom-8">
                      <div className="max-w-xs">
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#febf41]">{slide.eyebrow}</p>
                        <p className="text-lg font-semibold leading-tight sm:text-2xl">{slide.title}</p>
                      </div>
                      <span className="shrink-0 rounded-full border border-white/25 bg-[#1c1c1b]/45 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] backdrop-blur-sm">{slide.tag}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-3 sm:px-3">
                    <div className="flex items-center gap-1.5" aria-label="Choose a slide">
                      {heroSlides.map((item, index) => (
                        <button
                          key={item.tag}
                          type="button"
                          onClick={() => showSlide(index)}
                          aria-label={`Show ${item.tag} slide`}
                          aria-current={activeSlide === index ? 'true' : undefined}
                          className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === index ? 'w-8 bg-[#febf41]' : 'w-1.5 bg-white/35 hover:bg-white/70'}`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      <button type="button" onClick={() => showSlide(activeSlide - 1)} aria-label="Previous slide" className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10">
                        <ArrowLeft size={17} />
                      </button>
                      <button type="button" onClick={() => showSlide(activeSlide + 1)} aria-label="Next slide" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#febf41] text-[#1c1c1b] transition-transform hover:scale-105">
                        <ArrowRight size={17} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom stats bar */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="bg-gray-50/50 border border-gray-200/50 rounded-xl p-3 backdrop-blur-sm">
                    <p className="text-xs text-gray-600">Real-time Analytics</p>
                    <p className="text-lg font-bold text-gray-900">99.9%</p>
                  </div>
                  <div className="bg-gray-50/50 border border-gray-200/50 rounded-xl p-3 backdrop-blur-sm">
                    <p className="text-xs text-gray-600">Response Time</p>
                    <p className="text-lg font-bold text-gray-900">{"<"}50ms</p>
                  </div>
                  <div className="bg-gray-50/50 border border-gray-200/50 rounded-xl p-3 backdrop-blur-sm">
                    <p className="text-xs text-gray-600">Uptime SLA</p>
                    <p className="text-lg font-bold text-gray-900">99.99%</p>
                  </div>
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
