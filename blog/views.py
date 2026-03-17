from rest_framework import viewsets

from config.permissions import IsAdminOrReadOnly

from .models import Post
from .serializers import PostListSerializer, PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminOrReadOnly]
    lookup_field = "slug"
    search_fields = ["title", "content"]
    filterset_fields = ["status", "author"]
    ordering_fields = ["published_date", "created_at", "title"]

    def get_queryset(self):
        qs = Post.objects.select_related("author")
        if not (self.request.user.is_authenticated and self.request.user.is_staff):
            qs = qs.filter(status=Post.Status.PUBLISHED)
        return qs

    def get_serializer_class(self):
        if self.action == "list":
            return PostListSerializer
        return PostSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
