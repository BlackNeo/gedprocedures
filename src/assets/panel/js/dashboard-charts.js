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
      backgroundColor: "rgba(178,215,255,1)",
      borderColor: "rgba(178,215,255,1)",
      data: [5, 13, 12, 15, 13, 11],
          
    },
    {
      label: "Documents officiels",
      backgroundColor: "rgba(255,230,155,1)",
      borderColor: "rgba(255,230,155,1)",
      data: [8, 4, 11, 12, 9, 12],
          
    },
    {
      label: "Documents administratifs",
      backgroundColor: "rgba(147,211,162,1)",
      borderColor: "rgba(147,211,162,1)",
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

// -- Pie Chart Example
var ctx = document.getElementById("process-chart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Procédures courantes", "Procédures intérompues", "Procédures en cours", "Procédures terminées"],
    datasets: [{
      data: [3, 2, 4, 5],
      backgroundColor: ['#b2d7ff', '#ed9aa2', '#ffe69b', '#93d3a2'],
    }],
  },
});
