import Layout from './components/layout/Layout';
import StatsOverview from './components/dashboard/StatsOverview';
import LogUploader from './components/dashboard/LogUploader';
import AIAnalysis from './components/dashboard/AIAnalysis';
import ThreatAlerts from './components/dashboard/ThreatAlerts';
import SystemMetrics from './components/dashboard/SystemMetrics';

function App() {
  return (
    <Layout>
      <StatsOverview />
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="col-span-2 space-y-6">
          <LogUploader />
          <AIAnalysis />
        </div>
        <div className="space-y-6">
          <ThreatAlerts />
          <SystemMetrics />
        </div>
      </div>
    </Layout>
  );
}

export default App;
