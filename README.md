# Muhammed Fayas EK - Portfolio

A modern, minimal, and performant personal portfolio website built with React, Vite, and Tailwind CSS v4. Features a dark-first design system, smooth animations, and interactive particle background.

## ✨ Features

- **Dark-first design system** with semantic color tokens
- **Interactive particle background** using tsParticles
- **Responsive design** - mobile, tablet, desktop
- **Smooth scroll navigation** with active section highlighting
- **Mobile-first hamburger menu** with animated transitions
- **Project showcase** with hover overlays
- **Skills grid** with technology icons
- **Contact form** with serverless email (Resend + Vercel Functions)
- **Back-to-top button** with scroll visibility
- **Accessible** - semantic HTML, ARIA labels, focus states
- **Performance optimized** - lazy loading, minimal bundle

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 + Vite 6 |
| **Styling** | Tailwind CSS v4 (semantic tokens) |
| **Animations** | CSS animations + tsParticles |
| **Icons** | Iconify (100k+ icons) |
| **Email** | Resend + Vercel Serverless Functions |
| **Deployment** | Vercel |
| **Package Manager** | pnpm |

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Fixed nav with mobile menu
│   ├── Home.jsx         # Hero with particle background
│   ├── About.jsx        # Profile, experience, education
│   ├── Skills.jsx       # Technology skill grid
│   ├── Projects.jsx     # Project cards with overlays
│   ├── Contact.jsx      # Contact form + info
│   ├── Footer.jsx       # Copyright + social links
│   └── Parts.jsx        # Reusable components (BackToTop, IconRing)
├── lib/
│   └── particle.js      # tsParticles configuration
├── App.jsx              # Main app composition
├── main.jsx             # Entry point
└── index.css            # Tailwind v4 theme + globals
api/
└── contact/
    └── index.ts         # Vercel serverless function (Resend)
```

## 🎨 Design System

Semantic color tokens defined in `src/index.css`:

```css
@theme {
  --color-background:        #080808;
  --color-surface:           #111111;
  --color-surface-hover:     #1a1a1a;
  --color-surface-elevated:  #181818;
  --color-border:            #272727;
  --color-border-hover:      #3a3a3a;
  --color-text-primary:      #fafafa;
  --color-text-secondary:    #d4d4d4;
  --color-text-tertiary:     #a3a3a3;
  --color-text-muted:        #737373;
  --color-accent:            #7c8cfa;
  --color-accent-hover:      #a5b4fc;
  --color-accent-muted:      #312e81;
  --color-accent-soft:       #4f46e5;
  --color-accent-strong:     #4338ca;
}
```

Usage: `bg-surface`, `text-text-primary`, `border-border`, `hover:bg-accent-hover`, etc.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9+

### Installation

```bash
# Clone repository
git clone https://github.com/muhmdfayasek/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Environment Variables

Create `.env.local` for local development:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

Get your API key from [Resend Dashboard](https://resend.com/api-keys).

### Build for Production

```bash
pnpm build
```

Preview production build:
```bash
pnpm preview
```

## 📦 Deployment (Vercel)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variable: `RESEND_API_KEY`
4. Deploy

Vercel automatically detects Vite config and serverless functions in `/api`.

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## 🔧 Customization

### Colors
Edit `src/index.css` → `@theme` block to customize the design system.

### Particles
Modify `src/lib/particle.js` for particle behavior/appearance.

### Sections
Each section is a separate component in `src/components/` - modify independently.

### Icons
Uses [Iconify](https://iconify.design/) - change icon names in components:
```jsx
<Icon icon="bi:github" />
```

## 📄 License

MIT License - feel free to use as template for your own portfolio.

## 👤 Author

**Muhammed Fayas EK**
- GitHub: [@muhmdfayasek](https://github.com/muhmdfayasek)
- LinkedIn: [muhmdfayasek](https://linkedin.com/in/muhmdfayasek)
- Email: muhmdfayasek@outlook.com