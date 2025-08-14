export const Badge = ({ type, children }) => {
  const colors = {
    critical: 'bg-red-500 bg-opacity-20 text-red-500',
    warning: 'bg-orange-500 bg-opacity-20 text-orange-500',
    success: 'bg-green-500 bg-opacity-20 text-green-500',
    info: 'bg-blue-500 bg-opacity-20 text-blue-500'
  }

  return (
    <span className={`px-2 py-1 rounded text-xs ${colors[type]}`}>
      {children}
    </span>
  )
}