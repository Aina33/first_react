import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Statistics = () => {
  const [todoData, setTodoData] = useState(null);

  useEffect(() => {
    fetch('https://nba-production-b6b8.up.railway.app/getFinalStat')
      .then(response => response.json())
      .then(data => setTodoData(data))
      .catch(error => console.error('Erreur lors de la récupération des données:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">STATISTIQUES SAISON 2023-2024</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>JOUEUR</th>
            <th>DESACTIVE</th>
            <th>MJ</th>
            <th>PPM</th>
            <th>RPM</th>
            <th>PDPM</th>
            <th>MPM</th>
            <th>EFF</th>
            <th>FG%</th>
            <th>3P%</th>
            <th>%LF</th>
          </tr>
        </thead>
        <tbody>
          {todoData ? (
            todoData.map((player, index) => (
              <tr key={index}>
                <td>{player.joueur.nom_joueur}</td>
                <td>{player.desactive}</td>
                <td>{player.mj}</td>
                <td>{player.ppm}</td>
                <td>{player.rpm}</td>
                <td>{player.pdpm}</td>
                <td>{player.mpm}</td>
                <td>{player.eff}</td>
                <td>{player.fg}</td>
                <td>{player.threepoints}</td>
                <td>{player.lf}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="20">Chargement...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
