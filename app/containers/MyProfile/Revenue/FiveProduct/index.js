import React from 'react';
import { PolarArea } from 'react-chartjs-2';

function FiveProduct({ dataFiveProduct }) {
  const data = {
    labels: Object.keys(dataFiveProduct),
    datasets: [
      {
        label: 'My First Dataset',
        data: Object.values(dataFiveProduct),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
        ],
      },
    ],
  };

  return <PolarArea data={data} />;
}

export default FiveProduct;
