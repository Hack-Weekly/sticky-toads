<template>
     <button :type="props.type" class="bg-cyan-400 hover:bg-cyan-500 transition-colors ease-in-out duration-150 text-primary font-bold py-2 px-4 rounded">
        <span>{{ props.text }}</span>
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
    }
})
</script>