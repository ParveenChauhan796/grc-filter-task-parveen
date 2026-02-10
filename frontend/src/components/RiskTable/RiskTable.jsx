import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import TableHeader from './TableHeader';
import RiskTableRow from './RiskTableRow';
import { exportToCSV } from '../../utils/csvExport';

const RiskTable = ({ risks }) => {
  const [sort, setSort] = useState({ field: 'created_at', direction: 'desc' });

  const handleSort = (field) => {
    if (sort.field === field) {
      setSort({ ...sort, direction: sort.direction === 'asc' ? 'desc' : 'asc' });
    } else {
      setSort({ field, direction: 'desc' });
    }
  };

  const sortedRisks = [...risks].sort((a, b) => {
    const aVal = a[sort.field];
    const bVal = b[sort.field];
    return sort.direction === 'asc' ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
  });

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Risk Register</h2>
        <Button variant="success" onClick={() => exportToCSV(risks)}>
          Export CSV
        </Button>
      </div>

      {risks.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No risks assessed yet. Add one above!
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <TableHeader label="ID" sortKey="id" currentSort={sort} onSort={handleSort} />
                <TableHeader label="Asset" sortKey="asset" currentSort={sort} onSort={handleSort} />
                <TableHeader label="Threat" sortKey="threat" currentSort={sort} onSort={handleSort} />
                <TableHeader label="Likelihood" sortKey="likelihood" currentSort={sort} onSort={handleSort} />
                <TableHeader label="Impact" sortKey="impact" currentSort={sort} onSort={handleSort} />
                <TableHeader label="Score" sortKey="score" currentSort={sort} onSort={handleSort} />
                <TableHeader label="Level" sortKey="level" currentSort={sort} onSort={handleSort} />
                <TableHeader label="Mitigation Hint" />
              </tr>
            </thead>
            <tbody>
              {sortedRisks.map(risk => (
                <RiskTableRow key={risk.id} risk={risk} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
};

export default RiskTable;