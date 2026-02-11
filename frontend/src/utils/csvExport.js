export const exportToCSV = (risks) => {
  const headers = ['ID', 'Asset', 'Threat', 'Likelihood', 'Impact', 'Score', 'Level'];
  const rows = risks.map(r => [
    r.id,
    r.asset,
    r.threat,
    r.likelihood,
    r.impact,
    r.score,
    r.level
  ]);

  const csv = [headers, ...rows]
    .map(row => row.join(','))
    .join('\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `risks_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};