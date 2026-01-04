export const colors = [
  [50, 200, 50],
  [255, 200, 50],
  [200, 50, 50],
  [0, 120, 255],
  [50, 50, 250],
  [200, 50, 200]
];

export const heatMapColors = ['D30909', 'E96905', 'FFC800', '83BC1A', '07B034'];

export const today = new Date(
  new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })
);

const year = today.getFullYear();

export const months = Array.from({ length: 12 }, (_, monthIndex) => {
  const days = new Date(year, monthIndex + 1, 0).getDate();
  const label = new Date(year, monthIndex, 1).toLocaleString('default', {
    month: 'short'
  });
  return { days, label };
});

export const maxDays = Math.max(...months.map((m) => m.days));

export const transparent = 'rgba(255,255,255,0)';

export const monthLabel = today
  .toLocaleString('default', {
    month: 'short'
  })
  .toLowerCase();
export const dayOfMonth = today.getDate() - 1;
