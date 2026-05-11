import "./DashboardCards.css";

import {
  FaClipboardList,
  FaClock,
  FaFire,
} from "react-icons/fa";

function DashboardCards({
  totalLogs,
  totalHours,
  streak,
}) {

  const cards = [

    {
      title: "Total Logs",
      value: totalLogs,
      icon: <FaClipboardList />,
      className: "blue-card",
    },

    {
      title: "Total Hours",
      value: totalHours,
      icon: <FaClock />,
      className: "green-card",
    },

    {
      title: "Current Streak",
      value: `${streak} Days`,
      icon: <FaFire />,
      className: "purple-card",
    },
  ];

  return (

    <div className="cards-container">

      {cards.map((card, index) => (

        <div
          className={`dashboard-card ${card.className}`}
          key={index}
        >

          <div className="card-icon">

            {card.icon}

          </div>

          <div className="card-content">

            <h3>
              {card.title}
            </h3>

            <h1>
              {card.value}
            </h1>

          </div>

        </div>
      ))}

    </div>
  );
}

export default DashboardCards;