# Bhavesh Thakor — Python Developer Portfolio

A responsive React + TypeScript portfolio built with Vite, Tailwind CSS v4 and Framer Motion.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally (Windows PowerShell)
```powershell
# 1. Extract the ZIP and open this folder in VS Code
# 2. Open the VS Code terminal in the project folder
npm install
npm run dev
```
Open the local URL printed by Vite, usually http://localhost:5173.

## Production build
```powershell
npm run build
npm run preview
```
The production website is generated in `dist/`.

## Before publishing
Edit `src/data.ts`:
- Replace GitHub and LinkedIn placeholders with your real profile URLs.
- Verify your email and phone number.
- Add the Tour & Travel repository URL if available.
- Update project descriptions to match implemented functionality.

Add your actual resume as `public/resume.pdf`. The hero's Download Resume link points to this file.

The contact form uses `mailto:` and opens the visitor's default email application. It does not store or send form submissions on a server. For a production contact backend, connect a form service or your own API.

## Deploy to Vercel
1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Click Deploy.

No environment variables are required for the static portfolio.
