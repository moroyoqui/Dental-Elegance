import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#tratamientos", label: "Tratamientos" },
  { href: "#galeria", label: "Galería" },
  { href: "#equipo", label: "Equipo" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#ubicaciones", label: "Ubicaciones" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border py-2"
            : "bg-transparent py-4"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#inicio");
              }}
              className="flex items-center"
              data-testid="link-logo"
            >
              <img 
                src="/attached_assets/logocompletonuevo_1764984750997.png" 
                alt="LG Odontología" 
                className="h-12 md:h-14 w-auto"
              />
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover-elevate"
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="tel:+526221234567"
                className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-phone"
              >
                <Phone className="w-4 h-4" />
                <span>(622) 123-4567</span>
              </a>

              <Button
                onClick={() => scrollToSection("#cita")}
                className="hidden sm:flex"
                data-testid="button-nav-cta"
              >
                Agenda tu cita
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
                data-testid="button-menu-open"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/98 backdrop-blur-lg lg:hidden"
          data-testid="mobile-menu"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <img 
                src="/attached_assets/logocompletonuevo_1764984750997.png" 
                alt="LG Odontología" 
                className="h-10 w-auto"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid="button-menu-close"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-col flex-1 p-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="px-4 py-3 text-lg text-foreground hover:text-gold transition-colors rounded-md hover-elevate"
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="p-4 border-t border-border space-y-3">
              <Button
                onClick={() => scrollToSection("#cita")}
                className="w-full"
                size="lg"
                data-testid="button-mobile-cta"
              >
                Agenda tu cita
              </Button>
              <a
                href="tel:+526221234567"
                className="flex items-center justify-center gap-2 py-3 text-muted-foreground"
                data-testid="link-mobile-phone"
              >
                <Phone className="w-4 h-4" />
                <span>(622) 123-4567</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}