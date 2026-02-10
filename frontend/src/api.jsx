import React, { useState, useEffect } from 'react';
import RiskForm from './components/RiskForm/RiskForm';
import RiskTable from './components/RiskTable/RiskTable';
import RiskHeatmap from './components/RiskHeatmap/RiskHeatmap';
import StatsCards from './components/Dashboard/StatsCards';
import Select from './components/common/Select';
import Loading from './components/common/Loading';
import { getRisks } from './services/api';
import { LEVEL_FILTER_OPTIONS } from './utils/constants';

function App() {
  const [risks, setRisks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [levelFilter, setLevelFilter] = useState('');

  const fetchRisks = async () => {
    setLoading(true);
    try {
      const data = await getRisks(levelFilter || null);
      setRisks(data);
    } catch (error) {
      console.error('Error fetching risks:', error);
      alert('Failed to load risks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRisks();
  }, [levelFilter]);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            GRC Risk Assessment Dashboard
          </h1>
          <p className="text-gray-600">
            Assess and visualize organizational risks using likelihood × impact matrix
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1">
            <RiskForm onRiskAdded={fetchRisks} />
          </div>

          <div className="lg:col-span-2">
            {loading ? (
              <Loading message="Loading risks..." />
            ) : (
              <>
                <div className="mb-4">
                  <Select
                    label="Filter by Level:"
                    value={levelFilter}
                    onChange={(e) => setLevelFilter(e.target.value)}
                    options={LEVEL_FILTER_OPTIONS}
                  />
                </div>

                <StatsCards risks={risks} />

                <div className="mb-6">
                  <RiskHeatmap risks={risks} />
                </div>

                <RiskTable risks={risks} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;