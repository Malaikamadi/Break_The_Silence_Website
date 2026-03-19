from django.db import models


class TeamMember(models.Model):
    """Leadership and team members for the About page."""

    name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    credentials = models.CharField(
        max_length=100,
        blank=True,
        help_text="e.g. PhD, MSc, BSc",
    )
    bio = models.TextField(
        blank=True,
        help_text="Short biography for the team member.",
    )
    image = models.ImageField(
        upload_to="team/%Y/%m/",
        blank=True,
    )
    is_featured = models.BooleanField(
        default=False,
        help_text="Show as the main featured leader (only one should be featured).",
    )
    order = models.PositiveIntegerField(
        default=0,
        help_text="Display order (lower = first).",
    )
    linkedin_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    email = models.EmailField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["order", "name"]
        verbose_name = "Team Member"
        verbose_name_plural = "Team Members"

    def __str__(self):
        return f"{self.name} — {self.position}"
