const year = new Date().getFullYear();
const months = Array.from({ length: 12 }, (_, monthIndex) => {
  const days = new Date(year, monthIndex + 1, 0).getDate();
  const label = new Date(year, monthIndex, 1).toLocaleString('default', {
    month: 'short'
  });
  return { days, label };
});
const maxDays = Math.max(...months.map((m) => m.days));

const transparent = 'rgba(255,255,255,0)';

const testGrid: { [key: string]: number[] } = {
  jan: [4],
  feb: [],
  mar: [],
  apr: [],
  may: [],
  jun: [],
  jul: [],
  aug: [],
  sep: [],
  oct: [],
  nov: [],
  dec: []
};
const DailyGoals = () => {
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          padding: '16px'
        }}
      >
        {/* Header row */}
        {months.map((month, i) => (
          <div
            key={`header-${i}`}
            style={{
              textAlign: 'center',
              border: '1px solid black'
            }}
          >
            {month.label}
          </div>
        ))}
        {Array.from({ length: maxDays }).map((_, dayIndex) => {
          // debugger;
          return months.map((month, monthIndex) => {
            const value = testGrid[month.label.toLowerCase()][dayIndex];

            const color = value
              ? `rgba(50,200,50,${value ? value / 4 : 1})`
              : transparent;
            return (
              <div
                key={`${monthIndex}-${dayIndex}`}
                style={{
                  margin: '1px',
                  aspectRatio: '1 / 1',
                  border: '1px solid black',
                  visibility: dayIndex < month.days ? 'visible' : 'hidden',
                  backgroundColor: color
                  //   backgroundColor: `rgba(0,${testGrid[month.label.toLowerCase()][dayIndex] || 255},0,${(testGrid[month.label.toLowerCase()][dayIndex] || 0) / 4})`
                }}
              >
                {dayIndex + 1}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default DailyGoals;
