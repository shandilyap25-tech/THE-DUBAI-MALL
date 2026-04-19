# 🚀 Netlify Deployment Guide

This guide will help you deploy **The Dubai Mall** website to Netlify with automatic continuous deployment.

## Quick Start - 5 Minutes

### Step 1: Connect GitHub to Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Click **"New site from Git"**
3. Select **GitHub** as your provider
4. Authorize Netlify to access your repositories
5. Select the **The-Dubai-Mall** repository
6. Click **"Deploy site"**

Netlify will automatically:
- Detect your `netlify.toml` configuration
- Set build command: `npm run build`
- Set publish directory: `dist`
- Start the first deployment

### Step 2: Configure Environment Variables

1. Go to **Site settings → Build & deploy → Environment**
2. Add these secrets from your GitHub repository settings:

```
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

### Step 3: Your Site is Live! 🎉

- **Production URL:** `https://mall.netlify.app`
- Every push to `main` branch triggers automatic deployment
- Pull requests get preview deployments

---

## Detailed Setup Instructions

### 1. Prepare Your Repository

```bash
# Initialize Git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Dubai Mall app"

# Create main branch and push
git branch -M main
git remote add origin https://github.com/yourusername/The-Dubai-Mall.git
git push -u origin main
```

### 2. Set Up GitHub Secrets

These are needed for GitHub Actions to build and deploy your app.

1. Go to your GitHub repository
2. Click **Settings → Secrets and variables → Actions**
3. Click **"New repository secret"**
4. Add these secrets one by one:

| Secret Name | Value |
|------------|-------|
| `VITE_GEMINI_API_KEY` | Your Gemini API key |
| `VITE_FIREBASE_API_KEY` | Your Firebase API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Your Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Your Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Your Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Your Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Your Firebase app ID |
| `NETLIFY_SITE_ID` | Your Netlify site ID (see below) |
| `NETLIFY_AUTH_TOKEN` | Your Netlify auth token (see below) |

### 3. Get Netlify Credentials

#### Get Site ID:
1. Go to Netlify site settings
2. Go to **Site information → Site ID**
3. Copy the ID and add to GitHub secrets as `NETLIFY_SITE_ID`

#### Get Auth Token:
1. Go to [Netlify user settings](https://app.netlify.com/user/applications)
2. Click **"New access token"**
3. Name it: `GitHub Actions`
4. Copy and add to GitHub secrets as `NETLIFY_AUTH_TOKEN`

### 4. How Deployments Work

#### Automatic Deployments:
- **Push to `main` branch:** Deploys to `https://mall.netlify.app` (production)
- **Push to `develop` branch:** Deploys to preview URL
- **Create Pull Request:** Creates preview deployment for testing

#### Manual Deployments:

**Via Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
```

**Via Netlify Dashboard:**
1. Go to Netlify dashboard
2. Select your site
3. Click **"Deploy settings"**
4. Click **"Trigger deploy → Deploy site"**

---

## Environment Variables Reference

### Gemini API
Get from: https://ai.google.dev/
```
VITE_GEMINI_API_KEY=your_key
```

### Firebase
Get from: https://console.firebase.google.com/

1. Go to Project settings (⚙️ icon)
2. Select **"General"** tab
3. Scroll to **"Your apps"** section
4. Under **SDK setup** section, copy:
   - `apiKey` → `VITE_FIREBASE_API_KEY`
   - `authDomain` → `VITE_FIREBASE_AUTH_DOMAIN`
   - `projectId` → `VITE_FIREBASE_PROJECT_ID`
   - `storageBucket` → `VITE_FIREBASE_STORAGE_BUCKET`
   - `messagingSenderId` → `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `appId` → `VITE_FIREBASE_APP_ID`

---

## Configuration Files

### netlify.toml
Already created with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing (all routes redirect to index.html)
- Security headers
- Cache rules
- Environment variables for all contexts

### .github/workflows/deploy.yml
GitHub Actions workflow that:
- Runs on every push to `main` and `develop`
- Runs on every pull request to `main`
- Builds the application
- Deploys to Netlify (production on main, preview on PR)
- Comments on PRs with deployment status

---

## Troubleshooting

### Build Fails on Netlify

**Error: npm ERR! code ENOVERSIONS**
- Solution: Node version mismatch
- Fix: Update `netlify.toml` NODE_VERSION to your Node version
```bash
node --version  # Check your version locally
```

**Error: Missing environment variable**
- Solution: Variables not set in Netlify
- Fix: Go to Site settings → Environment and add all variables

**Error: Port already in use**
- Solution: Netlify is trying to use a port that's taken
- Fix: Usually resolves on next deploy

### GitHub Actions Workflow Not Running

**Workflow not triggering:**
- Make sure `deploy.yml` is in `.github/workflows/`
- Push code to trigger workflows:
```bash
git add .
git commit -m "Trigger workflow"
git push origin main
```

**Secrets not found in workflow:**
- Go to GitHub repo → Settings → Secrets
- Verify all secrets are set correctly
- Redeploy to use updated secrets

### Site Shows 404 Errors

**All routes show 404:**
- Netlify redirects might be misconfigured
- Check `netlify.toml` has the redirect rule:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Custom Domain Not Working

1. Buy domain (GoDaddy, Namecheap, etc.)
2. In Netlify: Go to **Site settings → Domain management**
3. Click **"Add custom domain"**
4. Enter your domain
5. Follow DNS configuration:
   - Use Netlify's nameservers (recommended), OR
   - Add Netlify's CNAME record

---

## Performance Optimization

### Caching Strategy
Static assets have 1-year cache, HTML has no cache (always fresh).

### CDN
Netlify serves your site from a global CDN for fast performance worldwide.

### Build Optimization
- CSS minification
- JavaScript minification
- Asset optimization
- Tree shaking

---

## Monitoring & Analytics

### View Deployments
1. Go to Netlify dashboard
2. Click **"Deploys"** tab
3. See all deployments and their status

### Enable Netlify Analytics (Optional)
1. Go to **Site settings → Analytics → Enable Netlify Analytics**
2. View visitor stats and performance metrics

### GitHub Actions Logs
1. Go to GitHub repo → **Actions** tab
2. Click the workflow run
3. See build logs and deployment status

---

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Connect GitHub to Netlify
3. ✅ Configure environment variables
4. ✅ Set up GitHub secrets (optional for CI/CD)
5. ✅ Verify deployment at `https://mall.netlify.app`
6. 🎉 Your site is live!

---

## Support & Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vite Documentation](https://vitejs.dev/)

---

**Last Updated:** April 2026
**Status:** ✅ Ready for Production
