from django.conf import settings
from django.db import models


class Volunteer(models.Model):
    class Availability(models.TextChoices):
        WEEKDAYS = "weekdays", "Weekdays"
        WEEKENDS = "weekends", "Weekends"
        BOTH = "both", "Both"
        FLEXIBLE = "flexible", "Flexible"

    class ApprovalStatus(models.TextChoices):
        PENDING = "pending", "Pending"
        APPROVED = "approved", "Approved"
        REJECTED = "rejected", "Rejected"

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="volunteer_profile",
        help_text="Link to a registered user account (optional for walk-in volunteers)",
    )
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    skills = models.TextField(
        blank=True,
        help_text="Comma-separated list of skills",
    )
    availability = models.CharField(
        max_length=20,
        choices=Availability.choices,
        default=Availability.FLEXIBLE,
    )
    approved_status = models.CharField(
        max_length=20,
        choices=ApprovalStatus.choices,
        default=ApprovalStatus.PENDING,
    )
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.full_name
