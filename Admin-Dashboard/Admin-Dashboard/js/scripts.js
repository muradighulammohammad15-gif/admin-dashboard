//  SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

var chart = document.querySelector('#bar-chart');
var myChart = new Chart(
    chart, {
        type: 'bar',
        data: {
            labels: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
            datasets: [{
                data: [10, 8, 6, 4, 2],
                label: 'Count',
                height: 350,
                backgroundColor: [
                    '#246dec',
                    '#cc3c43',
                    '#367952',
                    '#f5b74f',
                    '#4f35a1'],
                    borderRadius: 15,
                    horizontal: false,
                    columnWidth: '40%',
            }]
        },
        options: {
            toolbar: {
                show: true,
            },
            elements: {
                point: {
                    backgroundColor: [
                        '#246dec'
                    ]
                }
            }
        }
    }
)

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const purchaseData = [31, 40, 28, 51, 42, 109, 100];

const salesData = [11, 32, 45, 32, 34, 52, 41];

const ctx = document.querySelector('#area-chart');
const ordersChart = new Chart(
    ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Purchase Orders',
                data: purchaseData,
                borderColor: '#4e73df',
                backgroundColor: 'rgba(78, 115, 223, 0.1)',
                borderWidth: 5,
                fill: true,
                tension: 0.4,
                yAxisID: 'yLeft'
            },
            {
                label: 'Sales Orders',
                data: salesData,
                borderColor: '#1cc88a',
                backgroundColor: 'rgba(28, 200, 138, 0.1)',
                borderWidth: 5,
                fill: true,
                tension: 0.4,
                yAxisID: 'yRight'
            }
        ]
        },

        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    align: 'center'
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    rtl: true,
                    titleAlign: 'right',
                    bodyAlign: 'right'
                }
            },
            scales: {
                yLeft: {
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Purchase Orders'
                    }
                },
                yRight: {
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Sales Orders'
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    }
)


