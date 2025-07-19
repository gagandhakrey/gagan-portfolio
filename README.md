# Gagan Dhakrey Portfolio

A production-grade, dark-first, accessible, SEO-optimized personal portfolio built with **Next.js (App Router) + TypeScript + Tailwind + Framer Motion + React Hook Form + Zod**.

## 🎯 Overview

This portfolio showcases Gagan Dhakrey's expertise in backend engineering, system architecture, and performance optimization. Built with modern web technologies and best practices for accessibility, performance, and SEO.

## 🚀 Features

- **Performance Optimized**: Targets Lighthouse ≥95 (Perf/Acc/Best/SEO)
- **Accessibility First**: WCAG 2.1 AA compliant with reduced motion support
- **SEO Optimized**: Structured data, meta tags, and semantic HTML
- **Dark-First Design**: Beautiful dark theme with smooth animations
- **Responsive Navigation**: 
  - Desktop: Horizontal navigation bar with active section highlighting
  - Mobile: Hamburger menu with smooth slide-down overlay
  - Smart device detection (mobile/tablet/desktop)
  - Smooth scrolling between sections
- **Mobile-First Responsive**: Optimized layouts for all device sizes
- **Type Safe**: Full TypeScript coverage with strict mode
- **Form Validation**: Contact form with Zod schema validation
- **Content Management**: JSON-based content for easy updates

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion with reduced motion support
- **Forms**: React Hook Form + Zod validation
- **State Management**: Zustand for global state
- **Icons**: Heroicons
- **Testing**: Jest + Testing Library + Axe for accessibility

## 📁 Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Atomic design components
│   ├── atoms/            # Basic building blocks
│   ├── molecules/        # Simple combinations
│   ├── organisms/        # Complex sections
│   └── layout/           # Layout components
├── content/              # JSON content files
│   ├── en/              # English content
│   └── types.ts         # Content type definitions
├── hooks/               # Custom React hooks
│   ├── useActiveSections.ts    # Section visibility tracking
│   ├── useMobileDetection.ts   # Device type detection
│   └── useReducedMotion.ts     # Motion preference handling
├── lib/                 # Utility functions
├── store/               # Zustand stores
├── public/              # Static assets
└── tests/               # Test files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gagan-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

All content is stored in JSON files under `content/en/`:

- `experience.json` - Work experience and roles
- `projects.json` - Portfolio projects
- `achievements.json` - Accomplishments and metrics
- `testimonials.json` - Professional recommendations
- `writing.json` - Blog posts and articles
- `meta.json` - Site metadata and SEO info

To update content, simply edit the JSON files and rebuild the site.

## 🧪 Testing

Run the test suite:

```bash
pnpm test
```

Run accessibility tests:

```bash
pnpm test:a11y
```

## 🏗 Building for Production

```bash
pnpm build
pnpm start
```

## 🎨 Customization

### Colors and Theme

Edit `lib/theme.ts` to customize the color palette and design tokens.

### Styling

The project uses Tailwind CSS with custom configuration in `tailwind.config.ts`.

### Animations

Animation variants are defined in `components/animations/variants.ts`.

## 📊 Performance Targets

- **Lighthouse Score**: ≥95 (Performance, Accessibility, Best Practices, SEO)
- **LCP**: < 2.5s (3G Fast)
- **CLS**: < 0.05
- **TTI**: < 3s
- **TBT**: < 200ms

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
NEXT_PUBLIC_SITE_URL=https://gagan.dev
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### SEO Configuration

Update `content/en/meta.json` with your personal information and social links.

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Contact

- **Email**: gagan@example.com
- **LinkedIn**: [linkedin.com/in/gagandhakrey](https://linkedin.com/in/gagandhakrey)
- **GitHub**: [github.com/gagandhakrey](https://github.com/gagandhakrey)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS. # gagan-portfolio
