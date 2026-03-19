from django.contrib import admin

from .models import Project, ProjectCategory


@admin.register(ProjectCategory)
class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = ["label", "slug", "order"]
    prepopulated_fields = {"slug": ("label",)}


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ["title", "status", "category", "is_featured", "location", "start_date", "end_date"]
    list_filter = ["status", "category", "is_featured", "start_date"]
    search_fields = ["title", "description", "location"]
    prepopulated_fields = {"slug": ("title",)}
    date_hierarchy = "start_date"
