from django.contrib import admin

from .models import GalleryImage


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ["__str__", "project", "is_featured", "uploaded_at"]
    list_filter = ["is_featured", "project"]
    search_fields = ["caption"]
    raw_id_fields = ["project"]
