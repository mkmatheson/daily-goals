import { colors, transparent, goalNames, heatMapColors } from './const';

const checkCriteria = (
  value: number,
  criteria: { values: number[]; isInverted?: boolean }
) => {
  const { values } = criteria;
  const intervals = values.length - 1;

  for (let i = 0; i < values.length; i++) {
    if (value >= values[i]) {
      if (criteria.isInverted) {
        return i / intervals;
      } else {
        return (intervals - i) / intervals;
      }
    }
  }
  return values.length;
};

export const handleKeyDown = (
  event: any,
  callback: (value: React.SetStateAction<number>) => void
) => {
  // Check the value of the key property
  switch (event.key) {
    case 'ArrowLeft':
      callback((prev) => (prev === 0 ? goalNames.length - 1 : prev - 1));
      break;
    case 'ArrowRight':
      callback((prev) => (prev === goalNames.length - 1 ? 0 : prev + 1));
      break;
    default:
      return; // Exit handler if not an arrow key
  }

  // Optional: Prevent the default action (e.g., scrolling the page with arrow keys)
  event.preventDefault();
};

export const getColor = (
  value: number | undefined,
  selectedGoalIndex: number,
  criteria: any,
  showHeatMap: boolean
) => {
  if (
    value === undefined ||
    (!showHeatMap && !criteria.isInverted && value === 0)
  ) {
    return transparent;
  }

  const percentile = checkCriteria(value, criteria);

  if (showHeatMap) {
    {
      if (value == 0 && !criteria.isInverted) {
        return `#${heatMapColors[0]}`;
      }

      const bucket =
        percentile === 1
          ? heatMapColors.length - 1
          : Math.floor(percentile * heatMapColors.length);
      return `#${heatMapColors[bucket]}`;
    }
  }
  return `rgba(${colors[selectedGoalIndex % colors.length]},${value ? percentile : 1})`;
};
