import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Sparkles, CheckCircle2 } from "lucide-react";
import beforeAfterImage from "@assets/generated_images/dental_before_after_comparison.png";

type Treatment = {
  name: string;
  description: string;
  requiresValuation?: boolean;
  premium?: boolean;
};

type Category = {
  id: string;
  name: string;
  treatments: Treatment[];
};

const categories: Category[] = [
  {
    id: "preventivos",
    name: "Preventivos",
    treatments: [
      {
        name: "Valoración y diagnóstico profesional",
        description:
          "Evaluación completa de tu salud bucal con tecnología de vanguardia para detectar problemas a tiempo.",
      },
      {
        name: "Limpiezas dentales",
        description:
          "Limpieza profunda profesional para eliminar sarro y placa, manteniendo tus dientes y encías saludables.",
      },
      {
        name: "Aplicación de flúor",
        description:
          "Fortalece el esmalte dental y previene caries en niños y adultos.",
      },
      {
        name: "Selladores dentales",
        description:
          "Protección preventiva para las muelas, especialmente recomendado para niños.",
      },
    ],
  },
  {
    id: "restaurativos",
    name: "Restaurativos y Prótesis",
    treatments: [
      {
        name: "Retiro de caries con resina",
        description:
          "Restauraciones estéticas del color de tus dientes para eliminar caries y recuperar la función.",
      },
      {
        name: "Extracciones dentales",
        description:
          "Extracción cuidadosa de piezas dentales con mínima molestia, para niños y adultos.",
      },
      {
        name: "Prótesis dentales",
        description:
          "Prótesis removibles o fijas personalizadas para recuperar tu sonrisa y función masticatoria.",
        requiresValuation: true,
      },
      {
        name: "Coronas dentales",
        description:
          "Fundas protectoras de porcelana o zirconia para dientes dañados o tratados con endodoncia.",
        requiresValuation: true,
      },
      {
        name: "Endodoncia",
        description:
          "Tratamiento de conducto para salvar dientes con infección o dolor, eliminando el nervio afectado.",
      },
    ],
  },
  {
    id: "estetica",
    name: "Estética Dental",
    treatments: [
      {
        name: "Blanqueamiento dental",
        description:
          "Aclara varios tonos tus dientes de forma segura y profesional para una sonrisa más brillante.",
      },
      {
        name: "Diseño de sonrisa",
        description:
          "Transformación completa de tu sonrisa utilizando tecnología digital y planificación personalizada.",
        requiresValuation: true,
        premium: true,
      },
      {
        name: "Carillas estéticas",
        description:
          "Láminas ultrafinas de porcelana para corregir forma, color y alineación de los dientes frontales.",
        requiresValuation: true,
        premium: true,
      },
      {
        name: "Contorneado dental",
        description:
          "Remodelado sutil de los dientes para mejorar su forma y proporciones.",
      },
    ],
  },
  {
    id: "ortodoncia",
    name: "Ortodoncia",
    treatments: [
      {
        name: "Ortodoncia con brackets",
        description:
          "Brackets metálicos o estéticos para corregir la posición de tus dientes de forma efectiva.",
        requiresValuation: true,
      },
      {
        name: "Retiro de brackets",
        description:
          "Remoción profesional de brackets con pulido y entrega de retenedores.",
      },
      {
        name: "Guardas dentales",
        description:
          "Protectores bucales personalizados para bruxismo, deportes o retención post-ortodoncia.",
      },
      {
        name: "Retenedores",
        description:
          "Aparatos fijos o removibles para mantener los resultados de tu tratamiento de ortodoncia.",
      },
    ],
  },
  {
    id: "implantes",
    name: "Implantes",
    treatments: [
      {
        name: "Implantes dentales",
        description:
          "Solución permanente y natural para reemplazar dientes perdidos con titanio de grado médico.",
        requiresValuation: true,
        premium: true,
      },
      {
        name: "Rehabilitación sobre implantes",
        description:
          "Coronas, puentes o prótesis completas soportadas por implantes para máxima estabilidad.",
        requiresValuation: true,
      },
      {
        name: "Injerto óseo",
        description:
          "Regeneración de hueso para pacientes que requieren mayor soporte antes de colocar implantes.",
        requiresValuation: true,
      },
    ],
  },
  {
    id: "odontopediatria",
    name: "Odontopediatría",
    treatments: [
      {
        name: "Atención infantil especializada",
        description:
          "Cuidado dental adaptado a las necesidades de los más pequeños, en un ambiente amigable y seguro.",
      },
      {
        name: "Extracciones pediátricas",
        description:
          "Extracción cuidadosa de dientes de leche cuando es necesario para la salud bucal del niño.",
      },
      {
        name: "Pulpotomía",
        description:
          "Tratamiento de nervio en dientes temporales para salvar la pieza y evitar dolor.",
      },
      {
        name: "Coronas pediátricas",
        description:
          "Coronas de acero o estéticas para proteger dientes de leche muy dañados.",
      },
    ],
  },
];

export default function TreatmentsSection() {
  const [activeTab, setActiveTab] = useState("preventivos");

  return (
    <section
      id="tratamientos"
      className="py-20 md:py-28 bg-card/50"
      data-testid="section-treatments"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">
            Nuestros Servicios
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4"
            data-testid="text-treatments-title"
          >
            Tratamientos y Servicios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de tratamientos dentales para cuidar tu
            salud bucal y transformar tu sonrisa.
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent mb-8 h-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2"
                data-testid={`tab-${category.id}`}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="mt-0"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.treatments.map((treatment, index) => (
                  <Card
                    key={index}
                    className={`p-6 bg-card border-border hover-elevate ${
                      treatment.premium ? "border-gold/30" : ""
                    }`}
                    data-testid={`card-treatment-${category.id}-${index}`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {treatment.name}
                      </h3>
                      {treatment.premium && (
                        <Badge
                          variant="secondary"
                          className="bg-gold/20 text-gold border-gold/30 flex-shrink-0"
                        >
                          <Sparkles className="w-3 h-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {treatment.description}
                    </p>
                    {treatment.requiresValuation && (
                      <div className="flex items-center gap-1.5 text-xs text-gold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Requiere valoración previa</span>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Card className="mt-12 p-6 md:p-8 bg-accent/30 border-gold/20 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-gold/20 text-gold border-gold/30">
                <Sparkles className="w-3 h-3 mr-1" />
                Resultados Premium
              </Badge>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Diseño de Sonrisa Digital
              </h3>
              <p className="text-muted-foreground mb-6">
                Utilizamos tecnología de vanguardia para diseñar tu sonrisa
                ideal antes de iniciar el tratamiento. Visualiza los resultados
                y toma decisiones informadas sobre tu transformación dental.
              </p>
              <Button
                variant="outline"
                className="border-gold/50 text-gold hover:bg-gold/10"
                data-testid="button-download-brochure"
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar brochure de tratamientos
              </Button>
            </div>
            <div className="relative">
              <img
                src={beforeAfterImage}
                alt="Antes y después de diseño de sonrisa"
                className="w-full rounded-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  Antes / Después
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}