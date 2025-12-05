# Design Guidelines: LG Odontología Estética Integral

## Design Approach
**Reference-Based Approach**: Elegant, premium dental clinic website inspired by high-end healthcare and luxury service sites. Dark, sophisticated aesthetic with gold accents to convey professionalism, expertise, and premium service quality.

## Color Palette (User-Specified)
- Deep Black Background: #050505
- Soft Gold (accents/CTAs): #D4AF37
- Ivory White (primary text): #F8F7F4
- Warm Gray (secondary text/borders): #AAAAAA

## Typography System
- **Headlines/Titles**: Serif font (Playfair Display style) - elegant, premium feel
- **Body Text**: Clean sans-serif (Montserrat/Lato style) - modern, readable
- **Hierarchy**: Large, impactful headlines with generous spacing; clear distinction between primary and secondary text

## Layout & Spacing
- Tailwind units: Consistent use of 4, 8, 12, 16, 20, 24, 32 for spacing
- Section padding: py-20 to py-32 on desktop, py-12 to py-16 on mobile
- Container: max-w-7xl for full sections, max-w-6xl for content-focused areas
- Generous whitespace to maintain premium feel

## Core Sections & Components

### Hero Section
- **Layout**: Fullscreen viewport with high-quality dental photography background
- **Overlay**: 40% opacity dark overlay for text legibility
- **Content Structure**: Centered, vertically aligned
  - Large serif headline: "Un equipo, una misión: Tu Mejor Sonrisa"
  - Subtitle with clinic positioning
  - Supporting text (1-2 lines)
  - Two CTAs: Gold solid button ("Agenda tu cita") + White outline button ("Ver tratamientos")
  - Animated scroll indicator at bottom
- **Spacing**: Generous padding around text elements

### Sobre Nosotros
- **Layout**: Two-column desktop (text left, image right), stacked mobile
- **Content**: 
  - History paragraphs (founder, 20+ years)
  - Mission statement (highlighted/boxed)
  - Philosophy bullets
  - Founder profile card with photo
  - 4 stats cards in grid: experience, locations, patients, technology
- **Spacing**: Comfortable reading width for text, balanced with imagery

### Tratamientos (Interactive Catalog)
- **Layout**: Tab navigation for categories (Preventivos, Restaurativos, Estética, Ortodoncia, Implantes, Odontopediatría)
- **Content Cards**: Grid of 3-4 columns on desktop, single column mobile
  - Service name (bold serif)
  - Brief description (2-3 lines)
  - Premium services (diseño de sonrisa, implantes) get highlighted cards with before/after imagery
- **Components**: 15+ treatment cards minimum, PDF download button

### Galería de Resultados
- **Layout**: Masonry grid (3 columns desktop, 1 mobile)
- **Content**: Before/after photos, facility images, team working, equipment
- **Interactions**: Lightbox on click, subtle hover zoom + dark overlay
- **Privacy**: Blur eyes in patient photos where needed

### Agenda Tu Cita
- **Layout**: Centered form card (ivory white background) on dark section
- **Form Fields**: Name, phone, email, reason (dropdown), location (dropdown), preferred date (calendar), time preference, comments
- **CTAs**: Primary gold button + alternative WhatsApp/call buttons
- **Success State**: Animated confirmation message

### Equipo Médico
- **Layout**: Grid of professional cards (3-4 columns desktop)
- **Card Content**: Professional photo, name, specialty, 1-2 line bio
- **Styling**: Dark card backgrounds with ivory text, subtle borders

### Testimonios
- **Layout**: Auto-rotating carousel (3-5 testimonials)
- **Card Content**: Review text, patient name, star rating, optional avatar
- **Integration**: Google Reviews visual branding, CTA buttons to review platforms

### Ubicaciones
- **Layout**: Embedded Google Maps + information columns/cards
- **Content**: 3 clinic locations with address, phone (clickable), email, hours
- **Social Links**: Instagram, Facebook, WhatsApp icons in gold

### Footer
- **Layout**: Three columns desktop (logo/description, quick links, newsletter)
- **Content**: Complete navigation, newsletter signup, social icons, payment methods
- **Bottom Bar**: Copyright, designer credit, payment icons

## Component Library

### Navigation
- Fixed navbar, compacts on scroll
- Hamburger menu for mobile with dark overlay
- Smooth scroll to sections

### Buttons
- Gold solid (primary CTAs)
- White outline (secondary)
- Hover states: subtle scale/glow
- On images: blurred backgrounds for legibility

### Cards
- Dark backgrounds with subtle borders
- Hover: gentle lift/shadow
- Consistent padding (p-6 to p-8)

### Forms
- Light backgrounds for contrast
- Large, touch-friendly inputs on mobile
- Clear validation states
- Accessible labels and error messages

### Images
- Lazy loading for performance
- Professional dental photography throughout
- Before/after comparisons for results
- Facility and team photos for trust

## Animations
- Fade-in and slide-up on scroll (subtle, smooth)
- Hover effects on cards and buttons
- Smooth transitions between states
- Carousel auto-advance with manual controls

## Mobile Strategy
- Hamburger menu with dark overlay
- Prominent CTAs (larger touch targets)
- Single-column layouts
- Fixed/floating "Call Now" or "WhatsApp" button
- Full-width forms with generous spacing

## Technical Requirements
- 100% responsive (mobile-first)
- Smooth scroll between sections
- Form validation (required fields, email format)
- SEO optimization with keywords: odontología estética, clínica dental, dentista en Guaymas, diseño de sonrisa
- Vercel.json configured for SPA routing

## Visual Tone
Sophisticated yet approachable. Premium dental care experience that emphasizes professionalism, advanced technology, and human warmth. Dark elegance with strategic gold accents creates trust and positions the clinic as high-end while remaining welcoming.