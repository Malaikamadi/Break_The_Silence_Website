from django_filters import rest_framework as filters
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from config.permissions import IsAdminOrReadOnly

from .models import Project, ProjectCategory
from .serializers import ProjectCategorySerializer, ProjectSerializer


class ProjectFilter(filters.FilterSet):
    category = filters.CharFilter(field_name="category__slug", lookup_expr="exact")

    class Meta:
        model = Project
        fields = ["status", "location", "is_featured", "category"]


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.select_related("created_by", "category")
    serializer_class = ProjectSerializer
    permission_classes = [IsAdminOrReadOnly]
    lookup_field = "slug"
    search_fields = ["title", "description", "location"]
    filterset_class = ProjectFilter
    ordering_fields = ["start_date", "created_at", "title"]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

    @action(detail=False, methods=["get"], url_path="categories")
    def categories(self, request):
        """List all project categories for filter tabs."""
        categories = ProjectCategory.objects.all()
        serializer = ProjectCategorySerializer(categories, many=True)
        return Response(serializer.data)
