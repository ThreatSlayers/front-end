// src/components/dashboard/SystemMetrics.jsx
import { ProgressBar } from '../common/ProgressBar';
import { Badge } from '../common/Badge';

const SystemMetrics = () => {
  const metrics = [
    { name: 'CPU Usage', value: 22.2, color: 'bg-accent-blue' },
    { name: 'Memory', value: 65.4, color: 'bg-accent-orange' },
    { name: 'Disk I/O', value: 31.5, color: 'bg-accent-green' },
    { name: 'Network', value: 38.9, color: 'bg-accent-blue' }
  ];

  return (
    <div className="bg-card-dark rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-accent-green">📊</span>
          <h2 className="text-xl font-semibold">System Metrics</h2>
        </div>
        <Badge type="success">Optimal</Badge>
      </div>

      {/* Metrics */}
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-400">{metric.name}</span>
              <span className="text-sm">{metric.value}%</span>
            </div>
            <ProgressBar value={metric.value} color={metric.color} />
          </div>
        ))}
      </div>

      {/* Footer / Status */}
      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">System Status</span>
          <Badge type="success">Optimal</Badge>
        </div>
      </div>
    </div>
  );
};

export default SystemMetrics;
