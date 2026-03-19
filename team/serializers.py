from rest_framework import serializers
from .models import TeamMember


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = [
            "id",
            "name",
            "position",
            "credentials",
            "bio",
            "education",
            "experience",
            "focus_areas",
            "stats",
            "image",
            "is_featured",
            "order",
            "linkedin_url",
            "twitter_url",
            "email",
        ]
