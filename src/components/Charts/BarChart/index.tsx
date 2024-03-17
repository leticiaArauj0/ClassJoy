import Chart from "react-apexcharts";

export function BarChart() {
    const state = {
        series: [3, 5, 8, 6],
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
                    type="bar"
                    width="380"
                />
            </div>
            </div>
        </div>
    );
}
