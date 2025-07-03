import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTeams = () => {
    setLoading(true);
    fetch('https://fictional-xylophone-x599j7w7g46f6jq7-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="card shadow mx-auto" style={{maxWidth: '700px'}}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="card-title display-6 mb-0">Teams</h1>
          <button className="btn btn-primary" onClick={fetchTeams} disabled={loading}>
            {loading ? 'Loading...' : 'Reload'}
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team._id}>
                  <td>{team.name}</td>
                  <td>{team.members && Array.isArray(team.members) ? team.members.map(m => m.username).join(', ') : ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Teams;
