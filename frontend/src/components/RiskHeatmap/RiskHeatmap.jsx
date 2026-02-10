import React from 'react';
import Card from '../common/Card';
import HeatmapCell from './HeatmapCell';
import HeatmapLegend from './HeatmapLegend';
import { calculateLevel } from '../../utils/riskCalculations';

const RiskHeatmap = ({ risks }) => {
  const getCellData = (likelihood, impact) => {
    const matchingRisks = risks.filter(
      r => r.likelihood === likelihood && r.impact === impact
    );
    return {
      count: matchingRisks.length,
      assets: matchingRisks.map(r => r.asset),
    };
  };

  const getCellColor = (likelihood, impact) => {
    const score = likelihood * impact;
    const level = calculateLevel(score);
    const colors = {
      Low: 'bg-green-300',
      Medium: 'bg-yellow-300',
      High: 'bg-orange-300',
      Critical: 'bg-red-300',
    };
    return colors[level];
  };

  return (
    <Card title="Risk Heatmap">
      <div className="overflow-x-auto">
        <table className="border-collapse mx-auto">
          <thead>
            <tr>
              <th className="border p-2 bg-gray-100"></th>
              {[1, 2, 3, 4, 5].map(i => (
                <th key={i} className="border p-2 bg-gray-100 font-medium">
                  Impact {i}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[5, 4, 3, 2, 1].map(likelihood => (
              <tr key={likelihood}>
                <td className="border p-2 bg-gray-100 font-medium">
                  Likelihood {likelihood}
                </td>
                {[1, 2, 3, 4, 5].map(impact => {
                  const { count, assets } = getCellData(likelihood, impact);
                  const backgroundColor = getCellColor(likelihood, impact);
                  return (
                    <HeatmapCell
                      key={impact}
                      count={count}
                      assets={assets}
                      backgroundColor={backgroundColor}
                    />
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <HeatmapLegend />
    </Card>
  );
};

export default RiskHeatmap;