const StatsOverview = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="bg-card-dark rounded-lg p-6">
        <div className="flex items-center space-x-2">
          <div className="text-accent-red">⚠️</div>
          <h3 className="text-gray-400">Threats Detected</h3>
        </div>
        <p className="text-3xl font-bold mt-2">6</p>
      </div>
      
      <div className="bg-card-dark rounded-lg p-6">
        <div className="flex items-center space-x-2">
          <div className="text-accent-blue">📊</div>
          <h3 className="text-gray-400">Logs Processed</h3>
        </div>
        <p className="text-3xl font-bold mt-2">51</p>
      </div>
      
      <div className="bg-card-dark rounded-lg p-6">
        <div className="flex items-center space-x-2">
          <div className="text-accent-green">✓</div>
          <h3 className="text-gray-400">Detection Rate</h3>
        </div>
        <p className="text-3xl font-bold mt-2">97.9%</p>
      </div>
    </div>
  )
}

export default StatsOverview