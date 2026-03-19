from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register("", views.TeamMemberViewSet, basename="team")

urlpatterns = [
    path("", include(router.urls)),
]
