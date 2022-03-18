import React from 'react';
import { Bar } from 'react-chartjs-2';

function RevenueTotal({ dataTotalRevenue }) {
  const state = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'Money',
        backgroundColor: '#119def',
        data: dataTotalRevenue.map(el => el.value) || [],
      },
    ],
  };

  return (
    <Bar
      data={state}
      options={{
        title: {
          display: true,
          text: 'Average Rainfall per month',
          fontSize: 20,
        },
        legend: {
          display: true,
          position: 'right',
        },
      }}
    />
  );
}

export default RevenueTotal;
