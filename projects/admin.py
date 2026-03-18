from django.contrib import admin

from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ["title", "status", "is_featured", "location", "start_date", "end_date"]
    list_filter = ["status", "is_featured", "start_date"]
    search_fields = ["title", "description", "location"]
    prepopulated_fields = {"slug": ("title",)}
    date_hierarchy = "start_date"
