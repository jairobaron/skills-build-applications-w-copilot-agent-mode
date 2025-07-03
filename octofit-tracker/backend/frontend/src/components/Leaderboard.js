import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLeaderboard = () => {
    setLoading(true);
    fetch('https://fictional-xylophone-x599j7w7g46f6jq7-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <div className="card shadow mx-auto" style={{maxWidth: '700px'}}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="card-title display-6 mb-0">Leaderboard</h1>
          <button className="btn btn-primary" onClick={fetchLeaderboard} disabled={loading}>
            {loading ? 'Loading...' : 'Reload'}
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(entry => (
                <tr key={entry._id}>
                  <td>{entry.user && entry.user.username ? entry.user.username : entry.user}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
