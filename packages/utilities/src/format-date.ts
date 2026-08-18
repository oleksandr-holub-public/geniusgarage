export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions) {
  // Add a comment to invalidate cache

  return new Intl.DateTimeFormat(
    "en-US",
    options ?? {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  ).format(date);
}
