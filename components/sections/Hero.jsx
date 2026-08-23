'use client';

import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-linear-to-b from-[#f7f5ef] via-[#fbfaf6] to-[#eeeae0] pt-20 perspective-[1000px]">
      {/* 3D Animated background elements */}
      <div className="absolute left-0 top-0 h-125 w-125 rounded-full bg-[#febf41]/20 blur-3xl opacity-70 animate-pulse origin-center transform rotate-x-12 rotate-y-12 transition-all duration-700 hover:scale-110 hover:brightness-125">
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#febf41]/30 via-transparent to-[#febf41]/10 animate-spin-slow" />
      </div>
      <div className="absolute bottom-20 right-0 h-125 w-125 rounded-full bg-[#6e6e6f]/20 blur-3xl opacity-60 animate-pulse delay-1000 origin-center transform -rotate-x-12 -rotate-y-12 transition-all duration-700 hover:scale-110 hover:brightness-125">
        <div className="absolute inset-0 rounded-full bg-linear-to-l from-[#6e6e6f]/30 via-transparent to-[#6e6e6f]/10 animate-spin-reverse" />
      </div>
      {/* Additional floating 3D elements */}
      <div className="absolute left-1/4 top-1/3 h-32 w-32 rounded-full bg-linear-to-r from-[#824e00]/30 to-[#febf41]/30 blur-2xl opacity-50 transform rotate-x-45 rotate-y-45 transition-all duration-500 hover:rotate-180 hover:scale-150" />
      <div className="absolute right-1/4 bottom-1/3 h-40 w-40 rounded-full bg-linear-to-r from-[#575757]/30 to-[#6e6e6f]/30 blur-2xl opacity-40 transform -rotate-x-30 -rotate-y-30 transition-all duration-500 hover:rotate-180 hover:scale-150" />
      {/* Mouse-following gradient orb */}
      <div
        id="mouse-orb"
        className="absolute h-150 w-150 rounded-full bg-linear-to-r from-[#febf41]/25 via-[#824e00]/15 to-[#6e6e6f]/25 blur-3xl opacity-60 transition-all duration-100 ease-out">
      </div>

      {/* Glowing grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[50px_50px] transform rotate-x-15 transition-transform duration-1000 hover:rotate-x-5" />

      {/* Metallic texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] transform transition-transform duration-1000 hover:scale-110" />

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

              <a href="#hero-video" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#c6c5c5] px-8 py-4 font-semibold text-[#575757] transition-all duration-300 hover:border-[#a2a1a1] hover:bg-white/60 active:scale-95">
                <Play className="w-5 h-5" />
                Watch Demo
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

          {/* Right Video Screen */}
          <div className="relative z-10 h-full min-h-96 lg:min-h-screen flex items-center">
            <div className="w-full space-y-4">
              {/* Video Screen Frame */}
              <div className="relative group">
                {/* Outer glow effect */}
                <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-[#febf41]/35 via-[#6e6e6f]/25 to-[#febf41]/35 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Main video container */}
                <div className="relative overflow-hidden rounded-3xl border border-[#575757]/40 bg-[#1c1c1b] shadow-2xl">
                  <video
                    id="hero-video"
                    className="aspect-video w-full object-cover"
                    src="/HDL_enhanced_fixed.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="HydrixLabs digital commerce showcase"
                  />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#1c1c1b]/35 to-transparent" />
                  <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/20 bg-[#1c1c1b]/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    HydrixLabs showcase
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

