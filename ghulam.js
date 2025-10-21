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
                borderWidth: 3,
                borderRadius: 10
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
                    text: 'نمودار میله ای برای مقایسه مقادیر مختلف در دسته های مجزا استفاده می شود',
                    color: '#333',
                    font: {
                        size: 13,
                        family: 'Tahoma'
                    }
                }
            },
            scales: {
               x: {
                ticks: {
                    color: 'darkred',
                    font: {
                        size: 15,
                        weight: 'bold'
                    }
                },
                grid: {
                    color: 'rgba(200, 0, 0, 0.1)'
                }
               },
               y: {
                ticks: {
                    color: 'green',
                    font: {
                        size: 15
                    }
                },
                grid: {
                    color: 'rgba(0, 100, 0, 0.2)'
                }
               }
            }
        }
    }
)
const ctx = document.querySelector('#area-chart');
const ordersChart = new Chart(
    ctx, {
        type: 'line',
        data: {
            labels: ['هفته ۴', 'هفته ۳', 'هفته ۲', 'هفته ۱'],
            datasets: [{
                label: 'درآمد',
                data: [30, 45, 35, 60],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            },
            {
                label: 'هزینه',
                data: [20, 35, 25, 40],
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                tooltip: {
                    intersect: false
                },
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
                    text: 'نمودار منطقه ای برای نمایش حجم و سطح زیر منحنی داده ها استفاده می شود',
                    color: '#333',
                    font: {
                        size: 13,
                        family: 'Tahoma'
                    }
                }
            },
            scales: {
                x: {
                 ticks: {
                     color: 'darkred',
                     font: {
                         size: 15,
                         weight: 'bold'
                     }
                 },
                 grid: {
                     color: 'rgba(200, 0, 0, 0.1)'
                 }
                },
                y: {
                    beginAtZero: true,
                 ticks: {
                     color: 'green',
                     font: {
                         size: 15
                     }
                 },
                 grid: {
                     color: 'rgba(0, 100, 0, 0.2)'
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
            labels: ['نارنجی', 'بنفش', 'سبز', 'زرد', 'آبی', 'قرمز'],
            datasets: [{
                label: 'رنگ های مورد علاقه',
                data: [12, 19, 3, 5, 2, 3],
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
                borderWidth: 1
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
                    text: 'نمودار دونات مشابه نمودار دایره ای است اما با فضای خالی در مرکز که برای نمایش اطلاعات اضافی استفاده می شود',
                    color: '#333',
                    font: {
                        size: 13,
                        family: 'Tahoma'
                    }
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
            labels: ['سایر', 'دسکتاپ', 'تبلت', 'موبایل'],
            datasets: [{
                label: 'سهم از کل',
                data: [45, 25, 20, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)'
                ],
                borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
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
                    text: 'نمودار دایره ای برای نمایش سهم از یک کل استفاده می شود',
                    color: '#333',
                    font: {
                        size: 13,
                        family: 'Tahoma'
                    }
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
            labels: ['خلاقیت', 'انعطاف', 'تحمل', 'دقت', 'قدرت', 'سرعت'],
            datasets: [{
                label: 'تیم A',
                data: [65, 59, 90, 81, 56, 55],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                pointRadius: 6,
                pointHoverRadius: 9
            },
            {
                label: 'تیم B',
                data: [28, 48, 40, 19, 96, 27],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
                pointRadius: 6,
                pointHoverRadius: 9
            }
        ]
        },
        options: {
            scales: {
                r: {
                    pointLabels: {
                        color: 'darkblue',
                        font: {
                            size: 15,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        color: 'green',
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        backdropColor: 'transparent'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.2)'
                    },
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.4)'
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                tooltip: {
                    intersect: false
                },
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
                    text: 'نمودار راداری برای نمایش داده های چند بعدی و مقایسه چند متغیر استفاده می شود',
                    color: '#333',
                    font: {
                        size: 13,
                        family: 'Tahoma'
                    }
                }
            },
        }
    }
);
var chart1 = document.querySelector('#polararea-chart');
var myChart1 = new Chart(
    chart1, {
        type: 'polarArea',
        data: {
            labels: ['محصول E', 'محصول D', 'محصول C', 'محصول B', 'محصول A'],
            datasets: [{
                data: [12, 19, 7, 14, 10],
                label: 'مقایسه چند محصول',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'],
                    borderColor: '#fff',
                    borderWidth: 0,
                    borderRadius: 20,
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#333',
                        font: {
                            size: 10,
                            family: 'Tahoma',
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    enabled: true
                },
                title: {
                    display:true,
                    position: 'bottom',
                    text: 'از این نمودار معمولا برای مقایسه چند مقدار کم در یک نگاه استفاده می شود',
                    color: '#333',
                    font: {
                        size: 13,
                        family: 'Tahoma'
                    }
                }
            },
            scales: {
                r: {
                    ticks: {
                        backdropColor: 'trasnparent',
                        color: 'white'
                    }
                }
            },
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
            labels: ['شب', 'عصر', 'ظهر', 'صبح'],
            datasets: [{
                label: 'بازدید کاربران',
                data: [12, 19, 3, 17],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                tooltip: {
                    intersect: false
                },
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
                    text: 'نمودار خطی برای نمایش روند تغییرات داده ها در طول زمان استفاده می شود',
                    color: '#333',
                    font: {
                        size: 13,
                        family: 'Tahoma'
                    }
                }  
            },
            scales: {
                x: {
                 ticks: {
                     color: 'darkred',
                     font: {
                         size: 15,
                         weight: 'bold'
                     }
                 },
                 grid: {
                     color: 'rgba(200, 0, 0, 0.1)'
                 }
                },
                y: {
                    beginAtZero: true,
                 ticks: {
                     color: 'green',
                     font: {
                         size: 15
                     }
                 },
                 grid: {
                     color: 'rgba(0, 100, 0, 0.2)'
                 }
                }
             }
        }
    }
)


