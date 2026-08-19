import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="bg-[#1c1c1b] px-4 py-10 text-[#c6c5c5] sm:px-6 lg:px-8">
			<div className="mx-auto flex max-w-7xl flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-start md:justify-between">
				<div className="flex items-center gap-3"><Image src="/hdl-logo-white.svg" alt="HydrixLabs" width={44} height={44} className="h-11 w-11 object-contain" /><span className="text-2xl font-bold"><span className="text-[#f7f5ef]">Hydrix</span><span className="text-[#febf41]">Labs</span></span></div>
				<div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm sm:gap-x-12"><a href="#services" className="inline-flex min-h-11 items-center px-1 transition-colors hover:text-[#febf41]">Services</a><a href="#about" className="inline-flex min-h-11 items-center px-1 transition-colors hover:text-[#febf41]">About</a><a href="#portfolio" className="inline-flex min-h-11 items-center px-1 transition-colors hover:text-[#febf41]">Portfolio</a><a href="#contact" className="inline-flex min-h-11 items-center px-1 transition-colors hover:text-[#febf41]">Contact</a></div>
			</div>
			<div className="mx-auto flex max-w-7xl flex-col gap-2 pt-6 text-xs text-[#6e6e6f] sm:flex-row sm:justify-between"><span>© 2026 HydrixLabs. All rights reserved.</span><span>Shopify Plus · Amazon SPN · AI-powered PIM</span></div>
		</footer>
	);
}
