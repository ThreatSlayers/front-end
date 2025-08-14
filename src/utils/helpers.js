/**
 * Format a timestamp into a relative time string
 * @param {string | number | Date} date - The date to format
 * @returns {string} Relative time string (e.g. "5 minutes ago")
 */
export const formatRelativeTime = (date) => {
  const now = new Date()
  const timeMs = new Date(date).getTime()
  const diffMs = now - timeMs
  const diffMins = Math.round(diffMs / (1000 * 60))
  
  if (diffMins < 1) return 'just now'
  if (diffMins === 1) return '1 min ago'
  if (diffMins < 60) return `${diffMins} mins ago`
  
  const diffHours = Math.round(diffMins / 60)
  if (diffHours === 1) return '1 hour ago'
  if (diffHours < 24) return `${diffHours} hours ago`
  
  const diffDays = Math.round(diffHours / 24)
  if (diffDays === 1) return 'yesterday'
  return `${diffDays} days ago`
}

/**
 * Format a percentage number
 * @param {number} value - The number to format
 * @returns {string} Formatted percentage with one decimal place
 */
export const formatPercentage = (value) => {
  return Number(value).toFixed(1) + '%'
}

/**
 * Get severity level color class
 * @param {string} severity - Severity level (CRITICAL, HIGH, MEDIUM, LOW)
 * @returns {string} Tailwind CSS color class
 */
export const getSeverityColor = (severity) => {
  const colors = {
    CRITICAL: 'text-red-500 bg-red-500/20',
    HIGH: 'text-orange-500 bg-orange-500/20',
    MEDIUM: 'text-yellow-500 bg-yellow-500/20',
    LOW: 'text-green-500 bg-green-500/20'
  }
  return colors[severity] || colors.LOW
}

/**
 * Format file size in bytes to human readable string
 * @param {number} bytes - Size in bytes
 * @returns {string} Formatted size (e.g. "1.5 MB")
 */
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
}

/**
 * Truncate text with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, length = 50) => {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

/**
 * Generate unique ID
 * @returns {string} Unique ID
 */
export const generateId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}