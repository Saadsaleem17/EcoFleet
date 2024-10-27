import React from 'react';
import { Line } from 'react-chartjs-2';

function FillLevelChart({ data }) {
  const chartData = {
    labels: data.timestamps,
    datasets: [{
      label: 'Fill Levels',
      data: data.fillLevels,
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    }]
  };

  return <Line data={chartData} />;
}

export default FillLevelChart;
