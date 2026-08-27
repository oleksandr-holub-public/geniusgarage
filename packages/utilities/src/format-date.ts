export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium", // Was 'long', fix to 'medium'
  }).format(date);
}
