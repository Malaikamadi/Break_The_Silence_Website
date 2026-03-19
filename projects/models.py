from django.conf import settings
from django.db import models


class ProjectCategory(models.Model):
    """Categories for filtering projects (e.g. Updates, Events, Stories)."""

    slug = models.SlugField(max_length=50, unique=True)
    label = models.CharField(max_length=100)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order", "label"]
        verbose_name_plural = "Project categories"

    def __str__(self):
        return self.label


class Project(models.Model):
    class Status(models.TextChoices):
        PLANNED = "planned", "Planned"
        ONGOING = "ongoing", "Ongoing"
        COMPLETED = "completed", "Completed"
        SUSPENDED = "suspended", "Suspended"

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    description = models.TextField()
    location = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.PLANNED,
    )
    impact_metrics = models.JSONField(
        default=dict,
        blank=True,
        help_text="Flexible key-value pairs, e.g. {'kg_recycled': 500, 'youth_trained': 30}",
    )
    featured_image = models.ImageField(
        upload_to="projects/%Y/%m/",
        blank=True,
    )
    is_featured = models.BooleanField(
        default=False,
        help_text="Show this project in the hero slider on the homepage.",
    )
    category = models.ForeignKey(
        "ProjectCategory",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="projects",
        help_text="Category for filtering (Updates, Events, Stories).",
    )
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name="projects",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-start_date"]

    def __str__(self):
        return self.title
