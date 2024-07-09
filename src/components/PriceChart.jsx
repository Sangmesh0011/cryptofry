import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PriceChart = ({ coinHistory }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.data.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.data.data.history[i].timestamp).toLocaleDateString()
    );
  }
  console.log(coinPrice)
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price (USD)",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };

  return (
    <div className="w-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default PriceChart;
