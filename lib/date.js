// Force UTC parse + format so SSR and client render the same date string.
export function formatDate(dateStr) {
  try {
    const [y, m, d] = String(dateStr).split('-').map(Number)
    const date = new Date(Date.UTC(y, (m || 1) - 1, d || 1))
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    })
  } catch {
    return dateStr
  }
}
