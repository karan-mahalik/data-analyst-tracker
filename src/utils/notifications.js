export const requestNotificationPermission =
  async () => {

    if (!("Notification" in window))
      return false;

    const permission =
      await Notification.requestPermission();

    return permission === "granted";
  };

export const showNotification =
  async (title, body) => {

    if (
      Notification.permission !==
      "granted"
    ) return;

    if ("serviceWorker" in navigator) {

      const registration =
        await navigator.serviceWorker.ready;

      registration.showNotification(
        title,
        {
          body,
          icon: "/icon-192.png",
          badge: "/icon-192.png",
          vibrate: [200, 100, 200],
        }
      );
    }
  };

export const startReminderSystem =
  (logs) => {

    const interval =
      setInterval(async () => {

        const now = new Date();

        const hours =
          now.getHours();

        const minutes =
          now.getMinutes();

        const today =
          now.toLocaleDateString();

        const updatedToday =
          logs.some(
            (log) =>
              log.date === today
          );

        if (updatedToday) return;

        const reminderHours =
          [20, 21, 22];

        if (
          reminderHours.includes(hours)
          &&
          minutes === 0
        ) {

          await showNotification(
            "Data Analyst Tracker",
            "You haven't updated today's progress yet 🚀"
          );
        }

      }, 60000);

    return () =>
      clearInterval(interval);
  };