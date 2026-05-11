import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function Analytics({ logs }) {

  const data = logs.map((log) => ({
    date: log.date,
    hours: Number(log.hours),
  }));

  return (

    <div className="analytics-page">

      <h1>
        Analytics Overview
      </h1>

      {
        data.length === 0 ? (

          <p>
            No analytics data available yet.
          </p>

        ) : (

          <div className="chart-container">

            <ResponsiveContainer
              width="100%"
              height={400}
            >

              <LineChart
                data={data}
              >

                <CartesianGrid
                  stroke="rgba(255,255,255,0.08)"
                />

                <XAxis
                  dataKey="date"
                  stroke="#cbd5e1"
                />

                <YAxis
                  stroke="#cbd5e1"
                />

                <Tooltip
                  contentStyle={{
                    background: "#081120",
                    border: "none",
                    borderRadius: "12px",
                    color: "white",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="#8b5cf6"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        )
      }

    </div>
  );
}

export default Analytics;