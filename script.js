
    // Data Setup
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
    const monthlySales = [1000, 1200, 1400, 1300, 1800, 2200, 2700, 2500];
    const categoryLabels = ['Electronics', 'Clothing', 'Home & Kitchen', 'Books'];
    const categorySales = [4500, 3200, 2800, 1200];

    // Chart Instances
    const barChart = new Chart(document.getElementById('barChart').getContext('2d'), {
      type: 'bar',
      data: {
        labels: months,
        datasets: [{
          label: 'Monthly Sales (₹)',
          data: monthlySales,
          backgroundColor: '#4e73df',
          borderColor: '#2e59d9',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: { display: true, text: 'Monthly Sales' },
          tooltip: { enabled: true },
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true, ticks: { stepSize: 500 } }
        }
      }
    });

    const pieChart = new Chart(document.getElementById('pieChart').getContext('2d'), {
      type: 'pie',
      data: {
        labels: categoryLabels,
        datasets: [{
          data: categorySales,
          backgroundColor: ['#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: { display: true, text: 'Sales by Category' },
          tooltip: { enabled: true },
          legend: { position: 'bottom' }
        }
      }
    });

    const lineChart = new Chart(document.getElementById('lineChart').getContext('2d'), {
      type: 'line',
      data: {
        labels: months,
        datasets: [{
          label: 'Revenue (₹)',
          data: monthlySales,
          borderColor: '#f6c23e',
          tension: 0.3,
          fill: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: { display: true, text: 'Revenue Trend Over Time' },
          tooltip: { enabled: true },
          legend: { position: 'top' }
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });

    // Insight Messages
    const insights = {
      bar: 'Insight: Sales peaked in July due to mid-year campaigns.',
      pie: 'Insight: Electronics category dominates overall sales.',
      line: 'Insight: Revenue shows consistent growth over months.'
    };

    // Show Chart Based on Button Click
    function showChart(type) {
      document.getElementById('barChartContainer').style.display = 'none';
      document.getElementById('pieChartContainer').style.display = 'none';
      document.getElementById('lineChartContainer').style.display = 'none';

      if (type === 'bar') {
        document.getElementById('barChartContainer').style.display = 'block';
      } else if (type === 'pie') {
        document.getElementById('pieChartContainer').style.display = 'block';
      } else if (type === 'line') {
        document.getElementById('lineChartContainer').style.display = 'block';
      }

      document.getElementById('insight').textContent = insights[type];
    }

    // Show bar chart by default
    showChart('bar');
