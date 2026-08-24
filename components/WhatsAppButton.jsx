import { MessageCircle } from 'lucide-react';

const whatsappUrl = 'https://wa.me/918309933090?text=Hi%20HydrixLabs%2C%20I%27d%20like%20to%20discuss%20a%20project.';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with HydrixLabs on WhatsApp"
      className="group fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(149,70%,45%)] text-white shadow-[0_8px_24px_hsl(149,70%,45%/0.3)] hover:shadow-[0_12px_28px_hsl(149,70%,45%/0.4)] transition-all duration-400 hover:-translate-y-1 hover:bg-[hsl(149,70%,40%)] sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-3 backdrop-blur-sm bg-opacity-90 hover:bg-opacity-95"
    >
      <MessageCircle size={23} className="text-white transition-transform duration-400 transform group-hover:scale-110 group-hover:rotate-6" aria-hidden="true" />
      <span className="hidden font-semibold sm:inline">WhatsApp us</span>
    </a>
  );
}