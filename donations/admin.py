from django.contrib import admin

from .models import Donation


@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = [
        "donor_name",
        "email",
        "amount",
        "currency",
        "payment_status",
        "project",
        "created_at",
    ]
    list_filter = ["payment_status", "currency", "created_at"]
    search_fields = ["donor_name", "email", "transaction_reference"]
    raw_id_fields = ["donor", "project"]
    date_hierarchy = "created_at"
