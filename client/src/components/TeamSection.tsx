import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart } from "lucide-react";
import founderImage from "@assets/generated_images/founder_dentist_portrait.png";
import femaleDentistImage from "@assets/generated_images/female_dentist_portrait.png";
import maleDentistImage from "@assets/generated_images/male_dentist_portrait.png";

type TeamMember = {
  id: number;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  certifications?: string[];
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Luis Javier Gaxiola",
    specialty: "Director General - Odontología Estética",
    bio: "Fundador de LG Odontología con más de 20 años de experiencia. Especialista en diseño de sonrisa y rehabilitación oral integral.",
    image: founderImage,
    certifications: ["UCLA", "NYU"],
  },
  {
    id: 2,
    name: "Dra. María Elena Rodríguez",
    specialty: "Endodoncia y Rehabilitación",
    bio: "Experta en tratamientos de conducto y restauraciones complejas. Enfoque gentil y meticuloso para procedimientos sensibles.",
    image: femaleDentistImage,
    certifications: ["UNAM"],
  },
  {
    id: 3,
    name: "Dr. Carlos Mendoza",
    specialty: "Implantología y Cirugía Oral",
    bio: "Especialista en implantes dentales y cirugía maxilofacial. Técnicas mínimamente invasivas para mejor recuperación.",
    image: maleDentistImage,
    certifications: ["Universidad de Barcelona"],
  },
  {
    id: 4,
    name: "Dra. Ana Patricia Vega",
    specialty: "Ortodoncia",
    bio: "Especialista en corrección de maloclusiones y alineación dental. Tratamientos personalizados para niños y adultos.",
    image: femaleDentistImage,
    certifications: ["ITESM"],
  },
  {
    id: 5,
    name: "Dr. Roberto Sánchez",
    specialty: "Odontopediatría",
    bio: "Dedicado a la atención dental infantil con un enfoque amable y paciente. Crea experiencias positivas para los más pequeños.",
    image: maleDentistImage,
    certifications: ["UABC"],
  },
  {
    id: 6,
    name: "Dra. Laura Castillo",
    specialty: "Estética Dental y Blanqueamiento",
    bio: "Especialista en carillas, blanqueamiento y diseño de sonrisa digital. Resultados naturales y armoniosos.",
    image: femaleDentistImage,
    certifications: ["Universidad de Guadalajara"],
  },
];

export default function TeamSection() {
  return (
    <section
      id="equipo"
      className="py-20 md:py-28 bg-background"
      data-testid="section-team"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">
            Nuestro Equipo
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4"
            data-testid="text-team-title"
          >
            Especialistas Comprometidos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conoce a los profesionales que harán de tu visita una experiencia
            excepcional.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-muted-foreground">
            <GraduationCap className="w-5 h-5 text-gold" />
            <span className="text-sm">
              Cursos de actualización en México y el extranjero
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Heart className="w-5 h-5 text-gold" />
            <span className="text-sm">Enfoque en trato humano y cercano</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="overflow-hidden bg-card border-border group hover-elevate"
              data-testid={`card-team-${member.id}`}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl font-semibold text-ivory mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold text-sm mb-2">{member.specialty}</p>
                  <p className="text-ivory/70 text-sm mb-3">{member.bio}</p>
                  {member.certifications && (
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-white/10 text-ivory/80 border-white/20 text-xs"
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}