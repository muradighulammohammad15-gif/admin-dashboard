const chartsData = [
    {
        id: 'bar',
        name: 'نمودارمیله ای',
        icon: '',
        description: 'نمودار میله ای برای مقایسه مقادیر مختلف در دسته های مجزا استفاده می شود.',
        type: 'bar',
        data: {
            labels: ['سنبله', 'اسد', 'سرطان', 'جوزا', 'ثور', 'حمل'],
            datasets: [{
                label: 'فروش ماهانه',
                data: [65, 59, 80, 81, 56, 55],
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
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#333',
                        font: {
                            size: 15,
                            family: 'Arial'
                        }
                    }
                },
                title: {
                    display:true,
                    text: 'فروش ماهانه شرکت',
                    color: '#333',
                    font: {
                        size: 20,
                        family: 'Arial'
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
    },
    {
        id: 'line',
        name: 'نمودار خطی',
        icon: '',
        description: 'نمودار خطی برای نمایش روند تغییرات داده ها در طول زمان استفاده می شود.',
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
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#333',
                        font: {
                            size: 15,
                            family: 'Arial'
                        }
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
    },
    {
        id: 'pie',
        name: 'نمودار دایره ای',
        icon: '',
        description: 'نمودار دایره ای برای نمایش سهم از یک کل استفاده می شود.',
        type: 'pie',
        data: {
            labels: ['سایر', 'دسکتاپ', 'تبلت', 'موبایل'],
            datasets: [{
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
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#333',
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    },
    {
        id: 'area',
        name: 'نمودار منطقه ای',
        icon: '',
        description: 'نمودار منطقه ای برای نمایش حجم و سطح زیر منحنی داده ها استفاده می شود.',
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
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#333',
                        font: {
                            size: 14
                        }
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
    },
    {
        id: 'radar',
        name: 'نمودار راداری',
        icon: '',
        description: 'نمودار راداری برای نمایش داده های چند بعدی و مقایسه چند متغیر استفاده می شود.',
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
            }
        ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#333',
                        font: {
                            size: 14
                        }
                    }
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    grid: {
                       color: 'rgba(0, 0, 0, 0.1)'   
                    },
                    pointLabels: {
                        color: '#333'
                    },
                    ticks: {
                        color: '#333',
                        backdropColor: 'transparent'
                    } 
                }  
            }
        }
    },
    {
        id: 'doughnut',
        name: 'نمودار دونات',
        icon: '',
        description: 'نمودار دونات مشابه نمودار دایره ای است اما با فضای خالی در مرکز که برای نمایش اطلاعات اضافی استفاده می شود.',
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
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#333',
                        font: {
                            size: 14
                        }
                    }
                }
            }
        }
    }

];

const searchBtn = document.getElementById('searchBtn');
const searchDropdown = document.getElementById('searchDropdown');
const searchInput = document.getElementById('searchInput');
const chartsList = document.getElementById('chartsList');
const emptyState = document.getElementById('emptyState');
const chartPage = document.getElementById('chartPage');
const backButton = document.getElementById('backButton');
const chartPageTitle = document.getElementById('chartPageTitle');
const chartCanvas = document.getElementById('chartCanvas');
const chartDescription = document.getElementById('chartDescription');

let currentChart = null;

searchBtn.addEventListener('click', function(e){
    e.stopPropagation();
    const isVisible = searchDropdown.style.display === 'block';
    searchDropdown.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) {
        searchInput.focus();
        chartsList.innerHTML = '';
        emptyState.style.display = 'block';
        chartsList.appendChild(emptyState);
        // populateChartsList();
    }
});

function populateChartsList(filter = '') {
    chartsList.innerHTML = '';

    if (!filter.trim()) {
        emptyState.style.display = 'block';
        chartsList.appendChild(emptyState);
        return;
    }

    emptyState.style.display = 'none';

    const filteredCharts = chartsData.filter(chart =>
    chart.name.includes(filter) ||
    chart.name.replace(/\s/g, '').includes(filter.replace(/\s/g, ''))
    );

    if (filteredCharts.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'empty-state';
        noResults.textContent = 'نتیجه ای یافت نشد';
        noResults.style.justifyContent = 'center';
        noResults.style.cursor = 'default';
        chartsList.appendChild(noResults);
        return;
    }

    filteredCharts.forEach(chart => {
        const chartItem = document.createElement('div');
        chartItem.className = 'chart-item';
        chartItem.innerHTML = `
        <i>${chart.icon}</i>
        <span>${chart.name}</span>
        `;
        chartItem.addEventListener('click', () => showChart(chart));
        chartsList.appendChild(chartItem);
    });

   
}

function showChart(chart) {
    console.log('نمایش نمودار:', chart.name);


    searchDropdown.style.display = 'none';
    searchInput.value = '';
    chartPage.style.display = 'block';
    chartPageTitle.textContent = chart.name;
    chartDescription.textContent = chart.description;
    
    if (currentChart) {
        currentChart.destroy();
    }

    const ctx = chartCanvas.getContext('2d');

    chartCanvas.width = chartCanvas.offsetWidth;
    chartCanvas.height = chartCanvas.offsetHeight;

    try {
        currentChart = new Chart(ctx, {
            type: chart.type,
            data: chart.data,
            options: {
                ...chart.options,
                responsive: true,
                maintainAspectRatio: false,
            }
        });
        console.log('نمودار با موفقیت ایجاد شد');
    } catch (error) {
        console.error('خطا در ایجاد نمودار:', error);
        }
    };

searchInput.addEventListener('input', function() {
    populateChartsList(this.value);
});

backButton.addEventListener('click', function() {
    chartPage.style.display = 'none';
    if (currentChart) {
        currentChart.destroy();
        currentChart = null;
    }
});

document.addEventListener('click', function(e) {
    if (!searchDropdown.contains(e.target) && e.target !== searchBtn) {
        searchDropdown.style.display = 'none';
        searchInput.value = '';
        chartsList.innerHTML = '';
        emptyState.style.display = 'block';
        chartsList.appendChild(emptyState);
    }
});
searchDropdown.addEventListener('click', function(e) {
    e.stopPropagation();
});

//populateChartsList();

window.addEventListener('resize', function() {
    if (currentChart) {
        currentChart.resize();
    }
});