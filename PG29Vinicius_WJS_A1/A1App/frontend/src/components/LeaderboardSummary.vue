<template>
    <div class="leaderboard-summary">
        <h2>Leaderboard Summary</h2>
        <table>
            <thread>
                <tr>
                    <th>Player</th>
                    <th>Score</th>
                </tr>
            </thread>

            <tbody>
                <tr v-for="(item, index) in leaderboardData" :key="index">
                    <td> {{ item.player }}</td>
                    <td> {{ item.score }}</td>
                </tr>
            </tbody>
        </table>

        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from "vue";

    type LeaderboardItem = {
        player: string;
        score: number;
    }

    const leaderboardData = ref<LeaderboardItem[]>([]);
    const errorMessage = ref("");

    async function fetchleaderboardData() {
        try {
            const res = await fetch("http://localhost:3000/api/leaderboard-summary");

            if (!res.ok) throw new Error(`Server error. ${res.status}`);

            const data = (await res.json()) as LeaderboardItem[];
            leaderboardData.value = data.slice(0, 3);
        }
        catch (error: any) {
            errorMessage.value = error?.message ?? "Unknown";
        }
    }

    onMounted(() => {
        fetchleaderboardData();
    });

</script>

<style scoped>
    .leaderboard-summary {
        margin: 40px auto;
        padding: 30px 20px;
        max-width: 600px;
    }

    .leaderboard-summary h2 {
        font-size: 28px;
        color: #9fc3cc;
        text-align: center;
        margin-bottom: 30px;
        font-family: 'Arial', 'Helvetica', sans-serif;
        font-weight: 700;
    }

    table {
        border-collapse: collapse;
        margin: auto;
        width: 100%;
        background-color: #ffffff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        overflow: hidden;
    }

    thead {
        background-color: #9fc3cc;
    }

    th {
        padding: 12px;
        text-align: left;
        font-weight: 600;
        color: #dbeeed;
        font-family: 'Arial', 'Helvetica', sans-serif;
    }

    td {
        padding: 12px;
        border-bottom: 1px solid #b8e3e4;
        color: #333333;
        font-family: 'Arial', 'Helvetica', sans-serif;
    }

    tbody tr {
        background-color: #dbeeed;
        transition: all 0.3s ease;
    }

    tbody tr:hover {
        background-color: #ffffff;
    }

    tbody tr:last-child td {
        border-bottom: none;
    }

    .error {
        color: #d32f2f;
        text-align: center;
        margin-top: 20px;
        font-weight: 600;
        font-family: 'Arial', 'Helvetica', sans-serif;
    }
</style>