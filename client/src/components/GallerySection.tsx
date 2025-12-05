import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import clinicImage from "@assets/generated_images/modern_dental_clinic_interior.png";
import beforeAfterImage from "@assets/generated_images/dental_before_after_comparison.png";
import technologyImage from "@assets/generated_images/dental_technology_equipment.png";
import heroImage from "@assets/generated_images/elegant_smile_hero_image.png";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: "results" | "clinic" | "technology";
  label?: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: beforeAfterImage,
    alt: "Antes y después - Diseño de sonrisa",
    category: "results",
    label: "Antes / Después",
  },
  {
    id: 2,
    src: clinicImage,
    alt: "Instalaciones modernas de la clínica",
    category: "clinic",
  },
  {
    id: 3,
    src: technologyImage,
    alt: "Tecnología de diseño digital",
    category: "technology",
  },
  {
    id: 4,
    src: heroImage,
    alt: "Sonrisa perfecta después de tratamiento",
    category: "results",
    label: "Resultado",
  },
  {
    id: 5,
    src: clinicImage,
    alt: "Área de tratamiento",
    category: "clinic",
  },
  {
    id: 6,
    src: technologyImage,
    alt: "Laboratorio digital",
    category: "technology",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const currentIndex = selectedImage
    ? filteredItems.findIndex((item) => item.id === selectedImage.id)
    : -1;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1]);
    }
  };

  return (
    <section
      id="galeria"
      className="py-20 md:py-28 bg-background"
      data-testid="section-gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">
            Nuestro Trabajo
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4"
            data-testid="text-gallery-title"
          >
            Galería de Sonrisas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explora nuestras instalaciones, tecnología y los resultados que
            hemos logrado para nuestros pacientes.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: "Todos" },
              { id: "results", label: "Resultados" },
              { id: "clinic", label: "Clínica" },
              { id: "technology", label: "Tecnología" },
            ].map((option) => (
              <Button
                key={option.id}
                variant={filter === option.id ? "default" : "secondary"}
                size="sm"
                onClick={() => setFilter(option.id)}
                data-testid={`button-filter-${option.id}`}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(item)}
              data-testid={`gallery-item-${item.id}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <ZoomIn className="w-8 h-8 text-ivory mx-auto mb-2" />
                  {item.label && (
                    <span className="text-ivory text-sm font-medium">
                      {item.label}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setSelectedImage(null)}
              data-testid="button-close-lightbox"
            >
              <X className="w-5 h-5" />
            </Button>

            {currentIndex > 0 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={goToPrevious}
                data-testid="button-prev-image"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            )}

            {currentIndex < filteredItems.length - 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={goToNext}
                data-testid="button-next-image"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            )}

            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            )}

            {selectedImage?.label && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full text-ivory text-sm">
                {selectedImage.label}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}