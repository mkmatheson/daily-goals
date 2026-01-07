import type { SetURLSearchParams } from 'react-router';
import { colors, transparent, heatMapColors } from './const';
import type { Criteria } from './goalTypes';

export const checkCriteria = (
  value: number | undefined,
  criteria: { values: number[]; isInverted?: boolean }
) => {
  if (value === undefined) {
    return 0;
  }
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
  stateCallback: (value: React.SetStateAction<number>) => void,
  paramsCallback: SetURLSearchParams
) => {
  // Check the value of the key property
  switch (event.key) {
    case 'ArrowLeft':
      stateCallback((prev) => {
        // TODO: this is bad hardcoding but it's what I'm doing for now
        const newValue = prev === 0 ? 14 : prev - 1;
        paramsCallback({ goal: newValue.toString() });
        return newValue;
      });
      break;
    case 'ArrowRight':
      stateCallback((prev) => {
        // TODO: this is bad hardcoding but it's what I'm doing for now
        const newValue = prev == 14 ? 0 : prev + 1;
        paramsCallback({ goal: newValue.toString() });
        return newValue;
      });
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
  criteria: Criteria,
  showHeatMap: boolean
) => {
  const endValue = criteria.values.at(-1) ?? 0;
  if (
    value === undefined ||
    (!showHeatMap && value <= endValue && !criteria.isInverted)
  ) {
    return transparent;
  }

  const percentile = checkCriteria(value, criteria);

  if (showHeatMap) {
    {
      if (value <= (criteria.values.at(-1) ?? 0)) {
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
