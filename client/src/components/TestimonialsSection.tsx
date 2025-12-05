import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { SiGoogle } from "react-icons/si";

type Testimonial = {
  id: number;
  name: string;
  initials: string;
  rating: number;
  text: string;
  date: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María G.",
    initials: "MG",
    rating: 5,
    text: "Excelente atención desde el primer momento. El Dr. Gaxiola me explicó todo el proceso de mi diseño de sonrisa con mucha paciencia. Estoy encantada con los resultados.",
    date: "Hace 2 semanas",
  },
  {
    id: 2,
    name: "Roberto S.",
    initials: "RS",
    rating: 5,
    text: "Llevé a mis hijos por primera vez y la verdad quedé muy sorprendido. El trato fue increíble, los niños salieron felices y sin miedo. Muy recomendados para atención pediátrica.",
    date: "Hace 1 mes",
  },
  {
    id: 3,
    name: "Ana Patricia L.",
    initials: "AL",
    rating: 5,
    text: "Me hice un blanqueamiento y quedé muy satisfecha. El proceso fue rápido, sin dolor y los resultados fueron notorios desde la primera sesión. Gracias por su profesionalismo.",
    date: "Hace 1 mes",
  },
  {
    id: 4,
    name: "Carlos M.",
    initials: "CM",
    rating: 5,
    text: "Después de años con miedo al dentista, encontré en LG Odontología un equipo que me hizo sentir cómodo. Mi experiencia con los implantes fue mucho mejor de lo que esperaba.",
    date: "Hace 2 meses",
  },
  {
    id: 5,
    name: "Laura V.",
    initials: "LV",
    rating: 5,
    text: "Las instalaciones son de primer nivel, muy modernas y limpias. La atención es personalizada y siempre te explican cada paso del tratamiento. 100% recomendados.",
    date: "Hace 3 meses",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-gold fill-gold" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonios"
      className="py-20 md:py-28 bg-card/50"
      data-testid="section-testimonials"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">
            Testimonios
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4"
            data-testid="text-testimonials-title"
          >
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <SiGoogle className="w-5 h-5" />
            <div className="flex">{renderStars(5)}</div>
            <span className="text-sm">4.9 en Google Reviews</span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card
                    className="p-8 md:p-10 bg-card border-border text-center"
                    data-testid={`card-testimonial-${testimonial.id}`}
                  >
                    <Avatar className="w-16 h-16 mx-auto mb-4 bg-accent">
                      <AvatarFallback className="bg-gold/20 text-gold font-semibold text-lg">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex justify-center gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="text-lg md:text-xl text-foreground mb-6 font-light leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.date}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-background/80 backdrop-blur-sm"
            onClick={goToPrevious}
            data-testid="button-testimonial-prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-background/80 backdrop-blur-sm"
            onClick={goToNext}
            data-testid="button-testimonial-next"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-gold" : "bg-muted"
              }`}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              aria-label={`Ir al testimonio ${index + 1}`}
              data-testid={`button-testimonial-dot-${index}`}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="https://g.page/r/lg-odontologia/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-google-reviews"
          >
            <SiGoogle className="w-4 h-4" />
            Ver más opiniones en Google
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="hidden sm:block text-muted-foreground">|</span>
          <a
            href="https://g.page/r/lg-odontologia/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            data-testid="link-leave-review"
          >
            Déjanos tu reseña
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}