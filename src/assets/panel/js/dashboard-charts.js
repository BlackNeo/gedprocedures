// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
var ctx = document.getElementById("bar-chart-docs");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin"],
    datasets: [{
      label: "Factures",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [5, 13, 12, 15, 13, 11],
          
    },
    {
      label: "Documents officiels",
      backgroundColor: "rgba(255,193,7,1)",
      borderColor: "rgba(255,193,7,1)",
      data: [8, 4, 11, 12, 9, 12],
          
    },
    {
      label: "Documents administratifs",
      backgroundColor: "rgba(40,167,69,1)",
      borderColor: "rgba(40,167,69,1)",
      data: [11, 8, 9, 4, 12, 12],
          
    }],
  },
  options: {
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
          max: 15,
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
  }
});
