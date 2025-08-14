import { useApp } from '../../context/AppContext';

const Header = () => {
  const { systemActive, setSystemActive } = useApp();

  return (
    <header className="bg-card-dark border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-accent-blue text-2xl">⚡</div>
            <div>
              <h1 className="text-xl font-bold">ThreatSlayers AI</h1>
              <p className="text-sm text-gray-400">
                Advanced Malware Detection System
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSystemActive(!systemActive)}
              className={`px-4 py-2 rounded-md ${
                systemActive ? 'bg-accent-green' : 'bg-gray-600'
              }`}
            >
              System {systemActive ? 'Active' : 'Inactive'}
            </button>
            <button className="px-4 py-2 border border-gray-600 rounded-md hover:bg-gray-800">
              Export Report
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
