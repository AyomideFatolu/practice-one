const themeBtn = document.querySelector(".navbar__theme-btn");
themeBtn.addEventListener("click", () => {
    const body = document.body;
    if (body.className === "") {
        body.className = "dark";
        themeBtn.innerHTML = `<i class="uil uil-sun"></i>`;
    } else {
        body.className = "";
        themeBtn.innerHTML = `<i class="uil uil-moon"></i>`;
    }
})

const sidebarOpenBtn = document.querySelector(".sidebar__toggle-open");
const sidebarCloseBtn = document.querySelector(".sidebar__toggle-close");
const sidebar = document.querySelector(".sidebar");

sidebarOpenBtn.addEventListener("click", () => {
    sidebar.style.left = "0";
    sidebarCloseBtn.style.display = "inline-block";
    sidebarOpenBtn.style.display = "none"
})


sidebarCloseBtn.addEventListener("click", () => {
    sidebar.style.left = "-100%";
    sidebarCloseBtn.style.display = "none";
    sidebarOpenBtn.style.display = "inline-block";
})

const chart = document.getElementById('chart');

  new Chart(chart, {
    type: 'bar',
    data: {
      labels: ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"] ,
      datasets: [{
        label: 'sales for the month',
        data: [105665, 192820, 187636, 191292, 171273, 100283, 204283, 190873, 290283, 291283, 292373, 152432],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


const piechart = document.querySelector("#categories");
    
    const data = {
      //labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E', 'Category F', 'Category G'],
      datasets: [{
        label: 'Values',
        data: [80.4, 73, 55.4, 47.4],
        backgroundColor: [
          '#b1b1b1',
          '#F46300',
          '#0358B6',
          '#44DE28',
        ],
        hoverOffset: 10
      }]
    };

    new Chart(piechart, {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          tooltip: {
            enabled: true
          }
        }
      }
    });