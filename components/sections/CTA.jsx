import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function CTA() {
	return (
		<section id="contact" className="bg-[#febf41] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
			<div className="mx-auto max-w-7xl">
				<Reveal><p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#824e00]">Let&apos;s build something amazing</p><h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-[#1c1c1b] sm:text-6xl lg:text-7xl">Your next chapter starts here.</h2></Reveal>
				<div className="mt-14 grid gap-10 border-t border-[#824e00]/25 pt-8 md:grid-cols-3">
					<Reveal delay={100}><div className="flex gap-3"><Mail className="mt-1 text-[#824e00]" size={20} /><div><p className="mb-1 text-sm text-[#824e00]">Email</p><a className="font-semibold text-[#1c1c1b]" href="mailto:sales@hydrixs.com">sales@hydrixs.com</a></div></div></Reveal>
					<Reveal delay={180}><div className="flex gap-3"><Phone className="mt-1 text-[#824e00]" size={20} /><div><p className="mb-1 text-sm text-[#824e00]">India / UAE</p><p className="font-semibold text-[#1c1c1b]">+91 83099 33090<br />+971 50 269 6765</p></div></div></Reveal>
					<Reveal delay={260}><div className="flex gap-3"><MapPin className="mt-1 text-[#824e00]" size={20} /><div><p className="mb-1 text-sm text-[#824e00]">Location</p><p className="font-semibold text-[#1c1c1b]">Hyderabad, India</p></div></div></Reveal>
				</div>
				<Reveal delay={320}><div className="mt-14 flex flex-col items-start gap-3 sm:flex-row"><a href="mailto:sales@hydrixs.com" className="inline-flex items-center gap-3 rounded-full bg-[#1c1c1b] px-7 py-4 font-semibold text-[#f7f5ef] transition-transform duration-300 hover:-translate-y-1">Request a consultation <ArrowUpRight size={18} /></a><a href="https://wa.me/918309933090?text=Hi%20HydrixLabs%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border-2 border-[#1c1c1b]/25 px-7 py-4 font-semibold text-[#1c1c1b] transition-transform duration-300 hover:-translate-y-1 hover:bg-[#25d366] hover:text-white"><MessageCircle size={18} /> WhatsApp us</a></div></Reveal>
			</div>
		</section>
	);
}
