import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function CTA() {
	return (
		<section id="contact" className="bg-[#f7f5ef] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
			<div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
				<Reveal>
					<div>
						<p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#a27500]">Let&apos;s build something amazing</p>
						<h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#1c1c1b] sm:text-6xl">Let&apos;s build something amazing.</h2>
						<p className="mt-6 max-w-xl text-lg leading-8 text-[#6e6e6f]">Whether you&apos;re launching a Shopify store, scaling on Amazon, implementing our AI-powered PIM, or developing a mobile application, HDL is ready to help.</p>
						<div className="mt-12 space-y-7 border-t border-[#d8d6d6] pt-7">
							<div className="flex gap-3"><Mail className="mt-1 text-[#a27500]" size={19} /><div><p className="mb-1 text-sm text-[#a27500]">Email</p><a className="font-medium text-[#575757]" href="mailto:sales@hydrixs.com">sales@hydrixs.com</a></div></div>
							<div className="flex gap-3"><Phone className="mt-1 text-[#a27500]" size={19} /><div><p className="mb-1 text-sm text-[#a27500]">India / UAE</p><p className="font-medium leading-7 text-[#575757]">+91 83099 33090<br />+971 50 269 6765</p></div></div>
							<div className="flex gap-3"><MapPin className="mt-1 text-[#a27500]" size={19} /><div><p className="mb-1 text-sm text-[#a27500]">Location</p><p className="font-medium text-[#575757]">Hyderabad, India</p></div></div>
						</div>
					</div>
				</Reveal>
				<Reveal delay={120}>
					<form action="mailto:sales@hydrixs.com" method="post" encType="text/plain" className="space-y-4">
						<input aria-label="Your name" name="name" required placeholder="Your name" className="h-14 w-full border border-[#a2a1a1] bg-white px-4 text-[#1c1c1b] outline-none transition-colors placeholder:text-[#6e6e6f] focus:border-[#febf41]" />
						<input aria-label="Email address" type="email" name="email" required placeholder="Email address" className="h-14 w-full border border-[#a2a1a1] bg-white px-4 text-[#1c1c1b] outline-none transition-colors placeholder:text-[#6e6e6f] focus:border-[#febf41]" />
						<input aria-label="Company name" name="company" placeholder="Company name" className="h-14 w-full border border-[#a2a1a1] bg-white px-4 text-[#1c1c1b] outline-none transition-colors placeholder:text-[#6e6e6f] focus:border-[#febf41]" />
						<input aria-label="Phone number" name="phone" placeholder="Phone number" className="h-14 w-full border border-[#a2a1a1] bg-white px-4 text-[#1c1c1b] outline-none transition-colors placeholder:text-[#6e6e6f] focus:border-[#febf41]" />
						<textarea aria-label="Project details" name="message" required placeholder="Tell us about your project..." className="min-h-36 w-full resize-y border border-[#a2a1a1] bg-white px-4 py-4 text-[#1c1c1b] outline-none transition-colors placeholder:text-[#6e6e6f] focus:border-[#febf41]" />
						<button type="submit" className="inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#febf41] px-6 font-semibold text-[#1c1c1b] transition-colors hover:bg-[#eab02e]">Request consultation <ArrowUpRight size={18} /></button>
						<a href="https://wa.me/918309933090?text=Hi%20HydrixLabs%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#575757] hover:text-[#1c1c1b]"><MessageCircle size={17} /> Or message us on WhatsApp</a>
					</form>
				</Reveal>
			</div>
		</section>
	);
}
