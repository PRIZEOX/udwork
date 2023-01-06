// todo tree shake instead of importing all Bootstrap's JS
import * as bootstrap from 'bootstrap';
// todo tree shake instead of importing all Charts' JS
import Chart from 'chart.js/auto';
// Import our custom CSS
import '../frontend/scss/custom.scss';

document.addEventListener('DOMContentLoaded', function (event) {
  // Activate tooltips about marketing action
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]',
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl),
  );
  if (popoverList.length > 0) {
    popoverList[0].show();
  }

  // Cookies alert
  const toastElList = document.querySelectorAll('.toast');
  const toastList = [...toastElList].map(
    (toastEl) => new bootstrap.Toast(toastEl),
  );
  const age = document.cookie;
  if (age && age.indexOf('udaltonmeet=1') !== -1) {
  } else {
    toastList[0].show();
    toastElList[0].addEventListener('hide.bs.toast', () => {
      document.cookie = 'udaltonmeet=1';
    });
  }

  // Функции для калькуляторов
  function showNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  function getPaymentNew(sum, monthsCount, loan_rate) {
    const month_loan_rate = loan_rate / (100 * 12);
    const payment =
      (sum * month_loan_rate) / (1 - (1 + month_loan_rate) ** -monthsCount);
    const payment_array = [
      ['Месяц', 'Платеж', 'Основной долг', 'Проценты', 'Остаток'],
      [0, -sum, 0, 0, sum],
    ];
    for (let i = 1; i < monthsCount + 1; i++) {
      const interest_debt = month_loan_rate * payment_array[i][4];
      payment_array.push([
        i + 1,
        +payment.toFixed(0),
        +(+payment - +interest_debt).toFixed(0),
        +interest_debt.toFixed(0),
        +(+payment_array[i][4] - +payment + +interest_debt).toFixed(0),
      ]);
    }
    return payment_array;
  }
  function updateChart(sum, time, rate, chart) {
    const payments = getPaymentNew(sum, time, rate);
    payments.shift();
    payments.shift();
    chart.data.labels = payments.map((item) => +item[0] - 1);
    chart.data.datasets[0].data = payments.map((item) => item[2]);
    chart.data.datasets[1].data = payments.map((item) => item[3]);
    chart.options.plugins.title.text = `График платежей, ежемесячный платеж: ${showNumber(
      payments[0][2] + payments[0][3],
    )} руб.`;
    const result2 = document.querySelector('#total');
    result2.textContent = showNumber(payments[0][2] + payments[0][3]);
    chart.update();
  }
  function updateChartInv(sum, time, rate, invChart) {
    const payments = getPaymentNew(sum, time, rate);
    payments.shift();
    payments.shift();
    let acc = sum;
    invChart.data.labels = payments.map((item) => +item[0] - 1);
    invChart.data.datasets[0].data = payments.map((item) => {
      acc += item[3];
      return acc;
    });
    invChart.options.plugins.title.text = `График роста капитала, итог к концу периода: ${showNumber(
      acc,
    )} руб.`;
    const result2 = document.querySelector('#invTotal');
    result2.textContent = showNumber(acc);
    invChart.update();
  }

  // Калькулятор заемщика
  const lenderCtx = document.getElementById('lenderChart');
  if (lenderCtx) {
    const labels = [1, 2, 3, 4, 5, 6, 7];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Основной долг',
          data: [1, 2, 3, 4, 5, 6, 7],
          backgroundColor: '#637ec5',
          hoverBackgroundColor: '#4c6096',
        },
        {
          label: 'Проценты',
          data: [12, 22, 32, 42, 52, 62, 72],
          backgroundColor: '#7f9ce8',
          hoverBackgroundColor: '#4c6096',
        },
      ],
    };
    const config = {
      type: 'bar',
      data,
      options: {
        plugins: {
          title: {
            display: true,
            text: 'График платежей',
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    };
    const lenderChart = new Chart(lenderCtx, config);
    updateChart(500000, 12, 15, lenderChart);
    const sumRange = document.getElementById('sumRange');
    const rateRange = document.getElementById('rateRange');
    const timeRange = document.getElementById('timeRange');
    sumRange.addEventListener('input', (event) => {
      const result = document.querySelector('#sum');
      result.textContent = showNumber(event.target.value);
      updateChart(
        +sumRange.value,
        +timeRange.value,
        +rateRange.value,
        lenderChart,
      );
    });
    rateRange.addEventListener('input', (event) => {
      const result = document.querySelector('#rate');
      result.textContent = showNumber(event.target.value);
      updateChart(
        +sumRange.value,
        +timeRange.value,
        +rateRange.value,
        lenderChart,
      );
    });
    timeRange.addEventListener('input', (event) => {
      const result = document.querySelector('#time');
      result.textContent = showNumber(event.target.value);
      updateChart(
        +sumRange.value,
        +timeRange.value,
        +rateRange.value,
        lenderChart,
      );
    });
  }

  // Калькулятор инвестора
  const ctxInv = document.getElementById('invChart');
  if (ctxInv) {
    const invLabels = [1, 2, 3, 4, 5, 6, 7];
    const invData = {
      labels: invLabels,
      datasets: [
        {
          label: 'Итого капитализация',
          data: [1, 2, 3, 4, 5, 6, 7],
          backgroundColor: '#637ec5',
          borderColor: '#4c6096',
          hoverBackgroundColor: '#4c6096',
        },
      ],
    };
    const invConfig = {
      type: 'line',
      data: invData,
      options: {
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'График роста капитала',
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    };
    const invChart = new Chart(ctxInv, invConfig);
    updateChartInv(5000000, 36, 20, invChart);
    const invsumRange = document.getElementById('invsumRange');
    const invrateRange = document.getElementById('invrateRange');
    const invtimeRange = document.getElementById('invtimeRange');
    invsumRange.addEventListener('input', (event) => {
      const result = document.querySelector('#invsum');
      result.textContent = showNumber(event.target.value);
      updateChartInv(
        +invsumRange.value,
        +invtimeRange.value,
        +invrateRange.value,
        invChart,
      );
    });
    invrateRange.addEventListener('input', (event) => {
      const result = document.querySelector('#invrate');
      result.textContent = showNumber(event.target.value);
      updateChartInv(
        +invsumRange.value,
        +invtimeRange.value,
        +invrateRange.value,
        invChart,
      );
    });
    invtimeRange.addEventListener('input', (event) => {
      const result = document.querySelector('#invtime');
      result.textContent = showNumber(event.target.value);
      updateChartInv(
        +invsumRange.value,
        +invtimeRange.value,
        +invrateRange.value,
        invChart,
      );
    });
  }
});
window.addEventListener(
  'scroll',
  function () {
    if (window.pageYOffset > 40) {
      document.getElementById('topmenu').classList.add('menu');
    } else if (window.pageYOffset <= 40) {
      document.getElementById('topmenu').classList.remove('menu');
    }
  },
  true,
);
