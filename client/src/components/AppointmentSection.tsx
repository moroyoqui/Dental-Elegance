import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Phone, CheckCircle2 } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const motivos = [
  { value: "dolor", label: "Dolor o molestia" },
  { value: "limpieza", label: "Limpieza dental" },
  { value: "estetica", label: "Estética dental" },
  { value: "ortodoncia", label: "Ortodoncia" },
  { value: "implantes", label: "Implantes" },
  { value: "valoracion", label: "Valoración general" },
  { value: "otro", label: "Otro" },
];

const sucursales = [
  { value: "centro", label: "Sucursal Centro" },
  { value: "norte", label: "Sucursal Norte" },
  { value: "miramar", label: "Sucursal Miramar" },
];

const horarios = [
  { value: "manana", label: "Mañana (9:00 - 14:00)" },
  { value: "tarde", label: "Tarde (15:00 - 20:00)" },
];

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    motivo: "",
    sucursal: "",
    fecha: undefined as Date | undefined,
    horario: "",
    comentarios: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido";
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\D/g, ""))) {
      newErrors.telefono = "Ingresa un número de 10 dígitos";
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido";
    }
    if (!formData.motivo) {
      newErrors.motivo = "Selecciona un motivo";
    }
    if (!formData.sucursal) {
      newErrors.sucursal = "Selecciona una sucursal";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (field: string, value: string | Date | undefined) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="cita"
        className="py-20 md:py-28 bg-card/50"
        data-testid="section-appointment"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 bg-ivory text-background text-center">
            <div className="animate-fade-in-up">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
                Gracias, {formData.nombre.split(" ")[0]}
              </h3>
              <p className="text-gray-600 mb-6">
                Hemos recibido tu solicitud. Nuestro equipo se pondrá en
                contacto contigo para confirmar tu cita.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    nombre: "",
                    telefono: "",
                    email: "",
                    motivo: "",
                    sucursal: "",
                    fecha: undefined,
                    horario: "",
                    comentarios: "",
                  });
                }}
                variant="outline"
                className="border-gray-300 text-gray-700"
                data-testid="button-new-appointment"
              >
                Agendar otra cita
              </Button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section
      id="cita"
      className="py-20 md:py-28 bg-card/50"
      data-testid="section-appointment"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold font-medium mb-2 tracking-wider uppercase text-sm">
            Contacto
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4"
            data-testid="text-appointment-title"
          >
            Agenda tu Cita
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo para
            confirmar tu cita.
          </p>
        </div>

        <Card className="p-6 md:p-8 bg-ivory text-background">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-gray-700">
                  Nombre completo *
                </Label>
                <Input
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange("nombre", e.target.value)}
                  placeholder="Tu nombre completo"
                  className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 ${
                    errors.nombre ? "border-red-500" : ""
                  }`}
                  data-testid="input-nombre"
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm">{errors.nombre}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-gray-700">
                  Teléfono *
                </Label>
                <Input
                  id="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) =>
                    handleInputChange("telefono", e.target.value)
                  }
                  placeholder="(622) 123-4567"
                  className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 ${
                    errors.telefono ? "border-red-500" : ""
                  }`}
                  data-testid="input-telefono"
                />
                {errors.telefono && (
                  <p className="text-red-500 text-sm">{errors.telefono}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="tu@email.com"
                  className={`bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700">Motivo de consulta *</Label>
                <Select
                  value={formData.motivo}
                  onValueChange={(value) => handleInputChange("motivo", value)}
                >
                  <SelectTrigger
                    className={`bg-white border-gray-300 text-gray-900 ${
                      errors.motivo ? "border-red-500" : ""
                    }`}
                    data-testid="select-motivo"
                  >
                    <SelectValue placeholder="Selecciona un motivo" />
                  </SelectTrigger>
                  <SelectContent>
                    {motivos.map((motivo) => (
                      <SelectItem key={motivo.value} value={motivo.value}>
                        {motivo.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.motivo && (
                  <p className="text-red-500 text-sm">{errors.motivo}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700">Sucursal *</Label>
                <Select
                  value={formData.sucursal}
                  onValueChange={(value) =>
                    handleInputChange("sucursal", value)
                  }
                >
                  <SelectTrigger
                    className={`bg-white border-gray-300 text-gray-900 ${
                      errors.sucursal ? "border-red-500" : ""
                    }`}
                    data-testid="select-sucursal"
                  >
                    <SelectValue placeholder="Selecciona una sucursal" />
                  </SelectTrigger>
                  <SelectContent>
                    {sucursales.map((sucursal) => (
                      <SelectItem key={sucursal.value} value={sucursal.value}>
                        {sucursal.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.sucursal && (
                  <p className="text-red-500 text-sm">{errors.sucursal}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700">Fecha preferida</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-white border-gray-300 text-gray-900 hover:bg-gray-50"
                      data-testid="button-fecha"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                      {formData.fecha ? (
                        format(formData.fecha, "PPP", { locale: es })
                      ) : (
                        <span className="text-gray-400">Selecciona fecha</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.fecha}
                      onSelect={(date) => handleInputChange("fecha", date)}
                      disabled={(date) =>
                        date < new Date() || date.getDay() === 0
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700">Horario preferido</Label>
                <Select
                  value={formData.horario}
                  onValueChange={(value) => handleInputChange("horario", value)}
                >
                  <SelectTrigger
                    className="bg-white border-gray-300 text-gray-900"
                    data-testid="select-horario"
                  >
                    <SelectValue placeholder="Selecciona horario" />
                  </SelectTrigger>
                  <SelectContent>
                    {horarios.map((horario) => (
                      <SelectItem key={horario.value} value={horario.value}>
                        {horario.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comentarios" className="text-gray-700">
                Comentarios adicionales
              </Label>
              <Textarea
                id="comentarios"
                value={formData.comentarios}
                onChange={(e) =>
                  handleInputChange("comentarios", e.target.value)
                }
                placeholder="Cuéntanos más sobre tu caso o alguna consideración especial..."
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 min-h-[100px]"
                data-testid="textarea-comentarios"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                size="lg"
                className="flex-1"
                data-testid="button-submit"
              >
                Confirmar cita
              </Button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-4">
              O contacta directamente:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/526221234567?text=Hola,%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
                Agendar por WhatsApp
              </a>
              <a
                href="tel:+526221234567"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                data-testid="link-llamar"
              >
                <Phone className="w-5 h-5" />
                Llamar a la clínica
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}