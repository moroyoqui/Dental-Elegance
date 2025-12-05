import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Car, ExternalLink } from "lucide-react";
import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";

type Location = {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  parking: string;
  mapUrl: string;
};

const locations: Location[] = [
  {
    id: 1,
    name: "Sucursal Centro",
    address: "Av. Serdán #234, Col. Centro, Guaymas, Sonora",
    phone: "(622) 222-1234",
    email: "centro@lgodontologia.com",
    hours: {
      weekdays: "9:00 - 20:00",
      saturday: "9:00 - 14:00",
      sunday: "Cerrado",
    },
    parking: "Estacionamiento disponible a media cuadra",
    mapUrl: "https://maps.google.com/?q=27.9234,-110.9011",
  },
  {
    id: 2,
    name: "Sucursal Norte",
    address: "Blvd. Benito Juárez #567, Col. Las Palmas, Guaymas, Sonora",
    phone: "(622) 222-5678",
    email: "norte@lgodontologia.com",
    hours: {
      weekdays: "9:00 - 20:00",
      saturday: "9:00 - 14:00",
      sunday: "Cerrado",
    },
    parking: "Amplio estacionamiento propio",
    mapUrl: "https://maps.google.com/?q=27.9434,-110.8811",
  },
  {
    id: 3,
    name: "Sucursal Miramar",
    address: "Calle 20 #890, Fracc. Miramar, Guaymas, Sonora",
    phone: "(622) 222-9012",
    email: "miramar@lgodontologia.com",
    hours: {
      weekdays: "9:00 - 20:00",
      saturday: "9:00 - 14:00",
      sunday: "Cerrado",
    },
    parking: "Estacionamiento en plaza comercial",
    mapUrl: "https://maps.google.com/?q=27.9134,-110.9211",
  },
];

const socialLinks = [
  {
    icon: SiInstagram,
    href: "https://instagram.com/lgodontologia",
    label: "Instagram",
  },
  {
    icon: SiFacebook,
    href: "https://facebook.com/lgodontologia",
    label: "Facebook",
  },
  {
    icon: SiWhatsapp,
    href: "https://wa.me/526221234567",
    label: "WhatsApp",
  },
];

export default function LocationsSection() {
  return (
    <section
      id="ubicaciones"
      className="py-20 md:py-28 bg-background"
      data-testid="section-locations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">
            Encuéntranos
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4"
            data-testid="text-locations-title"
          >
            Nuestras Ubicaciones
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visítanos en cualquiera de nuestras tres sucursales en Guaymas,
            Sonora.
          </p>
        </div>

        <div className="mb-12 rounded-lg overflow-hidden h-[400px] bg-card border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55234.95254892685!2d-110.9381!3d27.9166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b98da44d3f3f1d%3A0x5d0c1e3cf0e7c0c0!2sGuaymas%2C%20Sonora%2C%20Mexico!5e0!3m2!1sen!2sus!4v1701234567890!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicaciones LG Odontología"
            data-testid="map-embed"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Card
              key={location.id}
              className="p-6 bg-card border-border"
              data-testid={`card-location-${location.id}`}
            >
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                {location.name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground">{location.address}</p>
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gold hover:underline inline-flex items-center gap-1 mt-1"
                    >
                      Cómo llegar
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <a
                    href={`tel:${location.phone.replace(/\D/g, "")}`}
                    className="text-foreground hover:text-gold transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  <a
                    href={`mailto:${location.email}`}
                    className="text-foreground hover:text-gold transition-colors"
                  >
                    {location.email}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-foreground">
                      <span className="text-muted-foreground">Lun - Vie:</span>{" "}
                      {location.hours.weekdays}
                    </p>
                    <p className="text-foreground">
                      <span className="text-muted-foreground">Sábado:</span>{" "}
                      {location.hours.saturday}
                    </p>
                    <p className="text-foreground">
                      <span className="text-muted-foreground">Domingo:</span>{" "}
                      {location.hours.sunday}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-gold flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    {location.parking}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Síguenos en redes sociales</p>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-colors"
                aria-label={social.label}
                data-testid={`link-social-${social.label.toLowerCase()}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}