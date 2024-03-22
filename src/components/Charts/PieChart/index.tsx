import Chart from "react-apexcharts";

export function PieChart() {
    const state = {
        series: [44, 55, 41, 17],
        chartOptions: {
          labels: ['Interpretação Textual', 'Substantivo Próprio', 'Sílaba Tônica', 'Separação Silábica'],
          fill: {
            colors: ['#966BF2', '#FBB925', '#77BF0B', '#00B8F0']
          }
        }
    };
    
    return (
        <Chart
            options={state.chartOptions}
            series={state.series}
            type="donut"
            width={370}
            height="90%"
        />
    );
}
