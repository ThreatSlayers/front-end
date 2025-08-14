// src/components/dashboard/AIAnalysis.jsx
import { ProgressBar } from '../common/ProgressBar'
import { Badge } from '../common/Badge'

const AIAnalysis = () => {
  const analysisResults = [
    {
      id: 1,
      name: 'system.log',
      status: 'SUSPICIOUS',
      confidence: 75,
      timestamp: '09:45 AM',
      anomalies: ['Unusual process spawning', 'Registry modifications']
    },
    {
      id: 2,
      name: 'security.log',
      status: 'CLEAN',
      confidence: 92,
      timestamp: '09:55 AM'
    }
  ]

  return (
    <div className="bg-card-dark rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-accent-blue">🤖</span>
          <h2 className="text-xl font-semibold">AI Analysis Results</h2>
        </div>
        <span className="text-sm text-gray-400">LSTM Autoencoder</span>
      </div>

      {/* Analysis Results */}
      <div className="space-y-4">
        {analysisResults.map(result => (
          <div key={result.id} className="bg-base-dark rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-accent-blue">📄</span>
                <span className="font-medium">{result.name}</span>
                <Badge type={result.status === 'SUSPICIOUS' ? 'warning' : 'success'}>
                  {result.status}
                </Badge>
              </div>
              <span className="text-sm text-gray-400">Analyzed at {result.timestamp}</span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-400">Confidence Score</span>
                <span className="text-sm">{result.confidence}%</span>
              </div>
              <ProgressBar
                value={result.confidence}
                color={result.status === 'SUSPICIOUS' ? 'bg-yellow-500' : 'bg-green-500'}
              />
            </div>

            {result.anomalies && (
              <div className="mt-4">
                <span className="text-sm text-gray-400">Detected Anomalies:</span>
                <ul className="mt-2 space-y-1">
                  {result.anomalies.map((anomaly, index) => (
                    <li key={index} className="text-sm text-red-400">
                      • {anomaly}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AIAnalysis
