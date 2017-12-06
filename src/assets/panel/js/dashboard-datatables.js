// Call the dataTables jQuery plugin
$(document).ready(function() {
    $('#bills-table').DataTable({
      "pageLength": 5
    });
    $('#official-table').DataTable({
      "pageLength": 5
    });
    $('#administrative-table').DataTable({
      "pageLength": 5
    });
    $('#status-table').DataTable({
      "pageLength": 5
    });
  });