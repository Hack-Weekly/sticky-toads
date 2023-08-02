<template>
  <div class="p-4 flex flex-wrap justify-center items-center gap-4">
    <CardProject
      v-for="userProject in projects"
      :title="userProject.project.name"
      :id="userProject.project.id"
      :key="userProject.project.id"
    />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "projects",
  middleware: "session",
});

const projects = useState("projects");
const { data: user }: any = await useFetch("/api/auth/retrieve");
useState("user", () => user);
projects.value = user.value.user.user_project;
</script>
