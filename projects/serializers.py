from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    created_by = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "slug",
            "description",
            "location",
            "is_featured",
            "start_date",
            "end_date",
            "status",
            "impact_metrics",
            "featured_image",
            "created_by",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "created_by", "created_at", "updated_at"]
