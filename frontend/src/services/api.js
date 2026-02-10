const API_BASE_URL = 'http://localhost:8000';

export const assessRisk = async (riskData) => {
  const response = await fetch(`${API_BASE_URL}/assess-risk`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(riskData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw { response: { data: error } };
  }

  return response.json();
};

export const getRisks = async (level = null) => {
  const url = level
    ? `${API_BASE_URL}/risks?level=${level}`
    : `${API_BASE_URL}/risks`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch risks');
  }

  return response.json();
};