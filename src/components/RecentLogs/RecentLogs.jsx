import "./RecentLogs.css";

function RecentLogs({ logs }) {

  return (
    <div className="recent-logs">

      <h2>Recent Logs</h2>

      {logs.length === 0 ? (
        <p>No Logs Yet</p>
      ) : (
        logs
          .slice()
          .reverse()
          .map((log) => (
            <div
              className="log-card"
              key={log.id}
            >

              <h3>{log.topic}</h3>

              <p>
                Hours:
                <strong>
                  {" "}
                  {log.hours}
                </strong>
              </p>

              <p>{log.notes}</p>

              <span>{log.date}</span>

            </div>
          ))
      )}

    </div>
  );
}

export default RecentLogs;