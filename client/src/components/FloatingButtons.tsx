import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:hidden">
      <a
        href="https://wa.me/526221234567?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Contactar por WhatsApp"
        data-testid="button-floating-whatsapp"
      >
        <SiWhatsapp className="w-6 h-6" />
      </a>
      <a
        href="tel:+526221234567"
        className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-background shadow-lg hover:bg-gold-light transition-colors"
        aria-label="Llamar ahora"
        data-testid="button-floating-call"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}