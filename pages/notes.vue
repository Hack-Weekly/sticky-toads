<template>
    <div class="p-8 flex flex-wrap">
        <CardNote />
    </div>
</template>


<script setup lang="ts">

    const notes = ref('notes')

    definePageMeta({
        layout: 'notes'
    })

</script>