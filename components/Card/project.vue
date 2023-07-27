<template>
       <a :href="removeLink" class='text-red-500'>Remove</a>
    <NuxtLink :to="`/notes/${props.id}`" class="project-card mx-3 cursor-pointer w-96 h-36 rounded-lg p-4 flex flex-col justify-center items-center gap-y-4 bg-zinc-950 bg-[url('/projectCardImg.jpg')] bg-cover">
        <div class="text-white w-full rounded-lg flex justify-start gap-x-2 items-center">
            <p class="text-2xl font-semibold"> {{ title }} </p>
            <div class="text-sm py-0.5 px-3 bg-white rounded-md text-gray-800">
                <p> {{ id }} </p>
            </div>
        </div>

        <div class="w-full flex -space-x-2">
            <img src="https://i.pinimg.com/originals/fe/0a/04/fe0a0428f7b2db2154cf9ced998e9617.gif" alt="user-img" class="w-14 h-14 rounded-full object-cover">
            <img src="https://www.mkgifs.com/wp-content/uploads/2023/04/Cute-Purple-Anime-GIF.gif" alt="user-img" class="w-14 h-14 rounded-full object-cover">
            <img src="https://aniyuki.com/wp-content/uploads/2021/12/aniyuki-anime-girl-34.gif" alt="user-img" class="w-14 h-14 rounded-full object-cover">
            <img src="https://wallpapers-clan.com/wp-content/uploads/2022/12/anime-eyes-gif-pfp-3.gif" alt="user-img" class="w-14 h-14 rounded-full object-cover">
        </div>

    </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps(['title', 'id', 'image', 'anchor'])
  const removeLink = ref(`/api/project/${props.id}/delete`)
</script>
