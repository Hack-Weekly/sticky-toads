<template>
    <div class="flex justify-center items-center my-24">
        <h1 class="rainbow rainbow_text_animated text-4xl">Hello Nuxt!</h1>
    </div>
</template>
<script setup lang="ts">
  definePageMeta({
    middleware: 'session'
  })
</script>
<style scoped>
.rainbow {
    text-align: center;
    text-decoration: underline;
    font-size: 32px;
    font-family: monospace;
    letter-spacing: 5px;
}
.rainbow_text_animated {
    background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 6s ease-in-out infinite;
    background-size: 400% 100%;
}

@keyframes rainbow_animation {
    0%,100% {
        background-position: 0 0;
    }

    50% {
        background-position: 100% 0;
    }
}

</style>
