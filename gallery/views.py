from rest_framework import viewsets

from config.permissions import IsAdminOrReadOnly

from .models import GalleryImage
from .serializers import GalleryImageSerializer


class GalleryImageViewSet(viewsets.ModelViewSet):
    queryset = GalleryImage.objects.select_related("project")
    serializer_class = GalleryImageSerializer
    permission_classes = [IsAdminOrReadOnly]
    search_fields = ["caption"]
    filterset_fields = ["project", "is_featured"]
    ordering_fields = ["uploaded_at"]
