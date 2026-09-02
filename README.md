# Muhammed Fayas EK - Portfolio

A modern, minimal personal portfolio website built with React, Vite, and Tailwind CSS v4.

## Features

- Dark-first design with semantic color system
- Interactive particle background (tsParticles)
- Fully responsive - mobile, tablet, desktop
- Smooth scroll navigation with mobile hamburger menu
- Project showcase with hover overlays
- Skills grid with technology icons
- Contact form with email integration
- Back-to-top button with scroll visibility

## Tech Stack

- **React 19** + **Vite 6**
- **Tailwind CSS v4** (custom design tokens)
- **tsParticles** for animated background
- **Iconify** for icons
- **Resend** + **Vercel Functions** for contact form
- **pnpm** package manager
- **Flowbite** design ideas

## Project Structure

```
src/
├── components/     # Navbar, Home, About, Skills, Projects, Contact, Footer, Parts
├── lib/            # Particle configuration
├── App.jsx         # Main app composition
├── main.jsx        # Entry point
└── index.css       # Tailwind v4 theme + globals
api/
└── contact/        # Vercel serverless function
```

## Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Production build
pnpm preview  # Preview production build
pnpm lint     # Run ESLint
```

## Author

**Muhammed Fayas EK**
- GitHub: [@muhmdfayasek](https://github.com/muhmdfayasek)
- LinkedIn: [muhmdfayasek](https://linkedin.com/in/muhmdfayasek)
- Email: muhmdfayasek@outlook.com