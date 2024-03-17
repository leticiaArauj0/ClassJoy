import Chart from "react-apexcharts";

export function PieChart() {
    const state = {
        series: [44, 55, 41, 17],
        chartOptions: {
          labels: ['Interpretação Textual', 'Substantivo Próprio', 'Sílaba Tônica', 'Separação Silábica']
        }
    };
    
    return (
        <div className="app">
            <div className="row">
            <div className="mixed-chart">
                <Chart
                    options={state.chartOptions}
                    series={state.series}
                    type="donut"
                    width="380"
                />
            </div>
            </div>
        </div>
    );
}
