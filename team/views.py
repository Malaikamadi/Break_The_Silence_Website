from rest_framework import viewsets
from config.permissions import IsAdminOrReadOnly
from .models import TeamMember
from .serializers import TeamMemberSerializer


class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    """Public read-only API for team/leadership members."""

    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer
    permission_classes = [IsAdminOrReadOnly]
    pagination_class = None  # Return all team members
