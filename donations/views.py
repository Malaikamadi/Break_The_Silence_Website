from rest_framework import permissions, viewsets

from .models import Donation
from .serializers import DonationSerializer


class DonationViewSet(viewsets.ModelViewSet):
    """
    Structure-only viewset.
    - POST is open (guests can initiate a donation).
    - All other actions require admin access.
    Payment processing hooks will be added when a gateway is integrated.
    """

    queryset = Donation.objects.select_related("donor", "project")
    serializer_class = DonationSerializer
    search_fields = ["donor_name", "email", "transaction_reference"]
    filterset_fields = ["payment_status", "currency", "project"]
    ordering_fields = ["created_at", "amount"]

    def get_permissions(self):
        if self.action == "create":
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
