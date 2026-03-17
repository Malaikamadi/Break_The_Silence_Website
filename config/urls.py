from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

admin.site.site_header = "Break the Silence — Admin"
admin.site.site_title = "BTS Admin"
admin.site.index_title = "Dashboard"

api_v1 = [
    path("auth/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("auth/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("accounts/", include("accounts.urls")),
    path("projects/", include("projects.urls")),
    path("events/", include("events.urls")),
    path("blog/", include("blog.urls")),
    path("gallery/", include("gallery.urls")),
    path("volunteers/", include("volunteers.urls")),
    path("donations/", include("donations.urls")),
]

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/", include((api_v1, "v1"))),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
