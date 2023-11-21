import React from 'react';

const StatisticsRow = ({
  ranking,
  playerName,
  team,
  matches,
  matchesPlayed,
  ppm,
  rpm,
  pdpm,
  mpm,
  eff,
  fgPercentage,
  threePPercentage,
  freeThrowPercentage,
  isDisabled,
  defense,
  ipm,
  cpm,
  bp,
  fp,
}) => {
  return (
    <tr>
      <td>{ranking}</td>
      <td>{playerName}</td>
      <td>{team}</td>
      <td>{matches}</td>
      <td>{matchesPlayed}</td>
      <td>{ppm}</td>
      <td>{rpm}</td>
      <td>{pdpm}</td>
      <td>{mpm}</td>
      <td>{eff}</td>
      <td>{fgPercentage}</td>
      <td>{threePPercentage}</td>
      <td>{freeThrowPercentage}</td>
      <td>{isDisabled ? 'DÉSACTIVÉ' : ''}</td>
      <td>{defense}</td>
      <td>{ipm}</td>
      <td>{cpm}</td>
      <td>{bp}</td>
      <td>{fp}</td>
    </tr>
  );
};

export default StatisticsRow;
