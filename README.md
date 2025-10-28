# Vista financiera MBS

Este proyecto contiene una vista financiera simplificada en formato web
estático. Presenta los gráficos principales en la parte superior y todas las
tablas de pagos de profesionales agrupadas en un bloque inferior, tal y como se
solicitó.

## Código para Avada

Copie y pegue el siguiente bloque en Avada (o en cualquier constructor que
admita HTML) para obtener la vista completa con estilos, datos y gráficos.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vista financiera</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
      :root {
        --background: #f7f8fb;
        --surface: #ffffff;
        --surface-alt: #f0f2f9;
        --primary: #3a6ff8;
        --primary-light: #e8edff;
        --text: #1f2430;
        --text-muted: #6b7280;
        --border: #d8dbe6;
        --positive: #16803c;
        --negative: #c0392b;
        font-family: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        background: var(--background);
        color: var(--text);
      }

      .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.75rem 3vw;
        background: var(--surface);
        border-bottom: 1px solid var(--border);
      }

      .branding h1 {
        margin: 0;
        font-size: 1.75rem;
        font-weight: 700;
      }

      .subtitle {
        margin: 0.25rem 0 0;
        color: var(--text-muted);
        font-size: 0.95rem;
      }

      .filters {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: var(--text-muted);
      }

      select {
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--border);
        border-radius: 0.75rem;
        font-size: 0.95rem;
        background: var(--surface-alt);
        color: var(--text);
      }

      main {
        padding: 2rem 3vw 3rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .financial-overview {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .summary-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        gap: 1rem;
      }

      .summary-card {
        background: var(--surface);
        border-radius: 1.25rem;
        padding: 1.5rem;
        border: 1px solid var(--border);
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .summary-card .label {
        font-size: 0.9rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }

      .summary-card .value {
        font-size: 1.75rem;
        font-weight: 600;
      }

      .trend {
        font-size: 0.9rem;
        font-weight: 500;
      }

      .trend.positive {
        color: var(--positive);
      }

      .trend.negative {
        color: var(--negative);
      }

      .trend.neutral {
        color: var(--text-muted);
      }

      .charts {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.25rem;
      }

      .chart-card {
        background: var(--surface);
        border-radius: 1.25rem;
        padding: 1.25rem;
        border: 1px solid var(--border);
        display: flex;
        flex-direction: column;
        min-height: 320px;
      }

      .chart-header {
        display: flex;
        flex-direction: column;
        margin-bottom: 0.75rem;
        gap: 0.25rem;
      }

      .chart-header h2 {
        margin: 0;
        font-size: 1.1rem;
      }

      .chart-subtitle {
        font-size: 0.9rem;
        color: var(--text-muted);
      }

      .tables {
        background: var(--surface);
        border-radius: 1.5rem;
        border: 1px solid var(--border);
        padding: 1.5rem 1.75rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .tables-header h2 {
        margin: 0;
        font-size: 1.35rem;
      }

      .tables-header p {
        margin: 0.25rem 0 0;
        color: var(--text-muted);
        font-size: 0.95rem;
      }

      .table-grid {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      }

      .table-card {
        border: 1px solid var(--border);
        border-radius: 1rem;
        overflow: hidden;
        background: var(--surface-alt);
        display: flex;
        flex-direction: column;
      }

      .table-card header {
        background: var(--primary-light);
        color: var(--primary);
        padding: 0.85rem 1rem;
        font-weight: 600;
        font-size: 1rem;
      }

      .table-card table {
        width: 100%;
        border-collapse: collapse;
      }

      .table-card th,
      .table-card td {
        text-align: left;
        padding: 0.65rem 1rem;
        border-bottom: 1px solid var(--border);
        font-size: 0.95rem;
      }

      .table-card tbody tr:last-child td {
        border-bottom: none;
      }

      .table-card tbody tr:hover {
        background: rgba(58, 111, 248, 0.08);
      }

      .amount {
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }

      @media (max-width: 768px) {
        .top-bar {
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }

        main {
          padding: 1.5rem 5vw 2.5rem;
        }

        .chart-card {
          min-height: 280px;
        }
      }
    </style>
  </head>
  <body>
    <header class="top-bar">
      <div class="branding">
        <h1>Vista financiera</h1>
        <p class="subtitle">
          Seguimiento consolidado de la caja y pagos a profesionales
        </p>
      </div>
      <div class="filters">
        <label for="date-range">Rango:</label>
        <select id="date-range">
          <option value="last-30">Últimos 30 días</option>
          <option value="last-quarter">Último trimestre</option>
          <option value="year">Año actual</option>
        </select>
      </div>
    </header>

    <main>
      <section class="financial-overview">
        <div class="summary-cards">
          <article class="summary-card">
            <span class="label">Ingresos</span>
            <span class="value" id="summary-revenue">€0</span>
            <span class="trend positive">+5.3% vs. mes anterior</span>
          </article>
          <article class="summary-card">
            <span class="label">Pagos a profesionales</span>
            <span class="value" id="summary-payments">€0</span>
            <span class="trend negative">-2.1% vs. mes anterior</span>
          </article>
          <article class="summary-card">
            <span class="label">Margen neto</span>
            <span class="value" id="summary-margin">€0</span>
            <span class="trend neutral">= estable</span>
          </article>
        </div>

        <div class="charts">
          <article class="chart-card">
            <div class="chart-header">
              <h2>Evolución de ingresos</h2>
              <span class="chart-subtitle">Ingresos diarios</span>
            </div>
            <canvas id="revenueChart" aria-label="Evolución de ingresos" role="img"></canvas>
          </article>
          <article class="chart-card">
            <div class="chart-header">
              <h2>Pagos de profesionales</h2>
              <span class="chart-subtitle">Distribución mensual</span>
            </div>
            <canvas id="paymentsChart" aria-label="Pagos de profesionales" role="img"></canvas>
          </article>
          <article class="chart-card">
            <div class="chart-header">
              <h2>Balance de caja</h2>
              <span class="chart-subtitle">Flujo de caja acumulado</span>
            </div>
            <canvas id="cashflowChart" aria-label="Balance de caja" role="img"></canvas>
          </article>
        </div>
      </section>

      <section class="tables">
        <header class="tables-header">
          <h2>Pagos de profesionales</h2>
          <p>
            Sección consolidada con pagos a los equipos de Nutrición, Logopedia,
            Nkane y el resto de profesionales.
          </p>
        </header>

        <div class="table-grid" id="professionalTables"></div>
      </section>
    </main>

    <script>
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

        new Chart(revenueCtx, {
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
              y: {
                beginAtZero: false,
                ticks: { callback: (value) => formatter.format(value) },
              },
              x: { grid: { display: false } },
            },
          },
        });

        const paymentsByConcept = professionalSections.reduce((acc, section) => {
          section.data.forEach((item, index) => {
            acc[index] = (acc[index] || 0) + item.importe;
          });
          return acc;
        }, []);

        new Chart(paymentsCtx, {
          type: "bar",
          data: {
            labels: ["Honorarios", "Variables", "Complementos"],
            datasets: [
              {
                label: "Importe",
                data: paymentsByConcept,
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

        new Chart(cashflowCtx, {
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
      }

      window.addEventListener("DOMContentLoaded", () => {
        renderProfessionalTables();
        setupSummary();
        setupCharts();
      });
    </script>
  </body>
</html>
```
