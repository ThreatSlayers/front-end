// src/components/dashboard/StatsOverview.jsx
import { useApp } from '../../context/AppContext.jsx';

const StatsOverview = () => {
  const { systemActive } = useApp();

  const metrics = [
    { icon: '⚠️', label: 'Threats Detected', value: systemActive ? 6 : 0, color: 'text-accent-red' },
    { icon: '📊', label: 'Logs Processed', value: 51, color: 'text-accent-blue' },
    { icon: '✓', label: 'Detection Rate', value: '97.9%', color: 'text-accent-green' }
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-card-dark rounded-lg p-6">
          <div className="flex items-center space-x-2">
            <div className={metric.color}>{metric.icon}</div>
            <h3 className="text-gray-400">{metric.label}</h3>
          </div>
          <p className="text-3xl font-bold mt-2">{metric.value}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;
