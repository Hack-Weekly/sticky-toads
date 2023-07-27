<template>
    <div class="bg-[#b255ff]">
    <div class="container px-4 mx-auto">
      <div class="flex items-center justify-between py-5">
        <div class="w-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-auto pr-2">
              <NuxtLink to="/">
                <span style="font-family: 'Permanent Marker', cursive;" class="text-white text-4xl">Sticky Toads</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="w-auto">
          <div class="flex flex-wrap items-center gap-6">
            <div class="w-auto hidden lg:block">
                <NuxtLink class="border-2 border-cyan-400 flex items-center gap-1 transition-colors ease-in-out duration-150 text-white font-bold py-3 px-3 w-26 rounded-md">
                    <span>Sign-in</span>  
                </NuxtLink>   
            </div>
            <div class="w-auto hidden lg:block">
              <div class="inline-block">
                <ButtonPrimaryLinkWithArrow text="Sign-up" route="/auth/sign-up"/>
              </div>
            </div>
            <div class="relative w-auto lg:hidden">
                <div @click="visible = !visible">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>      
            </div>
            <div :class="visible ? 'absolute' : 'hidden'" class="z-10 bg-gray-800 text-white py-3 px-12 right-6 top-12 rounded">
                <ul class="divide-y divide-gray-700/100">
                    <li class="py-1">
                        <NuxtLink to="/auth/sign-in">Sign-in</NuxtLink>
                    </li>
                    <li class="py-1">
                        <NuxtLink to="/auth/sign-up">Sign-up</NuxtLink>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
</script>
<style scoped>
</style>