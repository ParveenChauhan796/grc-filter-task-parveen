import React, { useState } from 'react';
import Card from '../common/Card';
import Input from '../common/Input';
import Button from '../common/Button';
import RiskSlider from './RiskSlider';
import FormPreview from './FormPreview';
import { calculateScore, calculateLevel } from '../../utils/riskCalculations';
import { assessRisk } from '../../services/api';

const RiskForm = ({ onRiskAdded }) => {
  const [formData, setFormData] = useState({
    asset: '',
    threat: '',
    likelihood: 3,
    impact: 3,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const score = calculateScore(formData.likelihood, formData.impact);
  const level = calculateLevel(score);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      await assessRisk(formData);
      alert('Risk added successfully!');
      setFormData({ asset: '', threat: '', likelihood: 3, impact: 3 });
      onRiskAdded();
    } catch (error) {
      if (error.response?.data?.detail) {
        alert(`Error: ${error.response.data.detail}`);
      } else {
        alert('Failed to connect to server');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card title="Assess New Risk">
      <form onSubmit={handleSubmit}>
        <Input
          label="Asset"
          value={formData.asset}
          onChange={(e) => setFormData({ ...formData, asset: e.target.value })}
          placeholder="e.g., Web Server"
          required
          error={errors.asset}
        />

        <Input
          label="Threat"
          value={formData.threat}
          onChange={(e) => setFormData({ ...formData, threat: e.target.value })}
          placeholder="e.g., Brute Force Attack"
          required
          error={errors.threat}
        />

        <RiskSlider
          label="Likelihood"
          value={formData.likelihood}
          onChange={(value) => setFormData({ ...formData, likelihood: value })}
          minLabel="1 (Rare)"
          maxLabel="5 (Almost Certain)"
        />

        <RiskSlider
          label="Impact"
          value={formData.impact}
          onChange={(value) => setFormData({ ...formData, impact: value })}
          minLabel="1 (Negligible)"
          maxLabel="5 (Catastrophic)"
        />

        <FormPreview score={score} level={level} />

        <Button
          type="submit"
          disabled={loading}
          fullWidth
          className="mt-4"
        >
          {loading ? 'Submitting...' : 'Assess Risk'}
        </Button>
      </form>
    </Card>
  );
};

export default RiskForm;