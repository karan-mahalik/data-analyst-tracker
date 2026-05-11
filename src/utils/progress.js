export const calculateProgress = (
  totalHours
) => {

  const goal = 100;

  return Math.min(
    (totalHours / goal) * 100,
    100
  );
};