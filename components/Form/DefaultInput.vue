<template>
    <input :type="props.type" v-model="value" :id="props.id" :placeholder="props.placeholder" 
    class="block w-full shadow-sm focus:ring-0 sm:text-sm border border-gray-700 bg-primary py-2 px-3 rounded-md">
    <span class="text-red-500 text-sm">{{ errorMessage }}</span>
</template>
<script setup lang="ts">
import { useField } from 'vee-validate';

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    }
})

const { value, errorMessage } = useField(() => props.name);


</script>