# Break the Silence — Django REST API Backend

Production-ready backend for the **Break the Silence** NGO, powering youth empowerment, plastic recycling, climate innovation, community events, volunteer management, and donations.

Designed to be consumed by a **Next.js** frontend via a versioned REST API.

---

## Folder Structure

```
Break_The_Silence_Website/
├── config/                  # Django project settings & root URL conf
│   ├── settings.py          # All configuration (DB, JWT, CORS, DRF, etc.)
│   ├── urls.py              # Root URL router — mounts /api/v1/
│   ├── permissions.py       # Shared permission classes
│   ├── wsgi.py
│   └── asgi.py
│
├── accounts/                # Custom User model with roles
│   ├── models.py            # User (admin | staff | volunteer | donor)
│   ├── serializers.py       # UserSerializer, RegisterSerializer
│   ├── views.py             # RegisterView, UserViewSet, MeView
│   ├── urls.py
│   └── admin.py
│
├── projects/                # NGO projects (recycling, climate, etc.)
│   ├── models.py            # Project with impact_metrics JSONField
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
│
├── events/                  # Community events & training programs
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
│
├── blog/                    # Blog / news posts
│   ├── models.py            # Post with draft/published workflow
│   ├── serializers.py       # Separate list & detail serializers
│   ├── views.py
│   ├── urls.py
│   └── admin.py
│
├── gallery/                 # Image gallery linked to projects
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
│
├── volunteers/              # Volunteer applications & approval
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
│
├── donations/               # Donation records (structure only)
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
│
├── manage.py
├── requirements.txt
├── .env.example
└── .gitignore
```

---

## Installation

### Prerequisites

- Python 3.11+
- PostgreSQL 14+
- (Optional) virtualenv or venv

### 1. Clone & enter the project

```bash
cd Break_The_Silence_Website
```

### 2. Create and activate a virtual environment

```bash
python3 -m venv .venv
source .venv/bin/activate   # macOS / Linux
# .venv\Scripts\activate    # Windows
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure environment variables

```bash
cp .env.example .env
# Edit .env with your actual SECRET_KEY and database credentials
```

### 5. Create the PostgreSQL database

```bash
createdb break_the_silence
# Or via psql:
# CREATE DATABASE break_the_silence;
```

### 6. Run migrations

```bash
python manage.py migrate
```

### 7. Create a superuser

```bash
python manage.py createsuperuser
```

### 8. Run the development server

```bash
python manage.py runserver
```

The API is now available at `http://localhost:8000/api/v1/`.

---

## API Endpoints

All endpoints are prefixed with `/api/v1/`.

### Authentication (JWT)

| Method | Endpoint                  | Description            |
|--------|---------------------------|------------------------|
| POST   | `/api/v1/auth/token/`     | Obtain JWT token pair  |
| POST   | `/api/v1/auth/token/refresh/` | Refresh access token |

### Accounts

| Method     | Endpoint                    | Description                  | Access      |
|------------|-----------------------------|------------------------------|-------------|
| POST       | `/api/v1/accounts/register/`| Register a new user          | Public      |
| GET / PUT  | `/api/v1/accounts/me/`      | View / update own profile    | Authenticated |
| GET / POST | `/api/v1/accounts/users/`   | List / create users          | Admin only  |
| GET / PUT / DELETE | `/api/v1/accounts/users/{id}/` | User detail        | Admin only  |

### Projects

| Method     | Endpoint                          | Description              | Access          |
|------------|-----------------------------------|--------------------------|-----------------|
| GET        | `/api/v1/projects/`               | List all projects        | Public          |
| POST       | `/api/v1/projects/`               | Create a project         | Admin only      |
| GET        | `/api/v1/projects/{slug}/`        | Project detail           | Public          |
| PUT / DELETE | `/api/v1/projects/{slug}/`      | Update / delete project  | Admin only      |

### Events

| Method     | Endpoint                        | Description                | Access          |
|------------|---------------------------------|----------------------------|-----------------|
| GET        | `/api/v1/events/`               | List published events      | Public          |
| POST       | `/api/v1/events/`               | Create an event            | Admin only      |
| GET        | `/api/v1/events/{slug}/`        | Event detail               | Public          |
| PUT / DELETE | `/api/v1/events/{slug}/`      | Update / delete event      | Admin only      |

### Blog

| Method     | Endpoint                      | Description                 | Access          |
|------------|-------------------------------|-----------------------------|-----------------|
| GET        | `/api/v1/blog/`               | List published posts        | Public          |
| POST       | `/api/v1/blog/`               | Create a post               | Admin only      |
| GET        | `/api/v1/blog/{slug}/`        | Post detail (full content)  | Public          |
| PUT / DELETE | `/api/v1/blog/{slug}/`      | Update / delete post        | Admin only      |

### Gallery

| Method     | Endpoint                        | Description               | Access          |
|------------|---------------------------------|---------------------------|-----------------|
| GET        | `/api/v1/gallery/`              | List all images            | Public          |
| POST       | `/api/v1/gallery/`              | Upload an image            | Admin only      |
| GET        | `/api/v1/gallery/{id}/`         | Image detail               | Public          |
| PUT / DELETE | `/api/v1/gallery/{id}/`       | Update / delete image      | Admin only      |

### Volunteers

| Method     | Endpoint                          | Description                  | Access          |
|------------|-----------------------------------|------------------------------|-----------------|
| POST       | `/api/v1/volunteers/`             | Submit volunteer application | Public          |
| GET        | `/api/v1/volunteers/`             | List all volunteers          | Admin only      |
| GET / PUT / DELETE | `/api/v1/volunteers/{id}/`| Volunteer detail             | Admin only      |

### Donations (structure only)

| Method     | Endpoint                         | Description               | Access          |
|------------|----------------------------------|---------------------------|-----------------|
| POST       | `/api/v1/donations/`             | Initiate a donation       | Public          |
| GET        | `/api/v1/donations/`             | List all donations        | Admin only      |
| GET / PUT / DELETE | `/api/v1/donations/{id}/`| Donation detail           | Admin only      |

### Query Parameters (all list endpoints)

- `?search=<term>` — full-text search across configured fields
- `?ordering=<field>` — sort results (prefix with `-` for descending)
- `?page=<n>` — pagination (12 items per page by default)
- `?<field>=<value>` — filter by specific field values

---

## Key Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| **Custom User model** | Django best practice — define at project start to avoid painful migrations later |
| **Role field on User** | Simpler than groups for this scale; can upgrade to django-guardian later |
| **JWT (SimpleJWT)** | Stateless auth ideal for a decoupled Next.js frontend |
| **Slug-based lookups** | SEO-friendly URLs for projects, events, and blog posts |
| **JSONField for impact_metrics** | Flexible schema for varying impact data per project |
| **Separate list/detail serializers (blog)** | Avoid sending full post content in list responses |
| **IsAdminOrReadOnly permission** | Public read access + admin write — matches NGO content workflow |
| **URL versioning (/api/v1/)** | Clean versioning strategy when the API evolves |
| **django-filter + SearchFilter** | Declarative, composable filtering without manual queryset logic |
| **SET_NULL on foreign keys** | Preserve records when related objects are deleted |
| **Structure-only donations** | Model is ready; payment gateway integration is a separate concern |

---

## Production Checklist

- [ ] Set `DEBUG=False` and configure `ALLOWED_HOSTS`
- [ ] Use a proper `SECRET_KEY` (generate with `django.core.management.utils.get_random_secret_key()`)
- [ ] Serve static files via whitenoise or a CDN
- [ ] Configure media storage (S3 / Cloudinary for production)
- [ ] Set up HTTPS
- [ ] Run with gunicorn: `gunicorn config.wsgi:application --bind 0.0.0.0:8000`
- [ ] Add rate limiting (django-ratelimit or nginx)
- [ ] Integrate payment gateway for donations (Stripe / M-Pesa / PayPal)
- [ ] Add automated tests
- [ ] Set up CI/CD pipeline
