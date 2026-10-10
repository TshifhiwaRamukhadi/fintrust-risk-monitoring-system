async function loadDashboard() {

    const insights = await getInsights();

    document.getElementById("highRisk").textContent =
        insights.HIGH || 0;

    document.getElementById("mediumRisk").textContent =
        insights.MEDIUM || 0;

    document.getElementById("lowRisk").textContent =
        insights.LOW || 0;

    const total =
        (insights.HIGH || 0) +
        (insights.MEDIUM || 0) +
        (insights.LOW || 0);

    document.getElementById("totalTransactions").textContent =
        total;

    const ctx = document.getElementById("riskChart");

    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: [
                "High Risk",
                "Medium Risk",
                "Low Risk"
            ],
            datasets: [{
                data: [
                    insights.HIGH || 0,
                    insights.MEDIUM || 0,
                    insights.LOW || 0
                ],
                backgroundColor: [
                    "#dc3545",
                    "#ffc107",
                    "#28a745"
                ]
            }]
        }
    });
}

loadDashboard();