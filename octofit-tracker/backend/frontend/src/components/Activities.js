import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchActivities = () => {
    setLoading(true);
    fetch('https://fictional-xylophone-x599j7w7g46f6jq7-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div className="card shadow mx-auto" style={{maxWidth: '900px'}}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="card-title display-6 mb-0">Activities</h1>
          <button className="btn btn-primary" onClick={fetchActivities} disabled={loading}>
            {loading ? 'Loading...' : 'Reload'}
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>User</th>
                <th>Type</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity._id}>
                  <td>{activity.user}</td>
                  <td>{activity.activity_type}</td>
                  <td>{activity.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Activities;
