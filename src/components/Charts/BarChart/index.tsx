import Chart from "react-apexcharts";

export function BarChart() {
    const state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ["A", "B", "C", "D"]
          },
          fill: {
            colors: ['#966BF2']
          }
        },
        series: [
          {
            name: "Média",
            data: [8, 10, 6, 4]
          }
        ]  
    };
    
    return (
        <div className="app">
            <div className="row">
            <div className="mixed-chart">
                <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="320"
                />
            </div>
            </div>
        </div>
    );
}
