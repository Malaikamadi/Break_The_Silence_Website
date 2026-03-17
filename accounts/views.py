from django.contrib.auth import get_user_model
from rest_framework import generics, permissions, viewsets

from .serializers import RegisterSerializer, UserSerializer

User = get_user_model()


class RegisterView(generics.CreateAPIView):
    """Public endpoint — anyone can register an account."""

    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]


class UserViewSet(viewsets.ModelViewSet):
    """Admin-only CRUD on all users. Regular users can read their own profile
    via /api/v1/accounts/me/ (see urls.py)."""

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]
    search_fields = ["username", "email", "first_name", "last_name"]
    filterset_fields = ["role"]
    ordering_fields = ["date_joined", "username"]


class MeView(generics.RetrieveUpdateAPIView):
    """Authenticated user can view/update their own profile."""

    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user
