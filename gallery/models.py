from django.db import models


class GalleryImage(models.Model):
    image = models.ImageField(upload_to="gallery/%Y/%m/")
    caption = models.CharField(max_length=255, blank=True)
    project = models.ForeignKey(
        "projects.Project",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="gallery_images",
    )
    is_featured = models.BooleanField(default=False)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-uploaded_at"]
        verbose_name_plural = "gallery images"

    def __str__(self):
        return self.caption or f"Image #{self.pk}"
