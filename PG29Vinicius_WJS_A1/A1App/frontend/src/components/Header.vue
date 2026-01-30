<template>
    <nav class="header-container">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/leaderboard">Leaderboard</router-link>
        <router-link to="/contact">Contact</router-link>
    </nav>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>

<style scoped>
    .header-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
        padding: 30px 20px;
        background-color: #dbeeed;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    a {
        font-size: 24px;
        font-weight: 700;
        color: #9fc3cc;
        text-decoration: none;
        padding: 10px 15px;
        border-bottom: 3px solid transparent;
        transition: all 0.3s ease;
        cursor: pointer;
        font-family: 'Arial', 'Helvetica', sans-serif;
    }

    a:hover {
        color: #b8e3e4;
        border-bottom: 3px solid #b8e3e4;
        transform: translateY(-2px);
    }
</style>