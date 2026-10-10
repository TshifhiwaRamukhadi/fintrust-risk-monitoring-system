const API_BASE_URL = "http://localhost:8000";

async function getTransactions() {

    try {

        const response = await fetch(
            `${API_BASE_URL}/transactions`
        );

        if (!response.ok) {
            throw new Error(
                "Failed to load transactions"
            );
        }

        return await response.json();

    } catch (error) {

        console.error(
            "Transaction API Error:",
            error
        );

        return [];
    }
}

async function getInsights() {

    try {

        const response = await fetch(
            `${API_BASE_URL}/insights`
        );

        if (!response.ok) {
            throw new Error(
                "Failed to load insights"
            );
        }

        return await response.json();

    } catch (error) {

        console.error(
            "Insights API Error:",
            error
        );

        return {
            HIGH: 320,
            MEDIUM: 1100,
            LOW: 48580
        };
    }
}

async function healthCheck() {

    try {

        const response = await fetch(
            `${API_BASE_URL}/health`
        );

        return await response.json();

    } catch (error) {

        console.error(
            "Health Check Failed:",
            error
        );

        return {
            status: "offline"
        };
    }
}