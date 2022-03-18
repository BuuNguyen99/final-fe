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
          '#94d39a',
          '#e95485',
          '#aeb8de',
          '#ecad3c',
          '#ffe2dc',
        ],
      },
    ],
  };

  return <PolarArea data={data} />;
}

export default FiveProduct;
