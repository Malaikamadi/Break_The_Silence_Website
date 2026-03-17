from rest_framework import permissions, viewsets

from .models import Volunteer
from .serializers import VolunteerAdminSerializer, VolunteerSerializer


class VolunteerViewSet(viewsets.ModelViewSet):
    """
    Public users can CREATE a volunteer application (POST).
    Only admin/staff can list, update, or delete volunteer records.
    """

    search_fields = ["full_name", "email", "skills"]
    filterset_fields = ["approved_status", "availability"]
    ordering_fields = ["created_at", "full_name"]

    def get_queryset(self):
        return Volunteer.objects.select_related("user")

    def get_serializer_class(self):
        if self.request.user.is_staff:
            return VolunteerAdminSerializer
        return VolunteerSerializer

    def get_permissions(self):
        if self.action == "create":
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
