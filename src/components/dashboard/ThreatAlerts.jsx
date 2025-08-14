// src/components/dashboard/ThreatAlerts.jsx
import { useState } from 'react';
import ThreatAlertDetails from './ThreatAlertDetails';
import { Badge } from '../common/Badge';

const ThreatAlerts = () => {
  const [selectedAlert, setSelectedAlert] = useState(null);

  const alerts = [
    {
      id: 1,
      title: 'Malicious File Access',
      description: 'AI behavioral analysis flagged anomalous system activity',
      severity: 'CRITICAL',
      source: 'System Monitor',
      time: '5 min ago',
      status: 'Active',
      affectedSystems: 'Primary workstation, network segment 192.168.1.x',
      riskLevel: 'Immediate action required',
      recommendedAction: 'Isolate affected systems and investigate immediately'
    },
    {
      id: 2,
      title: 'Suspicious Process Injection',
      description: 'Anomalous behavior detected in authorized process',
      severity: 'CRITICAL',
      source: 'Security Monitor',
      time: '8 min ago'
    },
    {
      id: 3,
      title: 'Unusual Network Activity',
      description: 'Unexpected outbound connections to unknown domains',
      severity: 'MEDIUM',
      source: 'Network Monitor',
      time: '15 min ago'
    }
  ];

  return (
    <div className="bg-card-dark rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-red-500">🚨</span>
          <h2 className="text-xl font-semibold">Threat Alerts</h2>
        </div>
        <span className="px-3 py-1 bg-red-500 bg-opacity-20 text-red-500 rounded text-sm">
          High Priority
        </span>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {alerts.map(alert => (
          <div key={alert.id} className="bg-base-dark rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <h3 className="font-medium">{alert.title}</h3>
                <Badge type={alert.severity === 'CRITICAL' ? 'critical' : 'warning'}>
                  {alert.severity}
                </Badge>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-2">{alert.description}</p>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{alert.source}</span>
              <span>{alert.time}</span>
            </div>
            <button 
              onClick={() => setSelectedAlert(alert)}
              className="mt-2 w-full text-center text-sm text-accent-blue hover:underline"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <button className="mt-4 w-full py-2 border border-gray-700 rounded-lg text-sm hover:bg-gray-800">
        View All Alerts
      </button>

      {/* Modal */}
      <ThreatAlertDetails
        isOpen={!!selectedAlert}
        onClose={() => setSelectedAlert(null)}
        alert={selectedAlert}
      />
    </div>
  );
};

export default ThreatAlerts;
