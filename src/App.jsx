import { useEffect, useState } from "react";

import "./App.css";

import {
  FaBars,
  FaClipboardList,
  FaBook,
  FaChartLine,
  FaBell,
} from "react-icons/fa";

import {
  Link,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import DashboardCards
  from "./components/DashboardCards/DashboardCards";

import Dashboard
  from "./pages/Dashboard";

import Analytics
  from "./pages/Analytics";

import Logs
  from "./pages/Logs";

import {
  calculateStreak,
} from "./utils/streak";

import {
  requestNotificationPermission,
  showNotification,
  startReminderSystem,
} from "./utils/notifications";

/* APIs */

import {
  fetchLogs,
  createLog,
} from "./api/logApi";

import {
  fetchGoals,
} from "./api/goalApi";

import {
  fetchTasks,
} from "./api/checklistApi";

function App() {

  const location =
    useLocation();

  /* FORM */

  const [formData, setFormData] =
    useState({
      topic: "",
      hours: "",
      notes: "",
    });

  /* STATES */

  const [logs, setLogs] =
    useState([]);

  const [goals, setGoals] =
    useState([]);

  const [checklist, setChecklist] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  /* FETCH DATABASE DATA */

  useEffect(() => {

    const loadData =
      async () => {

        try {

          const logsData =
            await fetchLogs();

          const goalsData =
            await fetchGoals();

          const tasksData =
            await fetchTasks();

          setLogs(logsData);

          setGoals(goalsData);

          setChecklist(tasksData);

        } catch (error) {

          console.error(error);

        } finally {

          setLoading(false);
        }
      };

    loadData();

  }, []);

  /* REMINDERS */

  useEffect(() => {

    const cleanup =
      startReminderSystem(logs);

    return cleanup;

  }, [logs]);

  /* SUBMIT LOG */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      if (
        !formData.topic ||
        !formData.hours ||
        !formData.notes
      ) {

        alert("Fill all fields");

        return;
      }

      const today =
        new Date()
          .toLocaleDateString();

      const alreadyUpdated =
        logs.find(
          (log) =>
            log.date === today
        );

      if (alreadyUpdated) {

        alert(
          "You have already updated it today."
        );

        return;
      }

      try {

        const newLog =
          await createLog({

            ...formData,

            date: today,
          });

        setLogs([
          newLog,
          ...logs,
        ]);

        setFormData({
          topic: "",
          hours: "",
          notes: "",
        });

        showNotification(
          "Progress Saved 🚀",
          "Today's progress updated successfully."
        );

      } catch (error) {

        console.error(error);

        alert(
          "Failed to save progress"
        );
      }
    };

  /* TOTAL HOURS */

  const totalHours =
    logs.reduce(
      (acc, curr) =>
        acc +
        Number(curr.hours),
      0
    );

  /* STREAK */

  const streak =
    calculateStreak(logs);

  /* TODAY CHECK */

  const today =
    new Date()
      .toLocaleDateString();

  const alreadyUpdatedToday =
    logs.some(
      (log) =>
        log.date === today
    );

  /* LOADING */

  if (loading) {

    return (

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >

        Loading...

      </div>
    );
  }

  return (

    <div className="layout">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div>

          <div className="logo">

            <FaChartLine
              className="logo-icon"
            />

            <h2>
              Data Analyst Tracker
            </h2>

          </div>

          <ul>

            <Link to="/">

              <li
                className={
                  location.pathname === "/"
                    ? "active"
                    : ""
                }
              >

                <FaClipboardList />

                Dashboard

              </li>

            </Link>

            <Link to="/analytics">

              <li
                className={
                  location.pathname ===
                    "/analytics"
                    ? "active"
                    : ""
                }
              >

                <FaChartLine />

                Analytics

              </li>

            </Link>

            <Link to="/logs">

              <li
                className={
                  location.pathname ===
                    "/logs"
                    ? "active"
                    : ""
                }
              >

                <FaBook />

                Logs

              </li>

            </Link>

          </ul>

        </div>

        <div className="motivation-card">

          <h3>
            Keep Going 🚀
          </h3>

          <p>
            Consistency today
            builds expertise tomorrow.
          </p>

        </div>

      </aside>

      {/* MAIN */}

      <main className="main-content">

        {/* TOPBAR */}

        <div className="topbar">

          <div className="menu-icon">

            <FaBars />

          </div>

          <div className="top-icons">

            <FaBell
              className="notification-icon"
              onClick={async () => {

                const granted =
                  await requestNotificationPermission();

                if (granted) {

                  showNotification(
                    "Notifications Enabled 🔔",
                    "Daily reminders activated successfully 🚀"
                  );

                } else {

                  alert(
                    "Notification permission denied"
                  );
                }
              }}
            />

            <div className="profile">
              DA
            </div>

          </div>

        </div>

        {/* HERO */}

        <div className="hero">

          <h1>
            Welcome back, Analyst! 👋
          </h1>

          <p>
            Track your progress and
            achieve your goals.
          </p>

        </div>

        {/* CARDS */}

        <DashboardCards
          totalLogs={logs.length}
          totalHours={totalHours}
          streak={streak}
        />

        {/* ROUTES */}

        <Routes>

          <Route
            path="/"
            element={
              <Dashboard
                alreadyUpdatedToday={
                  alreadyUpdatedToday
                }
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
                logs={logs}
                goals={goals}
                setGoals={setGoals}
                checklist={checklist}
                setChecklist={setChecklist}
                totalHours={totalHours}
              />
            }
          />

          <Route
            path="/analytics"
            element={
              <Analytics
                logs={logs}
              />
            }
          />

          <Route
            path="/logs"
            element={
              <Logs
                logs={logs}
              />
            }
          />

        </Routes>

      </main>

    </div>
  );
}

export default App;