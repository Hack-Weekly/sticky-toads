<template>
    <div class="p-8 flex flex-wrap">
        <CardProject v-for="userProject in projects" :title="userProject.project.name" :id="userProject.project.id"/>
    </div>
</template>

<script setup lang="ts">
  const projects = ref([])
  definePageMeta({
    layout: 'projects',
    middleware: 'session'
  })
  const { data: user }: any = await useFetch('/api/auth/retrieve')
  useState('user', () => user)
  projects.value = user._rawValue.user.user_project
  console.log(projects.value)
</script>
