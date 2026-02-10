import React from 'react';
import StatsCard from './StatsCard';

const StatsCards = ({ risks }) => {
  const total = risks.length;
  const highCritical = risks.filter(r => r.level === 'High' || r.level === 'Critical').length;
  const avgScore = total > 0
    ? (risks.reduce((sum, r) => sum + r.score, 0) / total).toFixed(1)
    : '0.0';

  const levelCounts = {
    Low: risks.filter(r => r.level === 'Low').length,
    Medium: risks.filter(r => r.level === 'Medium').length,
    High: risks.filter(r => r.level === 'High').length,
    Critical: risks.filter(r => r.level === 'Critical').length,
  };

  const levelSubtitle = (
    <div className="space-y-1">
      <div>Low: {levelCounts.Low}</div>
      <div>Medium: {levelCounts.Medium}</div>
      <div>High: {levelCounts.High}</div>
      <div>Critical: {levelCounts.Critical}</div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <StatsCard
        title="Total Risks"
        value={total}
        bgColor="bg-blue-100"
        textColor="text-blue-900"
      />

      <StatsCard
        title="High + Critical"
        value={highCritical}
        bgColor="bg-red-100"
        textColor="text-red-900"
      />

      <StatsCard
        title="Average Score"
        value={avgScore}
        bgColor="bg-purple-100"
        textColor="text-purple-900"
      />

      <StatsCard
        title="By Level"
        value=""
        bgColor="bg-gray-100"
        textColor="text-gray-900"
        subtitle={levelSubtitle}
      />
    </div>
  );
};

export default StatsCards;