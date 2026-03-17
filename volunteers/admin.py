from django.contrib import admin

from .models import Volunteer


@admin.register(Volunteer)
class VolunteerAdmin(admin.ModelAdmin):
    list_display = ["full_name", "email", "availability", "approved_status", "created_at"]
    list_filter = ["approved_status", "availability"]
    search_fields = ["full_name", "email", "skills"]
    list_editable = ["approved_status"]
    raw_id_fields = ["user"]
