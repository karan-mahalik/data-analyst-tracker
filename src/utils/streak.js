export const calculateStreak = (
  logs = []
) => {

  if (!logs.length) return 0;

  const sortedLogs = [...logs].sort(
    (a, b) =>
      new Date(a.date) -
      new Date(b.date)
  );

  let streak = 1;

  for (
    let i = sortedLogs.length - 1;
    i > 0;
    i--
  ) {

    const currentDate = new Date(
      sortedLogs[i].date
    );

    const previousDate = new Date(
      sortedLogs[i - 1].date
    );

    currentDate.setHours(0, 0, 0, 0);
    previousDate.setHours(0, 0, 0, 0);

    const difference =
      (currentDate - previousDate) /
      (1000 * 60 * 60 * 24);

    if (difference === 1) {

      streak++;

    } else if (difference === 0) {

      continue;

    } else {

      break;
    }
  }

  return streak;
};