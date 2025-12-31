# AutoHub Solutions - Official Website

A modern, responsive website for AutoHub Solutions, showcasing AI-powered WhatsApp automation and chatbot services.

## Tech Stack

- **Frontend**: Next.js 16 with React 19
- **Styling**: Tailwind CSS v4 with custom dark theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Firebase (Firestore)
- **Fonts**: Inter & Space Grotesk (Google Fonts)

## Features

- 🎨 Modern dark theme with blue gradient accents (#0A0F2C, #0B5ED7)
- 📱 Fully responsive design (mobile-first)
- ✨ Smooth animations and transitions
- 💬 WhatsApp floating chat button on all pages
- 🔒 Error boundaries for better error handling
- ⚡ Optimized performance with loading states
- 📄 Complete pages: Home, Services, Pricing, About, Contact, Setup

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Firebase credentials:

```bash
cp .env.local.example .env.local
```

Required environment variables:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── pricing/            # Pricing page
│   ├── services/           # Services page
│   ├── setup/              # Chatbot setup form
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services section
│   ├── Pricing.tsx        # Pricing section
│   ├── ChatButton.tsx     # WhatsApp floating button
│   ├── ErrorBoundary.tsx  # Error boundary component
│   └── ...
└── lib/                   # Utilities
    └── firebase.ts        # Firebase configuration
```

## Firebase Setup

1. Create a new project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Create a web app and copy the config
4. Update `.env.local` with your credentials
5. (Optional) Configure Firestore rules in `firestore.rules`

## Contact Information

- **Email**: autohubsolution777@gmail.com
- **Phone**: +91 9940918442
- **Location**: Trichy, Tamil Nadu, India
- **WhatsApp**: https://wa.me/919940918442

## Social Media

- **Instagram**: [@autohub_solution777](https://www.instagram.com/autohub_solution777)
- **YouTube**: [@autohubsolution](https://youtube.com/@autohubsolution)

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

Alternatively, you can use Firebase Hosting, Netlify, or any other hosting service.

## License

© 2026 AutoHub Solutions. All rights reserved.
