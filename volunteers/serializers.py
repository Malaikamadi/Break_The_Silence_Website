from rest_framework import serializers

from .models import Volunteer


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = [
            "id",
            "user",
            "full_name",
            "email",
            "phone",
            "skills",
            "availability",
            "approved_status",
            "notes",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "approved_status", "created_at", "updated_at"]


class VolunteerAdminSerializer(serializers.ModelSerializer):
    """Admin can update approval status."""

    class Meta:
        model = Volunteer
        fields = VolunteerSerializer.Meta.fields
        read_only_fields = ["id", "created_at", "updated_at"]
