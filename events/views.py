from rest_framework import viewsets

from config.permissions import IsAdminOrReadOnly

from .models import Event
from .serializers import EventSerializer


class EventViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    permission_classes = [IsAdminOrReadOnly]
    lookup_field = "slug"
    search_fields = ["name", "description", "venue"]
    filterset_fields = ["is_published", "venue"]
    ordering_fields = ["date", "created_at", "name"]

    def get_queryset(self):
        qs = Event.objects.select_related("created_by")
        if not (self.request.user.is_authenticated and self.request.user.is_staff):
            qs = qs.filter(is_published=True)
        return qs

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)
