from django.contrib import admin

from .models import Event


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ["name", "venue", "date", "capacity", "is_published"]
    list_filter = ["is_published", "date"]
    search_fields = ["name", "description", "venue"]
    prepopulated_fields = {"slug": ("name",)}
    date_hierarchy = "date"
