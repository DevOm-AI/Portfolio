# Design Guidelines: Om Shete - AI Developer Portfolio

## Design Approach
**Reference-Based**: Modern developer portfolio aesthetic inspired by Linear's precision and GitHub's clarity, with a strict black & white professional constraint.

## Color Palette
**Critical Constraint**: Black & White Theme Only
- **Dark Mode (Default)**: 
  - Background: Pure black (#000000) to rich charcoal (#0a0a0a)
  - Text: Pure white (#FFFFFF) to light gray (#e5e5e5)
  - Accents: Medium grays (#404040, #666666) for borders/dividers
- **Light Mode (Toggle)**:
  - Background: Pure white (#FFFFFF) to off-white (#fafafa)
  - Text: Pure black (#000000) to dark gray (#1a1a1a)
  - Accents: Light grays (#e0e0e0, #d4d4d4) for borders/dividers
- **Interactive States**: Use opacity variations (0.8, 0.6) and subtle gray shifts instead of colors

## Typography System
- **Primary Font**: Inter or Manrope (Google Fonts) - clean, modern sans-serif
- **Monospace Font**: JetBrains Mono or Fira Code for code snippets/tech elements
- **Hierarchy**:
  - Hero/Name: 3xl-5xl (48-64px), bold (700-800)
  - Section Headings: 2xl-3xl (32-48px), semibold (600)
  - Subsection/Project Titles: xl-2xl (24-32px), medium (500)
  - Body Text: base-lg (16-18px), regular (400)
  - Captions/Meta: sm (14px), light (300)

## Layout System
**Spacing Units**: Tailwind scale - primarily use units of 4, 6, 8, 12, 16, 20, 24 (p-4, mt-8, gap-6, etc.)
- **Container**: max-w-6xl centered with px-6 md:px-12 padding
- **Section Padding**: py-16 md:py-24 lg:py-32 for generous vertical spacing
- **Component Spacing**: gap-8 md:gap-12 between major elements
- **Grid Systems**: 
  - Skills: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
  - Projects: grid-cols-1 md:grid-cols-2 with detailed cards
  - Experience/Education: Single column timeline/card layout

## Website Structure & Sections

### 1. Navigation
- Sticky header with smooth backdrop blur effect
- Horizontal nav links (About, Skills, Projects, Experience, Education, Contact)
- Theme toggle button (sun/moon icon) on the right
- Minimal mobile hamburger menu

### 2. Hero/About Me Section
- **No Large Hero Image**: Text-focused introduction with animated elements
- Centered layout with name (large, bold), role (AI Developer), and brief tagline
- Animated text reveal with stagger effect on load
- Quick links to GitHub, email with subtle hover animations
- Scroll indicator with gentle pulsing animation
- Tech-humor touch: Add a subtle witty line like "Making machines smarter, one model at a time ☕"

### 3. Skills Section
- Grid of skill cards (Languages, Developer Tools, Database Systems)
- Each card with category header and skill pills/tags
- Hover effects: subtle scale (1.02-1.05) and shadow elevation
- Entry animation: staggered fade-in with slide-up effect
- Visual treatment: bordered cards with subtle shadows in both themes

### 4. Projects Section
- Two featured projects (Face Recognition System, NGO Website)
- Large project cards with:
  - Project title and tech stack badges
  - Detailed bullet points of achievements with metrics (80% reduction, 95% accuracy, etc.)
  - Hover effect: gentle lift with shadow deepening
- Entry animation: fade-in with slide from bottom
- Tech stack badges styled as pills with border treatment

### 5. Experience Section
- Timeline-style layout or detailed card for the internship
- Company name, role, duration prominently displayed
- Achievement bullets with metrics highlighted (40% increase, 30% improvement, 25% reduction)
- Entry animation: fade-in with slide from left
- Visual indicator: subtle vertical line or marker for timeline feel

### 6. Education Section
- Two education cards (Engineering, Diploma)
- Display institution, degree, CGPA/details, dates, location
- Relevant coursework displayed as clean pill tags
- Entry animation: fade-in with slide from right
- Clean card design with consistent spacing

### 7. Certifications (Bonus Section)
- Compact grid of certification cards (3 certifications)
- Certificate name, issuing organization, date
- Simple, clean presentation
- Hover: subtle brightness increase

### 8. Contact Section
- Centered contact card with multiple methods (Email, Phone, GitHub)
- Large, tappable contact buttons with icons
- Entry animation: scale-in with fade
- Footer with subtle tech-humor: "Built with ☕ and React hooks" or "Console.log('Hire me!')"

## Animation Strategy
**Performance-First Smooth Animations**:
- **Page Load**: Stagger animations for sections (0.1-0.2s delays)
- **Scroll Triggers**: Fade-in + slide (translateY: 20px to 0) as sections enter viewport
- **Hover States**: 
  - Buttons: scale(1.05), brightness increase, subtle shadow
  - Cards: scale(1.02), shadow elevation
  - Links: underline animation, opacity shift
- **Theme Toggle**: Smooth 300ms transition on all color properties
- **Navigation**: Smooth scroll behavior with easing
- All animations: 200-400ms duration with ease-in-out curves
- Use `transform` and `opacity` for GPU acceleration

## Component Design Patterns

### Cards
- Border: 1px solid with theme-appropriate gray
- Border radius: rounded-lg (8px) or rounded-xl (12px)
- Padding: p-6 md:p-8
- Background: slight contrast from page background (subtle opacity shift)
- Hover: Translate Y by -2px, shadow elevation

### Buttons
- Primary: Black (dark mode) / White (light mode) with inverted text
- Border: 2px solid with theme color
- Padding: px-8 py-3
- Border radius: rounded-full or rounded-lg
- Hover: Background opacity shift, scale(1.05)
- On images: Backdrop blur (backdrop-blur-md) with semi-transparent background

### Typography Rhythm
- Section titles: mb-12 md:mb-16
- Subsection spacing: mb-6 md:mb-8
- Paragraph spacing: mb-4
- Line height: leading-relaxed (1.625) for body text

## Responsive Breakpoints
- Mobile: Base styles, single column
- Tablet: md: (768px+), 2-column grids where appropriate
- Desktop: lg: (1024px+), full multi-column layouts
- Large: xl: (1280px+), max container width

## Images
**No hero image required** - this is a text-focused developer portfolio emphasizing content and metrics. All visual interest comes from typography, animations, and layout sophistication rather than imagery.

## Technical Implementation Notes
- Use React hooks (useState for theme toggle, useEffect for scroll animations, useInView for section animations)
- Implement theme context for global dark/light mode state
- Smooth scroll: CSS `scroll-behavior: smooth` or React scroll library
- Animation library: Framer Motion or CSS animations with Tailwind