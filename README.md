# 🚀 Anuj Jha - Modern Developer Portfolio

A premium, fully responsive developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Designed to showcase your projects, skills, and experience to potential employers and clients.

## ✨ Features

- **Modern UI/UX** - Clean, professional design with glassmorphism effects
- **Dark Theme** - Beautiful dark theme (#0a0a0a) optimized for readability
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Animations** - Framer Motion animations and transitions
- **Single Page** - Smooth scrolling navigation with sticky navbar
- **Production Ready** - TypeScript for type safety and code quality
- **SEO Optimized** - Next.js metadata and structured data
- **Performance** - Optimized for Core Web Vitals

## 📋 Sections

1. **Navbar** - Sticky navigation with smooth scrolling
2. **Hero** - Eye-catching introduction with animated avatar and CTA buttons
3. **About** - Personal background with achievement cards
4. **Skills** - Technical skills organized by categories
5. **Projects** - Featured projects with detailed descriptions
6. **Experience** - Interactive timeline of career journey
7. **Education** - Academic background and certifications
8. **Achievements** - Accomplishments and highlights
9. **Contact** - Contact form and social media links

## 🛠️ Tech Stack

- **Frontend**: React 19, Next.js 15, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Build Tool**: Webpack (via Next.js)
- **Code Quality**: ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory:

```bash
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills section
│   ├── Projects.tsx       # Projects section
│   ├── Experience.tsx     # Experience timeline
│   ├── Education.tsx      # Education section
│   ├── Achievements.tsx   # Achievements section
│   ├── Contact.tsx        # Contact section
│   └── TypingAnimation.tsx # Typing effect
├── hooks/
│   └── useInView.ts       # Intersection observer hook
├── styles/
│   └── globals.css        # Global styles
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies
└── README.md              # This file
```

## 🎨 Customization

### Personal Information

Update the following in components to match your details:

- **Hero.tsx**: Name, role, description, and social links
- **About.tsx**: Personal background and achievements
- **Education.tsx**: School, degree, and courses
- **Projects.tsx**: Your projects with details
- **Contact.tsx**: Email and social media links

### Colors

Customize colors in `tailwind.config.js`:

```javascript
colors: {
  background: '#0a0a0a',
  foreground: '#ffffff',
  accent: '#00d9ff',
  // ... more colors
}
```

### Fonts

Change fonts in `app/layout.tsx` (currently Inter and Fira Code from Google Fonts)

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Deploy to Netlify

1. Build the project:

```bash
npm run build
```

2. Connect your GitHub repository to [Netlify](https://netlify.com)
3. Deploy

### Deploy to Firebase

```bash
npm install -g firebase-tools
npm run build
firebase deploy
```

## 📊 Performance

- Lighthouse Score: 95+
- Mobile Friendly: ✓
- SEO Optimized: ✓
- Fast Load Time: ✓

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint

## 📝 Content Updates

### Update Projects

Edit `components/Projects.tsx` and add your projects to the `projects` array.

### Update Skills

Edit `components/Skills.tsx` and modify the `skillCategories` array.

### Update Timeline

Edit `components/Experience.tsx` and update the `timeline` array.

## 🌐 Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourprofile
```

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache
rm -rf .next
npm install
npm run build
```

### Port Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Feel free to fork and customize this portfolio for your use!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Anuj Jha**

- GitHub: [@62jhaanuj-dotcom](https://github.com/62jhaanuj-dotcom)
- LinkedIn: [anuj-jha-8b41b9262](https://www.linkedin.com/in/anuj-jha-8b41b9262)
- Email: your.email@example.com

## 🎯 Next Steps

1. Customize all content with your information
2. Add your project images and details
3. Update social media links
4. Deploy to your hosting platform
5. Share with recruiters and potential clients

---

Made with 💙 using Next.js, TypeScript & Framer Motion
