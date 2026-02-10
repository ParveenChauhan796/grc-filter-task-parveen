import React from 'react';
import Badge from '../common/Badge';
import { getMitigationHint } from '../../utils/constants';

const RiskTableRow = ({ risk }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-2">{risk.id}</td>
      <td className="p-2">{risk.asset}</td>
      <td className="p-2">{risk.threat}</td>
      <td className="p-2">{risk.likelihood}</td>
      <td className="p-2">{risk.impact}</td>
      <td className="p-2 font-bold">{risk.score}</td>
      <td className="p-2">
        <Badge level={risk.level}>{risk.level}</Badge>
      </td>
      <td className="p-2 text-sm">{getMitigationHint(risk.level)}</td>
    </tr>
  );
};

export default RiskTableRow;