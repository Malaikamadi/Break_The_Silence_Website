from django.conf import settings
from django.db import models


class Event(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    description = models.TextField()
    venue = models.CharField(max_length=255)
    date = models.DateTimeField()
    end_date = models.DateTimeField(blank=True, null=True)
    registration_link = models.URLField(blank=True)
    capacity = models.PositiveIntegerField(default=0, help_text="0 = unlimited")
    featured_image = models.ImageField(
        upload_to="events/%Y/%m/",
        blank=True,
    )
    is_published = models.BooleanField(default=False)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="events",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-date"]

    def __str__(self):
        return self.name
