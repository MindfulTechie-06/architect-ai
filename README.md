# Architect AI Automation - Next.js App

This project was built using Next.js (App Router), TailwindCSS, and React, generated from the AI Automation Agency Kinetic Brutalist design.

## 1. Project Structure
- `src/app/page.tsx`: The main landing page consolidating the UI.
- `src/app/layout.tsx`: Global layout with imported Space Grotesk and Inter fonts.
- `src/app/globals.css`: Tailwind configuration and custom CSS variables.
- `src/components/`: Modular UI blocks (Hero, Pricing, Case Studies, etc.).
- `tailwind.config.ts`: Custom utility configurations for the brute-force colors.

## 2. Setup Instructions to Run Locally
Ensure you have Node.js installed (v18.17+ recommended).

1. Open your terminal in the `ai-agency-app` directory.
2. Install dependencies (already completed if you ran `create-next-app`):
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## 3. Environment Variables
No third-party APIs are currently integrated into the UI. If you add database connections or API keys later, create a `.env.local` file in the root:
```env
# Example .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 4. Steps to Push to GitHub
If you haven't initialized git yet:
```bash
git init
git add .
git commit -m "Initial commit from Agent"
git branch -M main
git remote add origin https://github.com/yourusername/ai-agency-app.git
git push -u origin main
```

## 5. Steps to Deploy on Vercel (Recommended)
Since this is a Next.js application, Vercel is the optimal hosting platform.
1. Push your code to a GitHub repository (see step 4).
2. Go to [Vercel.com](https://vercel.com/) and log in with your GitHub account.
3. Click **Add New** > **Project** and select your `ai-agency-app` repository.
4. The Build Command (`npm run build`) and Output Directory (`.next`) will be auto-detected correctly.
5. Click **Deploy**. Vercel will build and assign you a live HTTPS URL in under 2 minutes.
