# 🚀 Vercel Deployment Guide

This guide will help you deploy **The Dubai Mall** website to Vercel with automatic continuous deployment.

## Quick Start - 5 Minutes

### Step 1: Connect GitHub to Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign up/Login with your GitHub account
3. Click **"New Project"**
4. Select **"Import Git Repository"**
5. Select the **The-Dubai-Mall** repository
6. Vercel will automatically detect your framework (Vite)
7. Click **"Deploy"**

Vercel will automatically:
- Detect your `vercel.json` configuration
- Set build command: `npm run build`
- Set output directory: `dist`
- Start the first deployment

### Step 2: Configure Environment Variables

1. Go to **Project Settings → Environment Variables**
2. Add these variables:

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

- **Production URL:** `https://the-dubai-mall.vercel.app`
- Every push to `main` branch triggers automatic deployment
- Pull requests get preview deployments

---

## Detailed Setup Instructions

### 1. Deploy via Vercel Dashboard (Easiest)

1. **Sign in to Vercel:**
   - Go to https://vercel.com/
   - Click "Sign in" → "Continue with GitHub"

2. **Import Repository:**
   - Click "New Project"
   - Click "Import Git Repository"
   - Select your GitHub repo

3. **Configure Project:**
   - **Framework Preset:** Vite (auto-detected)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Node Version:** 18

4. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add all variables from Step 2 above
   - Select environments: Production, Preview, Development

5. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Your site goes live! 🎉

### 2. Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

4. **Follow prompts:**
   - Set project name
   - Confirm settings
   - Wait for deployment

### 3. Configure GitHub Actions (Automatic Deployment)

Use the included `.github/workflows/deploy-vercel.yml` for automatic deployments.

**Required GitHub Secrets:**

Go to GitHub repo → Settings → Secrets and variables → Actions → Add:

| Secret Name | Value |
|------------|-------|
| `VITE_GEMINI_API_KEY` | Your Gemini API key |
| `VITE_FIREBASE_API_KEY` | Your Firebase API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Your Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Your Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Your Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Your Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Your Firebase app ID |
| `VERCEL_TOKEN` | Your Vercel auth token |
| `VERCEL_ORG_ID` | Your Vercel organization ID |
| `VERCEL_PROJECT_ID` | Your Vercel project ID |

**Get Vercel Credentials:**

1. **Vercel Token:**
   - Go to [Vercel Settings → Tokens](https://vercel.com/account/tokens)
   - Click "Create"
   - Name: `GitHub Actions`
   - Copy and add to GitHub secrets as `VERCEL_TOKEN`

2. **Project ID:**
   - Go to your project on Vercel
   - Click "Settings" tab
   - Copy **Project ID** and add to GitHub secrets as `VERCEL_PROJECT_ID`

3. **Organization ID:**
   - Go to [Vercel Account Settings](https://vercel.com/account)
   - Look for **Team ID** or **Organization ID**
   - Add to GitHub secrets as `VERCEL_ORG_ID`

---

## How Deployments Work

### Automatic Deployments (with GitHub Actions)

- **Push to `main`** → Deploys to production (vercel.app)
- **Push to `develop`** → Preview deployment
- **Create Pull Request** → Test deployment

### Production vs Preview Deployments

**Production Deployment:**
- Only triggers on `main` branch
- Gets production URL: `https://the-dubai-mall.vercel.app`
- Indexed by search engines
- Full performance optimization

**Preview Deployment:**
- Triggers on all other branches and PRs
- Gets unique preview URL: `https://the-dubai-mall-[hash].vercel.app`
- Not indexed by search engines
- Great for testing before merging

---

## Configuration Reference

### vercel.json

Key settings already configured:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "nodeVersion": "18.x"
}
```

### Routing

All routes redirect to `index.html` for SPA routing (already configured).

### Headers

Security headers configured:
- X-Frame-Options (clickjacking protection)
- X-Content-Type-Options (MIME type sniffing protection)
- X-XSS-Protection (cross-site scripting protection)

### Caching

- Static assets (1 year cache)
- HTML files (no cache - always fresh)

---

## Domain Configuration

### Using Vercel Domain

1. Your site gets a free `.vercel.app` domain:
   - `https://the-dubai-mall.vercel.app`

### Using Custom Domain

1. **Buy a domain** from:
   - GoDaddy
   - Namecheap
   - Google Domains
   - Vercel Domains (integrated)

2. **Connect to Vercel:**
   - Go to Project → Settings → Domains
   - Add your custom domain
   - Follow DNS configuration

3. **DNS Options:**
   - **Nameservers** (easiest): Point domain registrar to Vercel's nameservers
   - **CNAME** (if using nameservers elsewhere): Add CNAME record

---

## Troubleshooting

### Build Fails

**Error: npm ERR! code ENOVERSIONS**
- Node version mismatch
- Solution: Update `vercel.json` `nodeVersion`

**Error: Missing environment variable**
- Variables not set in Vercel
- Solution: Go to Project Settings → Environment Variables → Add all variables

**Error: npm install fails**
- Package compatibility issue
- Solution: Check `package-lock.json`, run `npm ci` locally

### Deployment Issues

**Build succeeds but site shows blank**
- Routing issue with SPA
- Check `vercel.json` has the catch-all route

**404 errors on refresh**
- SPA routing not configured
- Solution: Ensure `vercel.json` has:
```json
"routes": [
  {"src": "/(.*)", "dest": "/index.html"}
]
```

**Environmental variables not working**
- Variables not deployed yet
- Solution: Redeploy after adding variables
- Click "Redeploy" in Vercel dashboard

### Performance Issues

**Site loads slowly**
- Check build size: `npm run build` and check `dist/` folder
- Optimize images
- Enable Vercel Analytics to identify bottlenecks

**Functions timing out**
- API calls taking too long
- Increase timeout in `vercel.json`

---

## Performance & Analytics

### Enable Vercel Analytics

1. Project → Settings → Analytics
2. Enable "Web Analytics"
3. View real user metrics

### Check Build Performance

1. Go to Deployments
2. Click a deployment
3. View build logs and performance

### Optimize Your Site

1. **Code splitting:** Vite does this automatically
2. **Image optimization:** Use modern formats (WebP)
3. **Lazy loading:** Load components on demand
4. **Minification:** Vite minifies automatically
5. **Tree shaking:** Vite removes unused code

---

## Vercel vs Netlify Comparison

| Feature | Vercel | Netlify |
|---------|--------|---------|
| Free tier | ✅ Yes | ✅ Yes |
| Automatic deployment | ✅ Yes | ✅ Yes |
| Preview deployments | ✅ Yes | ✅ Yes |
| Custom domains | ✅ Yes | ✅ Yes |
| Edge functions | ✅ Yes | ✅ Yes |
| Analytics | ✅ Yes | ✅ Yes |
| Serverless functions | ✅ Yes | ✅ Yes (Forms) |
| Global CDN | ✅ Yes | ✅ Yes |

---

## Next Steps

1. ✅ Create `vercel.json` and workflows
2. ✅ Push to GitHub
3. Go to [Vercel](https://vercel.com/) and connect your repo
4. Add environment variables
5. Deploy!
6. View your site at `vercel.app`

---

## Support & Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel CLI Reference](https://vercel.com/docs/cli)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vite Documentation](https://vitejs.dev/)

---

**Last Updated:** April 2026
**Status:** ✅ Ready for Production
