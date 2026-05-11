export const requestNotificationPermission =
  async () => {

    if (!("Notification" in window))
      return;

    if (
      Notification.permission !==
      "granted"
    ) {

      await Notification
        .requestPermission();
    }
  };

export const showNotification = (
  title,
  body
) => {

  if (
    Notification.permission ===
    "granted"
  ) {

    new Notification(title, {

      body,

      icon: "/icon-192.png",
    });
  }
};

export const startReminderSystem =
  (logs) => {

    setInterval(() => {

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

        showNotification(
          "Data Analyst Tracker",
          "You haven't updated today's progress yet 🚀"
        );
      }

    }, 60000);
  };