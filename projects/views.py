from rest_framework import viewsets

from config.permissions import IsAdminOrReadOnly

from .models import Project
from .serializers import ProjectSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.select_related("created_by")
    serializer_class = ProjectSerializer
    permission_classes = [IsAdminOrReadOnly]
    lookup_field = "slug"
    search_fields = ["title", "description", "location"]
    filterset_fields = ["status", "location"]
    ordering_fields = ["start_date", "created_at", "title"]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
