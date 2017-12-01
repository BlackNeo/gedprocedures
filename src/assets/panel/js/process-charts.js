// -- Pie Chart Example
var ctx = document.getElementById("process-chart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Procédures courantes", "Procédures intérompues", "Procédures en cours", "Procédures terminées"],
    datasets: [{
      data: [3, 2, 4, 5],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});