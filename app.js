const professionalSections = [
  {
    title: "Hugo",
    data: [
      { concepto: "Sesiones individuales", cantidad: 18, importe: 720 },
      { concepto: "Sesiones grupales", cantidad: 6, importe: 210 },
      { concepto: "Bonos vendidos", cantidad: 3, importe: 360 },
    ],
  },
  {
    title: "June",
    data: [
      { concepto: "Terapias", cantidad: 20, importe: 800 },
      { concepto: "Supervisión", cantidad: 4, importe: 200 },
      { concepto: "Material extra", cantidad: 2, importe: 60 },
    ],
  },
  {
    title: "Mari Carmen",
    data: [
      { concepto: "Sesiones", cantidad: 14, importe: 560 },
      { concepto: "Evaluaciones", cantidad: 5, importe: 250 },
      { concepto: "Incentivos", cantidad: 2, importe: 90 },
    ],
  },
  {
    title: "Recepción",
    data: [
      { concepto: "Salario base", cantidad: 1, importe: 1100 },
      { concepto: "Horas extra", cantidad: 12, importe: 180 },
      { concepto: "Incentivos", cantidad: 1, importe: 75 },
    ],
  },
  {
    title: "Nutris",
    data: [
      { concepto: "Consultas", cantidad: 25, importe: 1000 },
      { concepto: "Planes personalizados", cantidad: 9, importe: 405 },
      { concepto: "Seguimientos", cantidad: 15, importe: 225 },
    ],
  },
  {
    title: "Logopedas",
    data: [
      { concepto: "Sesiones clínica", cantidad: 22, importe: 880 },
      { concepto: "Sesiones online", cantidad: 8, importe: 320 },
      { concepto: "Talleres", cantidad: 2, importe: 160 },
    ],
  },
  {
    title: "Nkane",
    data: [
      { concepto: "Intervenciones", cantidad: 10, importe: 500 },
      { concepto: "Formaciones", cantidad: 3, importe: 210 },
      { concepto: "Investigación", cantidad: 1, importe: 150 },
    ],
  },
];

const formatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
});

function renderProfessionalTables() {
  const container = document.querySelector("#professionalTables");
  container.innerHTML = "";

  professionalSections.forEach((section) => {
    const total = section.data.reduce((sum, item) => sum + item.importe, 0);
    const tableCard = document.createElement("article");
    tableCard.className = "table-card";

    const header = document.createElement("header");
    header.textContent = `${section.title} · Total ${formatter.format(total)}`;
    tableCard.appendChild(header);

    const table = document.createElement("table");
    table.innerHTML = `
      <thead>
        <tr>
          <th>Concepto</th>
          <th>Unidades</th>
          <th>Importe</th>
        </tr>
      </thead>
      <tbody>
        ${section.data
          .map(
            (item) => `
              <tr>
                <td>${item.concepto}</td>
                <td>${item.cantidad}</td>
                <td class="amount">${formatter.format(item.importe)}</td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    `;

    tableCard.appendChild(table);
    container.appendChild(tableCard);
  });
}

function setupSummary() {
  const totalRevenue = 18650;
  const totalPayments = professionalSections
    .flatMap((section) => section.data)
    .reduce((sum, item) => sum + item.importe, 0);
  const margin = totalRevenue - totalPayments;

  document.querySelector("#summary-revenue").textContent = formatter.format(
    totalRevenue,
  );
  document.querySelector("#summary-payments").textContent = formatter.format(
    totalPayments,
  );
  document.querySelector("#summary-margin").textContent = formatter.format(
    margin,
  );
}

function setupCharts() {
  const revenueCtx = document.getElementById("revenueChart");
  const paymentsCtx = document.getElementById("paymentsChart");
  const cashflowCtx = document.getElementById("cashflowChart");

  const revenueChart = new Chart(revenueCtx, {
    type: "line",
    data: {
      labels: ["L", "M", "X", "J", "V", "S", "D"],
      datasets: [
        {
          label: "Ingresos",
          data: [1200, 980, 1350, 1100, 1480, 1620, 1740],
          tension: 0.35,
          fill: true,
          backgroundColor: "rgba(58, 111, 248, 0.12)",
          borderColor: "#3a6ff8",
          pointRadius: 3,
          pointBackgroundColor: "#3a6ff8",
        },
      ],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: false, ticks: { callback: (value) => formatter.format(value) } },
        x: { grid: { display: false } },
      },
    },
  });

  const paymentsByMonth = professionalSections.reduce((acc, section) => {
    section.data.forEach((item, index) => {
      acc[index] = (acc[index] || 0) + item.importe;
    });
    return acc;
  }, []);

  const paymentsChart = new Chart(paymentsCtx, {
    type: "bar",
    data: {
      labels: ["Honorarios", "Variables", "Complementos"],
      datasets: [
        {
          label: "Importe",
          data: paymentsByMonth,
          backgroundColor: [
            "rgba(58, 111, 248, 0.85)",
            "rgba(58, 111, 248, 0.65)",
            "rgba(58, 111, 248, 0.45)",
          ],
          borderRadius: 12,
        },
      ],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: {
          ticks: {
            callback: (value) => formatter.format(value),
          },
        },
      },
    },
  });

  const cashflowChart = new Chart(cashflowCtx, {
    type: "line",
    data: {
      labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Flujo de caja",
          data: [4000, 5200, 4700, 6100, 6900, 7200, 8000],
          borderColor: "#16a34a",
          backgroundColor: "rgba(22, 163, 74, 0.15)",
          fill: true,
          tension: 0.35,
          pointRadius: 3,
        },
      ],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: {
          ticks: {
            callback: (value) => formatter.format(value),
          },
        },
        x: {
          grid: { display: false },
        },
      },
    },
  });

  return { revenueChart, paymentsChart, cashflowChart };
}

window.addEventListener("DOMContentLoaded", () => {
  renderProfessionalTables();
  setupSummary();
  setupCharts();
});
