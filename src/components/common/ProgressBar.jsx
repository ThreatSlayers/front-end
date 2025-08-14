export const ProgressBar = ({ value, color = 'bg-accent-blue' }) => {
  return (
    <div className="w-full bg-base-dark rounded-full h-2">
      <div 
        className={`h-2 rounded-full ${color}`}
        style={{ width: `${value}%` }}
      />
    </div>
  )
}