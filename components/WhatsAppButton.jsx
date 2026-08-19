import { MessageCircle } from 'lucide-react';

const whatsappUrl = 'https://wa.me/918309933090?text=Hi%20HydrixLabs%2C%20I%27d%20like%20to%20discuss%20a%20project.';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with HydrixLabs on WhatsApp"
      className="group fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-[#1c1c1b]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ebe5d] sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3"
    >
      <MessageCircle size={23} />
      <span className="hidden font-semibold sm:inline">WhatsApp us</span>
    </a>
  );
}