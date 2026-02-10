export const calculateScore = (likelihood, impact) => {
  return likelihood * impact;
};

export const calculateLevel = (score) => {
  if (score >= 1 && score <= 5) return 'Low';
  if (score >= 6 && score <= 12) return 'Medium';
  if (score >= 13 && score <= 18) return 'High';
  if (score >= 19 && score <= 25) return 'Critical';
  return 'Unknown';
};