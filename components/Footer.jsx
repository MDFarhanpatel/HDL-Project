import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="bg-[#1c1c1b] px-4 py-16 text-[#c6c5c5] sm:px-6 lg:px-8 lg:py-20">
			<div className="mx-auto grid max-w-7xl gap-12 border-b border-white/15 pb-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
				<div>
					<a href="#top" className="inline-flex items-center gap-3" aria-label="HydrixLabs home"><Image src="/hdl-logo-white.svg" alt="HydrixLabs" width={72} height={72} className="h-16 w-16 object-contain" /><span className="text-2xl font-bold"><span className="text-[#f7f5ef]">Hydrix</span><span className="text-[#febf41]">Labs</span></span></a>
					<p className="mt-7 max-w-sm text-sm leading-7 text-[#c6c5c5]">HDL helps businesses transform through Shopify Plus, Amazon SPN, AI-powered PIM, mobile applications, and digital commerce.</p>
				</div>
				<div><h3 className="mb-5 text-sm font-semibold text-[#febf41]">Services</h3><div className="space-y-3 text-sm"><a className="block hover:text-[#febf41]" href="#services">Shopify Plus</a><a className="block hover:text-[#febf41]" href="#services">Amazon SPN</a><a className="block hover:text-[#febf41]" href="#services">PIM Platform</a><a className="block hover:text-[#febf41]" href="#services">Mobile Apps</a><a className="block hover:text-[#febf41]" href="#contact">Consulting</a></div></div>
				<div><h3 className="mb-5 text-sm font-semibold text-[#febf41]">Industries</h3><div className="space-y-3 text-sm"><a className="block hover:text-[#febf41]" href="#portfolio">Fashion</a><a className="block hover:text-[#febf41]" href="#portfolio">Footwear</a><a className="block hover:text-[#febf41]" href="#portfolio">Retail</a><a className="block hover:text-[#febf41]" href="#portfolio">Pharmaceutical</a><a className="block hover:text-[#febf41]" href="#portfolio">Manufacturing</a></div></div>
				<div><h3 className="mb-5 text-sm font-semibold text-[#febf41]">Contact</h3><div className="space-y-3 text-sm"><a className="block hover:text-[#febf41]" href="mailto:sales@hydrixs.com">sales@hydrixs.com</a><a className="block hover:text-[#febf41]" href="tel:+918309933090">+91 83099 33090</a><a className="block hover:text-[#febf41]" href="tel:+971502696765">+971 50 269 6765</a><a className="block hover:text-[#febf41]" href="#regions">Hyderabad · Dubai</a></div></div>
			</div>
			<div className="mx-auto flex max-w-7xl flex-col gap-3 pt-7 text-xs text-[#8d8c8c] sm:flex-row sm:items-center sm:justify-between"><span>© 2026 HydrixLabs. All rights reserved.</span><span>Shopify Plus · Amazon SPN · AI-powered PIM</span></div>
		</footer>
	);
}
