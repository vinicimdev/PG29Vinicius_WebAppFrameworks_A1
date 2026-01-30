<template>
    <div class="contact-page">
        <h1>Contact Us</h1>
        <form @submit.prevent="handleSubmit">
            <input v-model="name" placeholder="Your name...">
            <input v-model="email" placeholder="Your email (e.g: john_smith@gmail.com)">
            <textarea v-model="message" placeholder="Type your message..."></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const name = ref('')
    const email = ref('')
    const message = ref('')

    const handleSubmit = () => {
        // TODO: handle the submit :p
    }
</script>

<style scoped>
    .contact-page {
        padding: 40px 20px;
        max-width: 600px;
        margin: 0 auto;
    }

    .contact-page h1 {
        text-align: center;
        color: #9fc3cc;
        font-size: 32px;
        margin-bottom: 30px;
        font-family: 'Arial', 'Helvetica', sans-serif;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        background-color: #dbeeed;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    input,
    textarea {
        padding: 12px;
        font-size: 16px;
        border: 2px solid #9fc3cc;
        border-radius: 4px;
        font-family: 'Arial', 'Helvetica', sans-serif;
        transition: all 0.3s ease;
        background-color: #ffffff;
        color: #333333;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #b8e3e4;
        box-shadow: 0 0 8px rgba(184, 227, 228, 0.3);
    }

    textarea {
        resize: vertical;
        min-height: 150px;
    }

    button {
        padding: 12px 20px;
        font-size: 16px;
        font-weight: 600;
        border: none;
        border-radius: 4px;
        background-color: #9fc3cc;
        color: #dbeeed;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Arial', 'Helvetica', sans-serif;
    }

    button:hover {
        background-color: #b8e3e4;
        transform: translateY(-2px);
    }
</style>