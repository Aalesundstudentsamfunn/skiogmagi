// The public site cloud is a convenience fallback for local development only.
export const cloudinaryCloudName =
  import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME?.trim() ||
  (import.meta.env.DEV ? "skiogmagi" : undefined);
