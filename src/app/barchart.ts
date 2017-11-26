export class Barchart {
    type: string;
    data: object = { labels: [],
        datasets: [{
        label: 'Coûts',
        backgroundColor: 'rgba(2,117,216,1)',
        borderColor: 'rgba(2,117,216,1)',
        data: []
    }]};
    options: object = {
        scales: {
          xAxes: [{
            time: {
              unit: 'month'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 6
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 15000,
              maxTicksLimit: 5
            },
            gridLines: {
              display: true
            }
          }],
        },
        legend: {
          display: false
        }
    };
}
