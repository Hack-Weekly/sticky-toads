<template>
    <div class="w-full bg-[#b255ff]">
        <nav aria-label="navigation" class="container mx-auto flex max-w-7xl items-center justify-between p-4 ">
            <a aria-label="logo" href="/" class="inline-flex items-center justify-center rounded-lg">
                <span class="text-white font-bold text-3xl">Sticky Toads</span>
            </a>

            <ul class="flex items-center gap-2 text-sm font-medium text-white">

                <li class="rounded-lg px-3 py-2 hover:text-green-500 ease-in duration-200 hover:cursor-pointer" aria-label="sign-up">
                    <NuxtLink class="border-2 border-cyan-400 flex items-center gap-1 transition-colors ease-in-out duration-150 text-white font-bold py-2 px-3 w-26 rounded-md">
                        <span>Sign-up</span>  
                    </NuxtLink>          
                </li>

                <li class="px-3 py-2" aria-label="sign-in">
                    <ButtonPrimaryLinkWithArrow text="Sign-in" route="/auth/sign-in" />
                </li>

            </ul>
        </nav>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
</style>