# Deployment Guide

This project has two parts:
- **Frontend** (Next.js) → Deploy to **Vercel**
- **Backend** (Django) → Deploy to **Render**

## 1. Deploy Backend to Render

1. Go to [render.com](https://render.com) and sign up / log in.
2. Click **New** → **Blueprint**.
3. Connect your GitHub repo `Malaikamadi/Break_The_Silence_Website`.
4. Render will detect `render.yaml` and create:
   - A **Web Service** (Django API)
   - A **PostgreSQL** database
5. After deployment, copy your API URL (e.g. `https://break-the-silence-api.onrender.com`).
6. In Render Dashboard → your Web Service → **Environment**:
   - Add `CORS_ALLOWED_ORIGINS` = your Vercel URL(s), e.g. `https://break-the-silence-website.vercel.app`
   - Ensure `SECRET_KEY` is set (Render auto-generates it).

## 2. Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com) and connect your GitHub repo.
2. Set **Root Directory** to `frontend`.
3. Add **Environment Variables**:
   - `NEXT_PUBLIC_API_URL` = `https://your-render-api-url.onrender.com/api/v1`
   - `NEXT_PUBLIC_SITE_URL` = `https://your-vercel-site.vercel.app`
4. Deploy.

## 3. Connect Them

- **Vercel** (frontend) fetches data from **Render** (backend) via `NEXT_PUBLIC_API_URL`.
- **Render** allows requests from Vercel via `CORS_ALLOWED_ORIGINS`.

## 4. Create Admin User (Backend)

After the backend is deployed, create a superuser to access the admin:

```bash
# Option A: Use Render Shell
# In Render Dashboard → your Web Service → Shell, run:
python manage.py createsuperuser

# Option B: Run locally pointing to Render DB (if you have DATABASE_URL)
DATABASE_URL=your-render-db-url python manage.py createsuperuser
```

Then visit `https://your-api-url.onrender.com/admin/` to log in.

## 5. Media Files (Images)

Render's free tier has **ephemeral storage** — uploaded files (e.g. team photos, project images) are lost on redeploy. For production, consider:

- [Cloudinary](https://cloudinary.com) for image uploads
- [AWS S3](https://aws.amazon.com/s3/) for file storage

Update Django settings to use your chosen storage backend.
