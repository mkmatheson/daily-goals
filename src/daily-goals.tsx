import { useState, useEffect } from 'react';
import { goals } from './goalData';
import { months, maxDays, goalNames, monthLabel, dayOfMonth } from './const';
import { handleKeyDown, getColor } from './utils';

const DailyGoals = () => {
  const [selectedGoalIndex, setSelectedGoalIndex] = useState<number>(0);
  const [showHeatMap, setShowHeatMap] = useState<boolean>(true);
  const selectedGoalName = goalNames[selectedGoalIndex];

  const criteria = goals[selectedGoalName].criteria;
  function handleKeyDownEvent(event: any) {
    handleKeyDown(event, setSelectedGoalIndex);
  }

  useEffect(() => {
    // This code only runs in the browser after mounting
    document.addEventListener('keydown', handleKeyDownEvent);

    // The return function handles cleanup (runs on unmount)
    return () => {
      document.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, []); // Empty dependency array ensures it runs once on mount and once on unmount

  return (
    <div>
      <div>
        {goalNames.map((goalName, index) => {
          const hasTodayData =
            goals[goalName]?.data?.[monthLabel]?.[dayOfMonth] !== undefined;
          return (
            <span key={goalName} style={{ margin: '8px' }}>
              <button
                onClick={() => setSelectedGoalIndex(index)}
                type="button"
                style={{
                  border: '1px solid black',
                  backgroundColor:
                    selectedGoalIndex === index ? 'lightblue' : 'white',
                  color: hasTodayData ? 'black' : 'red',
                  padding: '4px'
                }}
              >
                {goals[goalName].criteria.isInverted ? 'less ' : ''}
                {goalName}
              </button>
            </span>
          );
        })}
        <input
          type="checkbox"
          onChange={() => setShowHeatMap(!showHeatMap)}
          checked={showHeatMap}
        />
        <label style={{ marginLeft: '4px' }}>Heat Map</label>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${maxDays + 1}, 1fr)`,
          padding: '16px',
          maxWidth: '600px'
        }}
      >
        {months.map((month, monthIndex) => {
          const labelCell = (
            <div
              key={`label-${monthIndex}`}
              style={{
                textAlign: 'center',
                border: '1px solid black',
                margin: '1px',
                padding: '4px'
              }}
            >
              {month.label}
            </div>
          );

          const dayCells = Array.from({ length: maxDays }).map(
            (_, dayIndex) => {
              const value =
                goals?.[selectedGoalName]?.data?.[
                  month?.label?.toLowerCase()
                ]?.[dayIndex];
              return (
                <div
                  key={`${monthIndex}-${dayIndex}`}
                  style={{
                    margin: '1px',
                    aspectRatio: '1 / 1',
                    border: '1px solid black',
                    visibility: dayIndex < month.days ? 'visible' : 'hidden',
                    backgroundColor: getColor(
                      value,
                      selectedGoalIndex,
                      criteria,
                      showHeatMap
                    )
                  }}
                >
                  {dayIndex + 1}
                </div>
              );
            }
          );

          return [labelCell, ...dayCells];
        })}
      </div>
    </div>
  );
};

export default DailyGoals;
