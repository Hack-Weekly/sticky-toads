<template>
    <div class="flex">

        <div class="side-bar w-80 h-screen bg-gray-800 border-gray-700 border-r">
            
            <div class="current-user w-full h-16 border-b border-gray-700 flex gap-x-4 justify-center items-center">
                <div class="p-1 border-2 border-cyan-500 rounded-full flex justify-center items-center">
                    <img src="https://media.tenor.com/O3i0RscRs88AAAAC/anime-girl-anime.gif" alt="user-img" class="w-10 h-10 rounded-full">
                </div>
                <p class="text-white"> MasterOfAlune </p>
            </div>

            <div class="w-full border-b h-16 border-gray-700 flex justify-between items-center px-4">
                <div class="flex gap-x-4 justify-center items-center">
                    <span class="rounded-full w-4 h-4 bg-purple-600">
                    </span>
                    <p class="text-white"> Videos </p>
                </div>
                <div class="py-1 px-3 text-center rounded-2xl text-white bg-purple-600 border-2 border-purple-500">
                    07
                </div>
            </div>

        </div>
        
        <div class="w-full">
            
            <div class="nav-bar w-full h-16 border-b border-gray-700 bg-gray-800 px-4 flex justify-between items-center">
                
                <div class="flex justify-center items-center text-white">
                    <p> All notes </p>
                </div>

                <div class="flex gap-x-6 justify-center items-center text-white cursor-pointer">
                    <div class="relative flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 absolute ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input type="text" class="w-full max-w-[325px] min-w-[325px] outline-none shadow-sm focus:ring-0 sm:text-sm border border-gray-700 bg-primary py-2 rounded-md pl-10 pr-2" placeholder="search Porject">
                        <button class="py2 px-4 text-white transition-all duration-300 hover:text-cyan-400"> Search </button>
                    </div>
                    <ButtonPrimary text="Add new note" type="button" class="cursor-pointer"/>
                </div>

            </div>

            <div class="overflow-y-auto">
                <slot/>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
</script>