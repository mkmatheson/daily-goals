import { useState, useEffect } from 'react';
import { months, maxDays, monthLabel, dayOfMonth } from './const';
import { handleKeyDown, getColor, checkCriteria } from './utils';
import { defaultCriteria, type Goal } from './goalTypes';
import { useSearchParams } from 'react-router';

const DailyGoals = () => {
  const [data, setData] = useState<Goal[]>([]);

  const [selectedGoalIndex, setSelectedGoalIndex] = useState<number>(0);
  const [showHeatMap, setShowHeatMap] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let ignore = false;
    if (process.env.NODE_ENV === 'development' && !ignore) {
      import('../../data/goalData.json').then((data) => {
        if (data['default']) {
          setData(data['default'] as Goal[]);
        }
      });
      return () => {
        ignore = true;
      };
    }

    fetch('https://cdn.jsdelivr.net/gh/mkmatheson/data@latest/goalData.json')
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    const goalParam = searchParams.get('goal');
    if (goalParam !== null) {
      const goalIndex = parseInt(goalParam);
      if (goalIndex < 0) {
        setSearchParams({ goal: '0' });
        setSelectedGoalIndex(0);
      } else if (goalIndex > 14) {
        setSearchParams({ goal: '14' });
        setSelectedGoalIndex(14);
      } else {
        setSelectedGoalIndex(parseInt(goalParam));
      }
    }
  }, []);

  // TODO: remind self why this can't be an anonymous function
  function handleKeyDownEvent(event: any) {
    handleKeyDown(event, setSelectedGoalIndex, setSearchParams);
  }

  useEffect(() => {
    // This code only runs in the browser after mounting
    document.addEventListener('keydown', handleKeyDownEvent);

    // The return function handles cleanup (runs on unmount)
    return () => {
      document.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, []); // Empty dependency array ensures it runs once on mount and once on unmount

  return data?.length ? (
    <div>
      <div>
        {data.map(({ name }, index) => {
          const todayData = data[index]?.data?.[monthLabel]?.[dayOfMonth];
          const percentile = checkCriteria(
            todayData,
            data[index].criteria || defaultCriteria
          );
          return (
            <span key={name} style={{ margin: '8px' }}>
              <button
                onClick={() => {
                  setSelectedGoalIndex(index);
                  setSearchParams({ goal: index.toString() });
                }}
                type="button"
                style={{
                  border: '1px solid black',
                  backgroundColor:
                    selectedGoalIndex === index ? 'lightblue' : 'white',
                  color:
                    todayData !== undefined
                      ? `rgb(${255 * (1 - percentile)}, ${130 * (1 - percentile)}, 0)`
                      : 'red',
                  padding: '4px'
                }}
              >
                {data[index].criteria?.isInverted ? 'less ' : ''}
                {name}
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
                data[selectedGoalIndex]?.data?.[month?.label?.toLowerCase()]?.[
                  dayIndex
                ];
              return (
                <div
                  key={`${monthIndex}-${dayIndex}`}
                  style={{
                    margin: '1px',
                    aspectRatio: '1 / 1',
                    padding: '2px',
                    border: '1px solid black',
                    visibility: dayIndex < month.days ? 'visible' : 'hidden',
                    backgroundColor: getColor(
                      value,
                      selectedGoalIndex,
                      data[selectedGoalIndex].criteria || defaultCriteria,
                      showHeatMap
                    )
                  }}
                >
                  {dayIndex + 1}
                  <div
                    style={{
                      fontSize: '8px',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'end'
                    }}
                  >
                    {value}
                  </div>
                </div>
              );
            }
          );

          return [labelCell, ...dayCells];
        })}
      </div>
    </div>
  ) : (
    <div />
  );
};

export default DailyGoals;
