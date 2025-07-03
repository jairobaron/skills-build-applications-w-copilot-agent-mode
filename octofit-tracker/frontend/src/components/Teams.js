function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://fictional-xylophone-x599j7w7g46f6jq7-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="card-title display-5 mb-4 text-info">Teams</h1>
          <table className="table table-striped table-hover">
            <thead className="table-info">
              <tr>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team._id}>
                  <td>{team.name}</td>
                  <td>{team.members && team.members.map(m => m.username).join(', ')}</td>
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
