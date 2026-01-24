# Deploying to Render - Setup Guide

## Step 1: Push to GitHub

Run these commands in your project folder:

```bash
cd C:\users\nates\Projects\portfolio-site-repo

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-site-repo.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Make the repo private:**
- Go to your repo on GitHub → Settings → scroll to "Danger Zone" → Change repository visibility → Private

## Step 2: Create Render Account

1. Go to https://render.com
2. Sign up with GitHub (easier for deployment)
3. Create new account

## Step 3: Connect to Render

1. Click "New +" → "Web Service"
2. Connect your GitHub account if prompted
3. Select `portfolio-site-repo` repository
4. Fill in:
   - **Name**: portfolio-backend
   - **Environment**: Node
   - **Region**: Oregon (or your preference)
   - **Branch**: main
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Plan**: Free

5. Click "Create Web Service"

## Step 4: Deploy Frontend (Static Site)

1. Click "New +" → "Static Site"
2. Select `portfolio-site-repo` again
3. Fill in:
   - **Name**: portfolio-frontend
   - **Branch**: main
   - **Build Command**: `cd client && npm install && npm run build`
   - **Publish directory**: `client/dist`
   - **Plan**: Free

4. Click "Create Static Site"

## Step 5: Connect Your Domain

**For Frontend:**
1. In portfolio-frontend service → Settings → Custom Domain
2. Add your domain: `n8shutter.dev`
3. Follow DNS instructions from Render

**For Backend API:**
1. In portfolio-backend service → Settings → Custom Domain
2. Add subdomain: `api.n8shutter.dev`

## Step 6: Update Frontend to Call Your API

When backend is deployed, update your React code to use the live API URL:

In any component that calls the backend, replace:
```
http://localhost:5000/api/...
```
with:
```
https://api.n8shutter.dev/api/...
```

Or set an environment variable in your `.env.production`

## Troubleshooting

- **Free tier goes to sleep**: Render free services sleep after 15 mins of inactivity
- **Check logs**: Click service → Logs tab to see deployment/runtime errors
- **Rebuild**: Click "Deploy" to manually redeploy if needed

## Next Steps (After Testing)

- Upgrade to paid tier for always-on service ($7/month)
- Add custom emails to your domain
- Set up CI/CD automation
