export const RISK_LEVELS = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
  CRITICAL: 'Critical',
};

export const MITIGATION_HINTS = {
  Low: 'Accept / Monitor',
  Medium: 'Plan mitigation within 6 months',
  High: 'Prioritize action + compensating controls (NIST PR.AC)',
  Critical: 'Immediate mitigation required + executive reporting',
};

export const getMitigationHint = (level) => {
  return MITIGATION_HINTS[level] || '';
};

export const LEVEL_FILTER_OPTIONS = [
  { value: '', label: 'All' },
  { value: 'Low', label: 'Low' },
  { value: 'Medium', label: 'Medium' },
  { value: 'High', label: 'High' },
  { value: 'Critical', label: 'Critical' },
];