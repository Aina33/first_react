import React, { useState, useEffect } from 'react';
import StatisticsRow from './StatisticsRow';
import 'bootstrap/dist/css/bootstrap.min.css';

const Statistics = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">STATISTIQUES SAISON 2023-2024</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>CLASSEMENT</th>
            <th>JOUEUR</th>
            <th>ÉQUIPE</th>
            <th>M</th>
            <th>MJ</th>
            <th>PPM</th>
            <th>RPM</th>
            <th>PDPM</th>
            <th>MPM</th>
            <th>EFF</th>
            <th>FG%</th>
            <th>3P%</th>
            <th>%LF</th>
            <th>DÉSACTIVÉ</th>
            <th>DÉF</th>
            <th>IPM</th>
            <th>CPM</th>
            <th>BP</th>
            <th>FP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Player Name</td>
            <td>Team</td>
            <td>13</td>
            <td>13</td>
            <td>31.9</td>
            <td>11.2</td>
            <td>6.2</td>
            <td>34.1</td>
            <td>36.4</td>
            <td>50.2</td>
            <td>31.8</td>
            <td>88.5</td>
            <td>DÉSACTIVÉ</td>
            <td>8</td>
            <td>0.9</td>
            <td>1.5</td>
            <td>3.5</td>
            <td>2.7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
