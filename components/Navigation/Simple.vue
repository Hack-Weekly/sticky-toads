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
    <svg class="" id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(178, 85, 255, 1)" offset="0%"></stop><stop stop-color="rgba(139, 0, 255, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,294L30,245C60,196,120,98,180,57.2C240,16,300,33,360,57.2C420,82,480,114,540,147C600,180,660,212,720,228.7C780,245,840,245,900,204.2C960,163,1020,82,1080,73.5C1140,65,1200,131,1260,155.2C1320,180,1380,163,1440,196C1500,229,1560,310,1620,359.3C1680,408,1740,425,1800,375.7C1860,327,1920,212,1980,187.8C2040,163,2100,229,2160,236.8C2220,245,2280,196,2340,196C2400,196,2460,245,2520,269.5C2580,294,2640,294,2700,294C2760,294,2820,294,2880,277.7C2940,261,3000,229,3060,179.7C3120,131,3180,65,3240,57.2C3300,49,3360,98,3420,147C3480,196,3540,245,3600,285.8C3660,327,3720,359,3780,367.5C3840,376,3900,359,3960,351.2C4020,343,4080,343,4140,285.8C4200,229,4260,114,4290,57.2L4320,0L4320,490L4290,490C4260,490,4200,490,4140,490C4080,490,4020,490,3960,490C3900,490,3840,490,3780,490C3720,490,3660,490,3600,490C3540,490,3480,490,3420,490C3360,490,3300,490,3240,490C3180,490,3120,490,3060,490C3000,490,2940,490,2880,490C2820,490,2760,490,2700,490C2640,490,2580,490,2520,490C2460,490,2400,490,2340,490C2280,490,2220,490,2160,490C2100,490,2040,490,1980,490C1920,490,1860,490,1800,490C1740,490,1680,490,1620,490C1560,490,1500,490,1440,490C1380,490,1320,490,1260,490C1200,490,1140,490,1080,490C1020,490,960,490,900,490C840,490,780,490,720,490C660,490,600,490,540,490C480,490,420,490,360,490C300,490,240,490,180,490C120,490,60,490,30,490L0,490Z"></path></svg>
    
</template>
<script setup lang="ts">
</script>
<style scoped>
</style>