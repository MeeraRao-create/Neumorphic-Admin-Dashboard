        function collapseSidebar() {
            document.querySelector('.sidebar').classList.add('sidebar-collapsed');
            document.querySelector('.main-content').classList.add('main-content-expanded');
        }

        function expandSidebar() {
            document.querySelector('.sidebar').classList.remove('sidebar-collapsed');
            document.querySelector('.main-content').classList.remove('main-content-expanded');
        }

        document.querySelectorAll('.card, .chart-card, .sidebar a').forEach(element => {
            element.addEventListener('click', (e) => {
                if (element.classList.contains('sidebar')) return;
                element.classList.add('neumorphic-pressed');
                setTimeout(() => {
                    element.classList.remove('neumorphic-pressed');
                }, 200);
            });
        });

        document.querySelectorAll('.sidebar a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        const salesChart = new Chart(document.getElementById('salesChart'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Sales ($)',
                        data: [12000, 15000, 10000, 18000, 20000, 22000],
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.3)',
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Expenses ($)',
                        data: [8000, 10000, 9000, 12000, 11000, 13000],
                        borderColor: '#ed8936',
                        backgroundColor: 'rgba(237, 137, 54, 0.3)',
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' }
                },
                scales: {
                    y: { beginAtZero: true }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutBounce'
                }
            }
        });

        const userPieChart = new Chart(document.getElementById('userPieChart'), {
            type: 'pie',
            data: {
                labels: ['New Users', 'Returning Users', 'Guests'],
                datasets: [{
                    data: [40, 35, 25],
                    backgroundColor: ['#3b82f6', '#ed8936', '#48bb78'],
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutElastic'
                }
            }
        });

        const trafficChart = new Chart(document.getElementById('trafficChart'), {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Visitors',
                    data: [500, 700, 600, 800, 900, 1000, 850],
                    backgroundColor: 'rgba(59, 130, 246, 0.5)',
                    borderColor: '#3b82f6',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' }
                },
                scales: {
                    y: { beginAtZero: true }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutBounce'
                }
            }
        });

        const cans = document.getElementsByTagName("canvas");
for (let i = 0; i < cans.length; i++) {
  cans[i].style.display = "block";
}
        const orderDoughnutChart = new Chart(document.getElementById('orderDoughnutChart'), {
            type: 'doughnut',
            data: {
                labels: ['Pending', 'Completed', 'Cancelled'],
                datasets: [{
                    data: [30, 50, 20],
                    backgroundColor: ['#ed8936', '#48bb78', '#f56565'],
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutElastic'
                }
            }
        });

        const categoryBarChart = new Chart(document.getElementById('categoryBarChart'), {
            type: 'bar',
            data: {
                labels: ['Electronics', 'Clothing', 'Books', 'Home'],
                datasets: [{
                    label: 'Revenue ($)',
                    data: [5000, 3000, 2000, 4000],
                    backgroundColor: ['#3b82f6', '#ed8936', '#48bb78', '#f56565'],
                    borderColor: '#fff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' }
                },
                scales: {
                    y: { beginAtZero: true }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutBounce'
                }
            }
        });
