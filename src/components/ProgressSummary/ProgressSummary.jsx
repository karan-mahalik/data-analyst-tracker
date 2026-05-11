import "./ProgressSummary.css";

function ProgressSummary({
  totalHours,
  totalLogs,
}) {

  const progress =
    Math.min((totalHours / 100) * 100, 100);

  return (
    <div className="progress-summary">

      <h2>Progress Summary</h2>

      <p>
        Total Study Hours:
        <strong> {totalHours}</strong>
      </p>

      <p>
        Total Logs:
        <strong> {totalLogs}</strong>
      </p>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        ></div>

      </div>

    </div>
  );
}

export default ProgressSummary;