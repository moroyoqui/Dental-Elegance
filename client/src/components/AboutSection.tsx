import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, Monitor } from "lucide-react";
import founderImage from "@assets/generated_images/founder_dentist_portrait.png";

const stats = [
  {
    icon: Calendar,
    value: "+20",
    label: "Años de experiencia",
  },
  {
    icon: MapPin,
    value: "3",
    label: "Sucursales en Guaymas",
  },
  {
    icon: Users,
    value: "+15,000",
    label: "Pacientes atendidos",
  },
  {
    icon: Monitor,
    value: "Digital",
    label: "Tecnología de diseño de sonrisa",
  },
];

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="py-20 md:py-28 bg-background"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div>
              <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">
                Sobre Nosotros
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
                data-testid="text-about-title"
              >
                Más de dos décadas transformando sonrisas
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p data-testid="text-about-history-1">
                Fundada por el Dr. Luis Javier Gaxiola el 19 de agosto de 2002,
                LG Odontología Estética Integral nació con la visión de ofrecer
                atención dental de la más alta calidad en Guaymas, Sonora.
              </p>
              <p data-testid="text-about-history-2">
                Con más de 20 años brindando atención odontológica integral,
                hemos crecido hasta contar con tres sucursales, siempre
                manteniendo nuestro compromiso con la excelencia y el trato
                personalizado.
              </p>
              <p data-testid="text-about-history-3">
                Nuestro enfoque se centra en la prevención, restauración y
                mejora de la salud y estética bucal, utilizando tecnología
                avanzada y contando con un equipo comprometido con el bienestar,
                seguridad y satisfacción de cada paciente.
              </p>
            </div>

            <Card className="p-6 bg-accent/50 border-gold/20">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Nuestra Misión
              </h3>
              <p
                className="text-muted-foreground italic"
                data-testid="text-about-mission"
              >
                "Brindar atención odontológica integral y especializada,
                combinando ciencia, tecnología y trato humano para mejorar la
                salud, estética y bienestar de nuestros pacientes, ofreciendo
                diagnósticos precisos, tratamientos personalizados y una
                experiencia clínica confiable, ética y profesional."
              </p>
            </Card>

            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Nuestra Filosofía
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Odontología que combina expertise técnico + sensibilidad
                    humana + acompañamiento constante
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Claridad sobre diagnóstico, alternativas de tratamiento y
                    proceso de recuperación
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Cada visita debe sentirse agradable, eficiente y
                    profesional, con comunicación continua
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <Card
              className="overflow-hidden bg-card border-border"
              data-testid="card-founder"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={founderImage}
                  alt="Dr. Luis Javier Gaxiola - Fundador"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl font-semibold text-ivory">
                    Dr. Luis Javier Gaxiola
                  </h3>
                  <p className="text-gold">Fundador y Director General</p>
                  <p className="text-ivory/70 text-sm mt-2">
                    Más de 20 años de experiencia en odontología estética
                    integral, dedicado a transformar sonrisas con excelencia y
                    calidez humana.
                  </p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-5 bg-card border-border text-center hover-elevate"
                  data-testid={`card-stat-${index}`}
                >
                  <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="font-serif text-2xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}