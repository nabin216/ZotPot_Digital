# Zotpot Digital Pvt. Ltd. - Website

## Live link: https://nabin216.github.io/ZotPot_Digital/

A modern, responsive website for Zotpot Digital Pvt. Ltd., built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom brand colors
- **Animations**: Framer Motion for smooth, professional animations
- **Responsive Design**: Mobile-first approach, works on all devices
- **SEO Optimized**: Meta tags and structured data
- **Reusable Components**: Modular component architecture
- **Performance**: Optimized for speed and efficiency

## 🎨 Brand Colors

- **Primary**: `#FF6D00` (Orange)
- **Secondary**: `#222831` (Dark Gray)
- **Accent**: `#00ADB5` (Teal)
- **Background**: `#F5F5F5` (Light Gray)

## 📁 Project Structure

```
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── about/            # About Us page
│   │   ├── services/         # Services page
│   │   ├── portfolio/        # Portfolio page
│   │   ├── contact/          # Contact page
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles
│   ├── components/           # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── CTABanner.tsx
│   │   └── sections/         # Page sections
│   └── config/               # Configuration files
│       └── theme.ts          # Theme configuration
├── public/                   # Static assets
│   └── favicon.ico
├── package.json
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## 🛠️ Installation & Setup

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

3. **Build for Production**

   ```bash
   npm run build
   npm start
   ```

## 📄 Pages

### Home Page (`/`)
- Hero section with bold headline and CTAs
- Services overview (6 service cards)
- About preview section
- Why Choose Us section
- CTA banner

### About Us (`/about`)
- Company introduction
- Mission & Vision
- What makes us unique
- Team section with member profiles

### Services (`/services`)
- Web & App Development
- AI & Automation (n8n, AI assistants, chatbots)
- Digital Marketing
- Cloud & Deployment
- IT Consultancy

Each service includes:
- Detailed descriptions
- Feature lists
- Technology stack information
- CTA buttons

### Portfolio (`/portfolio`)
- Grid layout with project cards
- Project images, descriptions, and tags
- Category filtering

### Contact (`/contact`)
- Inquiry form (name, email, service type, message)
- Contact information cards
- Google Maps placeholder (can be integrated with API key)

## 🎯 Key Components

- **Navbar**: Sticky navigation with mobile menu
- **Footer**: Company info, links, contact details, social media
- **Button**: Reusable button component with variants
- **ServiceCard**: Service display cards with icons
- **CTABanner**: Call-to-action banner section

## 🔧 Configuration

### Tailwind CSS
Custom colors and fonts are configured in `tailwind.config.js`.

### Theme
Brand colors, typography, and spacing are defined in `src/config/theme.ts`.

### SEO
Meta tags are configured in each page's metadata export.

## 📱 Responsive Breakpoints

- Mobile: Default (< 768px)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large Desktop: `xl:` (1280px+)

## 🚀 Deployment

This site can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting service

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## 📝 Customization

### Update Brand Colors
Edit `tailwind.config.js` and `src/config/theme.ts`.

### Add/Modify Services
Update services arrays in:
- `src/components/sections/ServicesOverview.tsx`
- `src/app/services/page.tsx`

### Update Team Members
Edit the `teamMembers` array in `src/components/sections/about/TeamSection.tsx`.

### Integrate Google Maps
1. Get a Google Maps API key
2. Update `src/components/sections/contact/MapPlaceholder.tsx`
3. Uncomment and configure the iframe

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill the process using port 3000
npx kill-port 3000
# Then run again
npm run dev
```

**Module not found errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

© 2024 Zotpot Digital Pvt. Ltd. All rights reserved.

---

**Built with ❤️ by Zotpot Digital**

