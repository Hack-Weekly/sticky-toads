<template>
    <button :type="type" class="flex items-center justify-center px-4 py-2 text-base font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-150">
        {{ text }}
    </button>
</template>
<script setup lang="ts">
    const props = defineProps({
        text: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
    })
</script>