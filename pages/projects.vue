<template>
    <div class="p-8 flex flex-wrap">
        <CardProject />
    </div>
</template>


<script setup lang="ts">

    const projects = ref('projects')

    definePageMeta({
        layout: 'projects'
    })

</script>