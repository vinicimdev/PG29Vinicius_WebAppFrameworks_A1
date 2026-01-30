<template>
    <div class="landing-page">
        <h1>Vini's Clicker Game</h1>
        <p>CLIIIIIIIIICK!</p>

        <!--Widgets :)-->
        <CounterWidget />
        <LeaderboardSummary />
    </div>
</template>

<script setup lang="ts">
    import CounterWidget from "../components/CounterWidget.vue";
    import LeaderboardSummary from "../components/LeaderboardSummary.vue"   
</script>

<style scoped>
    .landing-page {
        text-align: center;
        padding: 40px 20px;
        background-color: #ffffff;
    }

    .landing-page h1 {
        font-size: 48px;
        color: #9fc3cc;
        margin-bottom: 10px;
        font-family: 'Arial', 'Helvetica', sans-serif;
        font-weight: 700;
    }

    .landing-page p {
        font-size: 20px;
        color: #333333;
        margin-bottom: 40px;
        font-family: 'Arial', 'Helvetica', sans-serif;
    }
</style>

