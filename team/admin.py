from django.contrib import admin
from .models import TeamMember


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ["name", "position", "is_featured", "order"]
    list_filter = ["is_featured"]
    search_fields = ["name", "position", "bio"]
    ordering = ["order", "name"]
