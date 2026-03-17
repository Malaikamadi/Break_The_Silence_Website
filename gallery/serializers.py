from rest_framework import serializers

from .models import GalleryImage


class GalleryImageSerializer(serializers.ModelSerializer):
    project_title = serializers.CharField(source="project.title", read_only=True)

    class Meta:
        model = GalleryImage
        fields = [
            "id",
            "image",
            "caption",
            "project",
            "project_title",
            "is_featured",
            "uploaded_at",
        ]
        read_only_fields = ["id", "uploaded_at"]
