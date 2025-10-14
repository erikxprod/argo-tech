# Design Guidelines: Agricultural Machinery Landing Page

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern industrial e-commerce (Shopify, Caterpillar) combined with Indonesian market preferences. Focus on trust-building through professional presentation, clear product information, and seamless purchasing flow.

**Core Principles**:
- Professional credibility through clean, organized layouts
- Product-focused visual hierarchy
- Trust signals prominently displayed (guarantees, testimonials)
- Simplified purchasing journey with clear CTAs

---

## Color Palette

### Light Mode
- **Primary Brand**: 28 75% 45% (Deep Agricultural Green - conveys growth, reliability, nature)
- **Primary Hover**: 28 75% 38%
- **Secondary**: 38 80% 50% (Vibrant Yellow-Green - energy, machinery accent)
- **Neutral Dark**: 220 15% 20% (Text and headings)
- **Neutral Medium**: 220 10% 50% (Supporting text)
- **Neutral Light**: 220 15% 96% (Backgrounds, cards)
- **Success**: 142 71% 45% (Cart actions, confirmations)
- **Background**: 0 0% 100%

### Dark Mode
- **Primary Brand**: 28 60% 55%
- **Primary Hover**: 28 60% 62%
- **Secondary**: 38 70% 60%
- **Neutral Dark**: 220 15% 95%
- **Neutral Medium**: 220 10% 65%
- **Neutral Light**: 220 20% 15%
- **Success**: 142 65% 55%
- **Background**: 220 18% 10%

---

## Typography

**Font Families**:
- Headings: Inter (700, 600, 500) - modern, professional, highly legible
- Body: Inter (400, 500) - consistent brand voice
- Price/Numbers: Inter (600, 700) - emphasize pricing clarity

**Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl font-bold
- Section Headers: text-3xl md:text-4xl font-bold
- Product Names: text-xl md:text-2xl font-semibold
- Product Specs: text-sm md:text-base font-medium
- Body Text: text-base md:text-lg
- Small Print: text-sm

---

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Container Strategy**:
- Full-width sections with inner max-w-7xl for content containment
- Product catalog: max-w-7xl with proper grid spacing
- Text content: max-w-4xl for optimal readability

**Grid System**:
- Mobile (base): Single column, stack all elements
- Tablet (md): 2-column for products, features
- Desktop (lg): 3-4 column for product grid, 2-column for features

---

## Component Library

### Hero Section
- **Layout**: Full-width with 80vh minimum height, two-column split on desktop
- **Left Column**: Value proposition headline, subheadline (emphasize "machinery for modern farming"), dual CTAs (Browse Products + Contact WhatsApp)
- **Right Column**: Large hero image showing machinery in action on Indonesian farmland
- **Elements**: Trust badge strip below hero (e.g., "10+ Years Experience", "500+ Satisfied Farmers", "Nationwide Delivery")

### Product Catalog Grid
- **Card Design**: Elevated cards with hover lift effect, rounded-2xl borders
- **Card Structure**: 
  - Image container (aspect-ratio-4/3) with machinery photo
  - Product type badge (top-left overlay on image)
  - Content padding (p-6): Product name, short description, key specs table (2 rows max)
  - Price display (text-2xl font-bold in primary color)
  - Add to Cart button (full-width, primary color)
- **Grid**: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8

### Shopping Cart (Floating Widget + Full Page)
- **Cart Icon**: Fixed top-right, shows item count badge in primary color
- **Cart Drawer/Modal**: Slides from right, displays all items with:
  - Item thumbnail (80px square)
  - Name, quantity controls (+/- buttons), price
  - Remove button (text-destructive)
  - Subtotal per item
  - Grand total (prominent, text-3xl)
  - Checkout CTA (full-width, primary)

### Checkout Form
- **Layout**: Center card (max-w-2xl) with two sections:
  - Left: Order summary (itemized list, total)
  - Right: Buyer information form (Name, Phone, Address textarea, Notes textarea)
- **Action Buttons**: Two prominent CTAs side-by-side:
  - WhatsApp button (green background 142 71% 45%, WhatsApp icon)
  - Email button (blue background 221 83% 53%, envelope icon)

### Testimonials
- **Layout**: 3-column grid on desktop, 1-column mobile
- **Card Design**: White/dark cards with:
  - 5-star rating display (top)
  - Testimonial quote (text-lg, italic)
  - Customer name + location (text-sm, bottom)
  - Farmer photo (circular, 64px) positioned top-left with quote wrapping

### Features/Benefits Section
- **Layout**: Alternating 2-column sections (image-text, text-image pattern)
- **Each Feature Block**:
  - Icon (80px, primary color) - e.g., gear for quality, shield for warranty
  - Headline (text-2xl font-bold)
  - Description paragraph (text-lg)
  - Supporting image showing machinery detail or farmer using equipment

### Guarantee/Service Section
- **Layout**: Centered content, max-w-4xl
- **Visual**: Large shield icon or certification badge (center)
- **Content**: Headline, bullet points for warranty terms, service coverage, spare parts availability
- **Design**: Background in subtle primary tint (primary/5)

### FAQ Section
- **Layout**: Single column, max-w-3xl centered
- **Accordion Design**: Clean borders, expand/collapse icons (chevron)
- **Styling**: Question text-lg font-semibold, answer text-base with relaxed line-height

### Footer
- **Layout**: 4-column grid on desktop (About, Products, Contact, Follow Us), stack on mobile
- **Contact Block**: WhatsApp number (large, clickable), email, address
- **Social Icons**: Instagram, Facebook, YouTube (32px icons)
- **Bottom Bar**: Copyright, payment methods icons (if applicable)

---

## Visual Enhancements

**Images**:
- **Hero Image**: Large, high-quality photo of modern harvester/tractor in Indonesian rice field during golden hour - positioned right side on desktop, full-width on mobile
- **Product Images**: Clean product shots on white/transparent background, uniform aspect ratio
- **Feature Section Images**: In-action shots showing machinery operation, farmers using equipment, close-ups of quality details
- **Testimonial Photos**: Authentic farmer portraits, casual professional style

**Animations** (Minimal):
- Cart add action: Subtle scale pulse on cart icon + success toast notification
- Product card hover: Slight lift (translateY -4px) + shadow increase
- Scroll fade-in for testimonials (once)
- Page transitions: None (instant)

**Interactive States**:
- Buttons: Scale 98% on active press, background darkens on hover
- Form inputs: Border color change to primary on focus
- Cart quantity controls: Immediate visual feedback with number change animation

---

## Responsive Breakpoints

- **Mobile**: Base styles, single column, stack all content
- **Tablet (md: 768px)**: 2-column grids, horizontal navigation
- **Desktop (lg: 1024px)**: 3-4 column grids, full layout complexity
- **Wide (xl: 1280px)**: Maximum container width, enhanced spacing

---

## Trust & Conversion Elements

**Above the Fold**:
- Immediate value proposition with machinery benefit statement
- Trust badges strip (warranty, experience, customer count)
- Primary CTA (Browse Products) + Secondary (WhatsApp Contact)

**Throughout Page**:
- Customer testimonials with real names and locations
- Guarantee/warranty prominently displayed
- Clear pricing with IDR currency format (Rp12.500.000)
- Multiple contact options (WhatsApp, Email, Phone)
- FAQ addressing common concerns

**Checkout Flow**:
- Order summary always visible during checkout
- Dual submission options (WhatsApp preferred for Indonesian market)
- Form validation with friendly error messages
- Clear expectations: "Click to send order via WhatsApp"