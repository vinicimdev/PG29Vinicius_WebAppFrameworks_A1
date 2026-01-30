<template>
    <div class="leaderboard-page">
        <h1>Leaderboard</h1>
        <!--Widgets :)-->
        <LeaderboardTable :data="leaderboardData"/>
        <LeaderboardSettings
            @sort-by-score="handleSortByScore"
            @sort-by-name="handleSortByName"
            @refresh="handleRefresh"
        />
    </div>
</template>

<script setup lang="ts">
    import LeaderboardTable from '../components/LeaderboardTable.vue';
    import LeaderboardSettings from '../components/LeaderboardSettings.vue';
    import { ref, onMounted } from 'vue'

    interface LeaderboardItem {
        player: string
        score: number
    }

    const leaderboardData = ref<LeaderboardItem[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    const fetchData = async () => {
        loading.value = true
        error.value = null

        try {
            const res = await fetch('http://localhost:3000/api/leaderboard-summary')

            if (!res.ok) {
                throw new Error('Error fetching data from the server.')
            }

            const data = await res.json()
            leaderboardData.value = data
        }
        catch (err) {
            error.value = err instanceof Error ? err.message : 'Unknown error'
        } finally {
            loading.value = false
        }
    }

    const handleSortByName = () => {
        leaderboardData.value.sort((a, b) => {
            return a.player.localeCompare(b.player)
        })
    }
    const handleSortByScore = () => {
        leaderboardData.value.sort((a, b) => {
            return b.score - a.score
        })
    }
    const handleRefresh = () => {
        fetchData()
    }

    onMounted(() => {
        fetchData()
    })
</script>

<style scoped>
    .leaderboard-page {
        text-align: center;
        padding: 40px 20px;
        background-color: #ffffff;
    }

    .leaderboard-page h1 {
        font-size: 48px;
        color: #9fc3cc;
        margin-bottom: 40px;
        font-family: 'Arial', 'Helvetica', sans-serif;
        font-weight: 700;
    }
</style>

