import { goals } from './goalData';

export const colors = [
  [50, 200, 50],
  [200, 200, 50],
  [200, 50, 50],
  [50, 200, 200],
  [50, 50, 200],
  [200, 50, 200]
];

const year = new Date().getFullYear();

export const months = Array.from({ length: 12 }, (_, monthIndex) => {
  const days = new Date(year, monthIndex + 1, 0).getDate();
  const label = new Date(year, monthIndex, 1).toLocaleString('default', {
    month: 'short'
  });
  return { days, label };
});

export const maxDays = Math.max(...months.map((m) => m.days));

export const transparent = 'rgba(255,255,255,0)';

export const goalNames = Object.keys(goals);

export const today = new Date();
export const monthLabel = today
  .toLocaleString('default', {
    month: 'short'
  })
  .toLowerCase();
export const dayOfMonth = today.getDate() - 1;
