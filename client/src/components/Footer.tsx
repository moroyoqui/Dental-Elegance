import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Send, CheckCircle2 } from "lucide-react";
import { SiInstagram, SiFacebook, SiWhatsapp, SiVisa, SiMastercard } from "react-icons/si";

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Sobre nosotros" },
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#equipo", label: "Equipo médico" },
  { href: "#cita", label: "Agenda tu cita" },
  { href: "#ubicaciones", label: "Ubicaciones" },
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

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter subscription:", email);
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#inicio");
              }}
              className="inline-block mb-4 bg-background/40 backdrop-blur-sm border border-gold/20 rounded-lg px-3 py-3 shadow-lg shadow-gold/10 hover:shadow-gold/20 transition-all"
              data-testid="link-footer-logo"
            >
              <img 
                src="/logo-icon.png" 
                alt="LG Odontología" 
                className="h-12 w-auto drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
              />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              LG Odontología Estética Integral: clínica dental con más de 20
              años transformando sonrisas en Guaymas con tecnología avanzada y
              trato humano.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-colors"
                  aria-label={social.label}
                  data-testid={`link-footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              Links Rápidos
            </h4>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-muted-foreground hover:text-gold transition-colors text-sm py-1"
                  data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">
              Newsletter
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Recibe consejos de salud bucal y promociones especiales en tu
              correo.
            </p>
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-green-500">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm">Gracias por suscribirte</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex gap-2"
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  required
                  data-testid="input-newsletter-email"
                />
                <Button
                  type="submit"
                  size="icon"
                  data-testid="button-newsletter-submit"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Separator className="bg-border" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} LG Odontología Estética Integral. Todos
            los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-xs">
              Diseñado por HighTech Business Consulting
            </span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <SiVisa className="w-8 h-5" />
              <SiMastercard className="w-8 h-5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}