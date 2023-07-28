<template>
    <NuxtLink :to="props.route" class="bg-cyan-400 hover:bg-cyan-500 flex items-center gap-1 transition-colors ease-in-out duration-150 text-white font-bold py-3 px-3 w-26 rounded-md">
       <span>{{ props.text }}</span>
       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
        </svg>
   </NuxtLink>
</template>
<script setup lang="ts">
const props = defineProps({
   text: {
       type: String,
       required: true
   },
   route: {
       type: String,
       required: true
   },
})
</script>
<style scoped>
a svg {
  transition: transform 0.3s ease-in-out;
}

a:hover svg {
  transform: translateX(5px);
}
</style>