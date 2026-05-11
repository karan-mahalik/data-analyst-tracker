import "../components/RecentLogs/RecentLogs.css";

function Logs({ logs }) {

  return (

    <div className="recent-logs">

      <h1>All Logs</h1>

      <br />

      {logs.length === 0 ? (
        <p>No Logs Yet</p>
      ) : (
        logs.map((log) => (

          <div
            className="log-card"
            key={log.id}
          >

            <h3>{log.topic}</h3>

            <p>{log.notes}</p>

            <span>{log.date}</span>

          </div>
        ))
      )}

    </div>
  );
}

export default Logs;