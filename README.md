# Gleame Website

Modern marketing website for Gleame - AI Virtual Try-On for Beauty & Cosmetics Shopify App.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with nav/footer
│   ├── page.tsx            # Home page
│   ├── features/page.tsx   # Features page
│   ├── pricing/page.tsx    # Pricing page
│   ├── contact/page.tsx    # Contact page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── home/               # Home page sections
│   ├── pricing/            # Pricing components
│   └── ui/                 # Reusable UI components
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Pages

- **/** - Landing page with hero, features, testimonials
- **/features** - Detailed feature breakdown
- **/pricing** - Pricing tiers and FAQ
- **/contact** - Demo request form

## Design

- **Colors**: Violet/purple primary (#7C3AED), coral accents
- **Typography**: Inter font family
- **Style**: Modern SaaS aesthetic inspired by Klaviyo
