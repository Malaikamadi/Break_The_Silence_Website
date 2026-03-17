from rest_framework import serializers

from .models import Donation


class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = [
            "id",
            "donor",
            "donor_name",
            "email",
            "amount",
            "currency",
            "payment_status",
            "transaction_reference",
            "project",
            "notes",
            "created_at",
            "updated_at",
        ]
        read_only_fields = [
            "id",
            "payment_status",
            "transaction_reference",
            "created_at",
            "updated_at",
        ]
