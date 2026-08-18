export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat(
    "en-US",
    options ?? {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  ).format(date);
}
