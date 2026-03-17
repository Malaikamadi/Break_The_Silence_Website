from rest_framework import serializers

from .models import Event


class EventSerializer(serializers.ModelSerializer):
    created_by = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Event
        fields = [
            "id",
            "name",
            "slug",
            "description",
            "venue",
            "date",
            "end_date",
            "registration_link",
            "capacity",
            "featured_image",
            "is_published",
            "created_by",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "created_by", "created_at", "updated_at"]
