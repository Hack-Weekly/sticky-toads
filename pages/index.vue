<template>
    <div class="relative pt-9 pb-28 bg-[#b255ff] overflow-hidden">
        <div class="container px-4 mx-auto">
            <div class="mb-16 max-w-3xl mx-auto text-center">
                <h1 class="font-heading mb-4 text-6xl md:text-7xl text-white tracking-tighter">
                   Manage <span class="text-cyan-400">your tasks</span> now with <span class="text-cyan-400">Sticky Toads</span>
                </h1>
                <p class="mb-8 text-xl text-white max-w-xl mx-auto">Get organized with Sticky Toads - the ultimate task management app for busy people on the go! </p>
                <div class="flex flex-wrap justify-center -m-1.5 mb-5">
                    <div class="w-auto p-1.5">
                        <ButtonPrimaryLinkWithArrow text="Try sticky toads now" route="/auth/sign-up"/>
                    </div>
                </div>
            </div>
            <div class="relative z-10 overflow-hidden rounded-xl">
                <div class="bg-gray-700 px-3 py-2.5">
                    <div class="flex flex-wrap items-center -m-2">
                        <div class="w-auto p-2">
                            <div class="flex flex-row">
                                <div class="w-auto p-1">
                                    <div class="w-2 h-2 bg-red-400 border border-red-500 rounded-full"></div>
                                </div>
                                <div class="w-auto p-1">
                                    <div class="w-2 h-2 bg-yellow-400 border border-yellow-500 rounded-full"></div>
                                </div>
                                <div class="w-auto p-1">
                                    <div class="w-2 h-2 bg-green-400 border border-green-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 p-2">
                            <div class="max-w-xs mx-auto py-0.5 px-4 text-sm text-white text-opacity-50 text-center bg-white bg-opacity-10 tracking-tight rounded">
                                <span>sticky-toads.vercel.app</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-12 bg-gray-800">
                    <div class="flex flex-wrap lg:items-center -m-8">
                        <div class="w-full md:w-1/2 p-8">
                            <div class="max-w-md">
                                <div class="flex flex-wrap -m-4">
                                    <div class="w-full p-4">
                                        <div class="flex flex-wrap -m-2">
                                            <div class="w-auto p-2">
                                                <span class="inline-block text-xl text-white font-semibold tracking-tight">1.</span>
                                            </div>
                                            <div class="flex-1 p-2">
                                                <h3 class="mb-3 text-xl text-white font-semibold tracking-tight">Sign-up</h3>
                                                <p class="text-xl text-gray-500 tracking-tight">In order to manage all of your tasks, you must create an account.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full p-4">
                                        <div class="flex flex-wrap -m-2">
                                            <div class="w-auto p-2">
                                                <span class="inline-block text-xl text-white font-semibold tracking-tight">2.</span>
                                            </div>
                                            <div class="flex-1 p-2">
                                                <h3 class="mb-3 text-xl text-white font-semibold tracking-tight">Create a project</h3>
                                                <p class="text-xl text-gray-500 tracking-tight">Set your objectives and outline the tasks needed to achieve them.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full p-4">
                                        <div class="flex flex-wrap -m-2">
                                            <div class="w-auto p-2">
                                                <span class="inline-block text-xl text-white font-semibold tracking-tight">3.</span>
                                            </div>
                                            <div class="flex-1 p-2">
                                                <h3 class="mb-3 text-xl text-white font-semibold tracking-tight">Start organizing your tasks </h3>
                                                <p class="text-xl text-gray-500 tracking-tight">Prioritize, schedule and track your progress for maximum efficiency.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 p-8">
                            <div class="group relative max-w-max ml-auto">
                                <div class="max-w-max overflow-hidden rounded-xl">
                                    <img class="object-cover" src="/tasks.svg" alt="tasks" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full">
            <svg class="w-full" width="100%" height="186" preserveaspectratio="none" viewbox="0 0 1600 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1608 127.618C969.729 -103.398 167.657 31.1518 0 127.618V186H1608V127.618Z" fill="#303030"></path>
            </svg>
            <div class="h-80 bg-primary"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'home',
    })
</script>
