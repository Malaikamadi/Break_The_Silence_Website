/**
 * Builds full URL for media files from Django backend.
 * Handles relative paths (e.g. projects/2024/03/photo.jpg) and absolute URLs.
 */
export function getMediaUrl(image: string | null): string {
  if (!image) return "";
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  const mediaBase =
    process.env.NEXT_PUBLIC_MEDIA_URL ??
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/?.*$/, "") ??
    "http://localhost:8000";
  const path = image.startsWith("/") ? image : `/media/${image}`;
  return `${mediaBase}${path}`;
}
