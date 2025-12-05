import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/elegant_smile_hero_image.png";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="animate-fade-in-up">
          <h1
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-ivory leading-tight mb-6"
            data-testid="text-hero-title"
          >
            Un equipo, una misión:{" "}
            <span className="text-gold-gradient">Tu Mejor Sonrisa</span>
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl text-ivory/90 mb-4 font-light"
            data-testid="text-hero-subtitle"
          >
            Odontología estética integral con trato humano y más de 20 años de
            experiencia en Guaymas
          </p>

          <p
            className="text-base sm:text-lg text-warmGray max-w-3xl mx-auto mb-10"
            data-testid="text-hero-description"
          >
            Combinamos expertise técnico, sensibilidad humana y acompañamiento
            constante para que te sientas tranquilo desde el primer contacto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("#cita")}
              className="text-base px-8 py-6"
              data-testid="button-hero-cta-primary"
            >
              Agenda tu cita
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#tratamientos")}
              className="text-base px-8 py-6 bg-white/10 backdrop-blur-sm border-ivory/30 text-ivory hover:bg-white/20"
              data-testid="button-hero-cta-secondary"
            >
              Ver tratamientos
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("#nosotros")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/70 hover:text-ivory transition-colors animate-bounce-slow"
        aria-label="Scroll hacia abajo"
        data-testid="button-scroll-indicator"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}