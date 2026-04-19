<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# The Dubai Mall - AI Studio App

A modern, AI-powered web application for The Dubai Mall featuring interactive experiences, real-time chat, search capabilities, and visitor information.

## 🔗 Quick Links

- **Live Site (Netlify):** https://mall.netlify.app
- **Live Site (Vercel):** Deploy and get your link
- **AI Studio:** https://ai.studio/apps/50dc9c17-3421-4c2c-a14b-7f7a3680f3a0
- **GitHub Repository:** https://github.com/yourusername/The-Dubai-Mall
- **Netlify Guide:** See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **Vercel Guide:** See [VERCEL_DEPLOYMENT_GUIDE.md](VERCEL_DEPLOYMENT_GUIDE.md)

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Running Locally](#running-locally)
- [Building for Production](#building-for-production)
- [Hosting & Deployment](#hosting--deployment)
- [Firebase Setup](#firebase-setup)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🤖 **AI Chat Widget** - Real-time AI-powered chatbot integration
- 🔍 **Smart Search** - AI-enhanced search functionality
- 🎬 **Video Background** - YouTube integration with hero sections
- 📍 **Location Services** - Interactive map with visitor information
- 💳 **Investment Simulator** - Financial projection tool
- 🏪 **Shopping & Dining** - Curated sections for retail and food options
- 🎪 **Attractions Guide** - Comprehensive attraction information
- 📱 **Responsive Design** - Mobile-friendly interface
- 🔐 **Firebase Integration** - Real-time database and authentication

## Technologies

- **Frontend Framework:** React 18+ with TypeScript
- **Build Tool:** Vite
- **Styling:** CSS
- **Backend:** Firebase/Firestore
- **AI Services:** Google Gemini API
- **Backend:** Node.js/TypeScript

## Prerequisites

Before running this project, ensure you have:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)
- **Google Gemini API Key**
- **Firebase Project** with Firestore database
- **Git** (for version control)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/The-Dubai-Mall.git
   cd The-Dubai-Mall-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Create a Firestore database
3. Update `firebase-applet-config.json` with your Firebase credentials
4. Review and update `firestore.rules` for your security requirements

### Gemini API Key

1. Get your API key from [Google AI Studio](https://ai.google.dev/)
2. Create `.env.local` file in the project root
3. Add your API key:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

## Project Structure

```
The-Dubai-Mall-main/
├── src/
│   ├── components/              # React components
│   │   ├── AboutSection.tsx
│   │   ├── AiStudioSection.tsx
│   │   ├── AttractionsSection.tsx
│   │   ├── CallToActionSection.tsx
│   │   ├── ChatWidget.tsx       # AI chat integration
│   │   ├── ExperienceSection.tsx
│   │   ├── FoodDiningSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── InvestmentSimulator.tsx
│   │   ├── Navbar.tsx
│   │   ├── SearchOverlay.tsx
│   │   ├── ShoppingSection.tsx
│   │   ├── VisitorInfoMapSection.tsx
│   │   ├── WhatsNewSection.tsx
│   │   └── YouTubeBackground.tsx
│   ├── lib/
│   │   └── firebase.ts          # Firebase configuration
│   ├── services/
│   │   ├── aiChatService.ts     # Gemini chat service
│   │   ├── aiSearchService.ts   # AI search service
│   │   └── firebaseService.ts   # Firebase operations
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── server.ts                    # Node.js server
├── seedTrigger.ts               # Database seeding
├── testAPI.ts                   # API testing
├── firebase-applet-config.json  # Firebase config
├── firestore.rules              # Firestore security rules
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## Running Locally

1. **Development Mode:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or your configured port)

2. **Build for Production:**
   ```bash
   npm run build
   ```

3. **Preview Production Build:**
   ```bash
   npm run preview
   ```

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

## Building for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to your hosting platform:
   - Firebase Hosting
   - Vercel
   - Netlify
   - AWS Amplify
   - Or any static hosting service

## Hosting & Deployment

### Deploy to Netlify

Netlify provides the easiest way to deploy your application with continuous deployment from GitHub.

#### Option 1: Deploy via Netlify UI (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git push origin main
   ```

2. **Sign up/Login to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Sign in with your GitHub account (or create one)

3. **Create a new site from Git:**
   - Click "New site from Git"
   - Select "GitHub" as your git provider
   - Authorize Netlify to access your repositories
   - Select the `The-Dubai-Mall` repository

4. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click "Deploy site"

5. **Add environment variables:**
   - Go to Site settings → Build & deploy → Environment
   - Add the following variables:
     ```
     VITE_GEMINI_API_KEY=your_gemini_api_key
     VITE_FIREBASE_API_KEY=your_firebase_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_firebase_app_id
     ```

#### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

#### Option 3: Create netlify.toml Configuration

Create a `netlify.toml` file in your project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[context.production.environment]
  VITE_GEMINI_API_KEY = ""
  VITE_FIREBASE_API_KEY = ""
  VITE_FIREBASE_AUTH_DOMAIN = ""
  VITE_FIREBASE_PROJECT_ID = ""
  VITE_FIREBASE_STORAGE_BUCKET = ""
  VITE_FIREBASE_MESSAGING_SENDER_ID = ""
  VITE_FIREBASE_APP_ID = ""

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

### Post-Deployment Configuration

1. **Connect Custom Domain:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Follow the DNS configuration instructions
   - Point your domain to Netlify's nameservers or use CNAME record

2. **Enable HTTPS:**
   - Netlify automatically provisions SSL certificate
   - Access is enabled by default

3. **Configure Redirects:**
   - All routes should redirect to `/index.html` for SPA routing
   - Already configured in `netlify.toml`

4. **Set up Continuous Deployment:**
   - Every push to main branch triggers automatic deployment
   - Preview deployments for pull requests
   - Rollback to previous versions from Netlify dashboard

### Netlify Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] Netlify account created and linked to GitHub
- [ ] Environment variables configured
- [ ] Build command verified: `npm run build`
- [ ] Publish directory set to: `dist`
- [ ] Custom domain configured (optional)
- [ ] DNS records updated
- [ ] HTTPS enabled
- [ ] Test app functionality in production
- [ ] Set up monitoring and analytics

### Get Your Deployment Link

Your site is now live! Here are the details:

1. **Live Netlify URL:**
   - Format: `https://[your-site-name].netlify.app`
   - **Your Site:** `https://mall.netlify.app` ✅
   - Access your site from anywhere with internet

2. **Share Your Live Site:**
   - Copy the URL: `https://mall.netlify.app`
   - Share it with team members, stakeholders, or the public
   - URL is automatically HTTPS and production-ready

3. **Update README:**
   - Live site link is now in the "Quick Links" section
   - All deployment configuration is complete

4. **Custom Domain (Optional):**
   - Purchase domain from: GoDaddy, Namecheap, Google Domains, etc.
   - Connect to Netlify for custom URL
   - Example: `https://dubaimall.com` → points to `mall.netlify.app`

### Monitoring & Analytics

1. **Enable Netlify Analytics:**
   - Site settings → Analytics
   - Install Netlify Analytics snippet

2. **View Deployment Logs:**
   - Go to Deployments tab
   - Click on any deployment to view logs
   - Check for build errors or warnings

3. **Set up Site Monitoring:**
   - Enable Status badge
   - Configure webhooks for notifications
   - Integrate with Slack for deployment alerts

### Troubleshooting Netlify Deployment

**Build fails:**
- Check build logs: Deployments → Failed build
- Verify Node.js version compatibility
- Ensure all environment variables are set

**Site shows 404 errors:**
- Verify publish directory is set to `dist`
- Check `netlify.toml` redirect rules
- Clear cache: Site settings → Delete site cache

**Environment variables not working:**
- Redeploy after adding variables
- Use `VITE_` prefix for client-side variables
- Check variable names match exactly

### Performance Optimization

1. **Netlify Edge Functions:**
   - Create functions in `netlify/functions/` directory
   - Serverless functions for API calls
   - Cache responses for better performance

2. **Asset Optimization:**
   - Netlify automatically minifies and optimizes
   - Serve images via Netlify CDN
   - Enable asset optimization in Site settings

3. **DNS Configuration:**
   - Use Netlify's DNS for best performance
   - Faster propagation and auto-renewal of SSL certificates



### Security Rules

Review `firestore.rules` for database security configurations. Update rules based on your requirements:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Add your security rules here
  }
}
```

### Database Seeding

Run the seed trigger to populate initial data:

```bash
npx ts-node seedTrigger.ts
```

## API Testing

Test your APIs using the provided test file:

```bash
npx ts-node testAPI.ts
```

## Scripts Available

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run linting (if configured)
- `npm run type-check` - Run TypeScript type checking

## Troubleshooting

### Common Issues

**Issue: Firebase configuration not loading**
- Ensure `firebase-applet-config.json` exists and contains valid credentials
- Check that Firebase project is properly initialized

**Issue: Gemini API errors**
- Verify `VITE_GEMINI_API_KEY` is correctly set in `.env.local`
- Check API quota and billing status in Google Cloud Console

**Issue: Port already in use**
- Run on a different port: `npm run dev -- --port 3000`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Support

For issues and questions:
- Check existing GitHub issues
- Create a new issue with detailed information
- Include error logs and steps to reproduce

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Gemini AI for chat and search capabilities
- Firebase for backend services
- React and Vite communities
