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
            labels: ['سنبله', 'اسد', 'سرطان', 'جوزا', 'ثور', 'حمل'],
            datasets: [{
                data: [65, 59, 80, 81, 56, 55],
                label: 'فروش ماهانه',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#333',
                        font: {
                            size: 15,
                            family: 'Tahoma',
                            weight: 'bold'
                        }
                    }
                },
                title: {
                    display:true,
                    position: 'bottom',
                    text: 'فروش ماهانه شرکت',
                    color: '#333',
                    font: {
                        size: 15,
                        family: 'Tahoma'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#333'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                    
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#333'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
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
);

var chart1 = document.querySelector('#doughnut-chart');
var myChart1 = new Chart(
    chart1, {
        type: 'doughnut',
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
var chart1 = document.querySelector('#pie-chart');
var myChart1 = new Chart(
    chart1, {
        type: 'pie',
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
var chart1 = document.querySelector('#radar-chart');
var myChart1 = new Chart(
    chart1, {
        type: 'radar',
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
var chart1 = document.querySelector('#polararea-chart');
var myChart1 = new Chart(
    chart1, {
        type: 'polarArea',
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
var chart1 = document.querySelector('#line-chart');
var myChart1 = new Chart(
    chart1, {
        type: 'line',
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


