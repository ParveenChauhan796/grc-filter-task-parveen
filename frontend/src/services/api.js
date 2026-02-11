import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const assessRisk = async (riskData) => {
  try {
    const response = await apiClient.post('/assess-risk', riskData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRisks = async (level = null) => {
  try {
    const params = level ? { level } : {};
    const response = await apiClient.get('/risks', { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};