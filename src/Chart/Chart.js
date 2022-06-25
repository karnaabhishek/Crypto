

import { Bar } from 'react-chartjs-2';


const options = {
  indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

function Chart() {
  const datas = {
    labels:["A", "B", "C"],
    datasets: [
      {
        label: "Hello",
        data:[1,2,3],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
      },
      
    ],
  }
  return (
    <div className="chart">
      <Bar data={datas} options={options}/>
    </div>
  );
}

export default Chart;