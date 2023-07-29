<template>
    <div class="flex relative h-screen">

        <div class="add-project p-4 w-full h-full absolute top-0 left-0 bg-black/75 flex justify-center items-center z-30 text-white" v-if="isBtn">
            <form @submit.prevent="onSubmit" class="p-8 bg-zinc-800/100 relative w-96 rounded-md border border-white/10 flex flex-col justify-center items-start gap-2">

                <span class="bg-rose-700 border border-rose-600 rounded-full absolute top-0 right-0 flex justify-center items-center translate-x-2/4 -translate-y-2/4 h-8 w-8 text-white transition-all duration-300 hover:bg-rose-600" @click=toggle_btn>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>

                <label for="project_name"> Project name</label>

                <FormDefaultInput id="project_name" type="text" name="project_name" placeholder="my project . . ."/>

                <input type="submit" value="Create" class="w-full h-10 bg-cyan-400 hover:bg-cyan-600 rounded-md transition-all duration-300 cursor-pointer">

            </form>
        </div>

        <div class="relative side-bar w-80 h-screen bg-gray-800 border-gray-700 border-r max-xl:hidden">
            
            <div class="current-user w-full h-16 border-b border-gray-700 flex gap-x-4 justify-center items-center">

                <div @click="visible = !visible" class="p-1 border-2 min-w-[40px] min-h-[40px] border-cyan-500 rounded-full flex justify-center items-center">
                    <img :src="profilePic ? profilePic : 'https://media.tenor.com/O3i0RscRs88AAAAC/anime-girl-anime.gif'" alt="user-img" class="w-10 h-10 rounded-full">
                </div>

                <p class="text-white"> {{ username }} </p>

            </div>
            <div :class="visible ? 'absolute' : 'hidden'" class="z-10 bg-gray-800 shadow-md text-white py-3 px-12 left-3 mt-1 top-12 rounded border-2 border-gray-700">
                <ul class="divide-y divide-gray-700/100 text-gray-400">
                    <li class="py-1 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <NuxtLink to="/account/edit">Account</NuxtLink>
                    </li>
                    <li class="py-1 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        <NuxtLink to="/auth/sign-up">Sign-out</NuxtLink>
                        

                    </li>
                </ul>
            </div>

        </div>
        
        <div class="w-full overflow-hidden pb-20 h-full">
            
            <div class="nav-bar w-full h-16 border-b border-gray-700 bg-gray-800 px-4 flex justify-between items-center">
                
                <div class="flex justify-center items-center gap-x-4 text-white">

                    <div class="p-1 border-2 min-w-[40px] min-h-[40px] hidden border-cyan-500 rounded-full max-xl:flex justify-center items-center">
                        <img src="https://media.tenor.com/O3i0RscRs88AAAAC/anime-girl-anime.gif" alt="user-img" class="w-10 h-10 rounded-full">
                    </div>

                    <p> All projects </p>

                </div>

                <div class="flex gap-x-6 justify-center items-center text-white cursor-pointer">

                    <div class="relative flex items-center max-lg:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 absolute ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                        <input type="text" class="w-full max-w-[325px] min-w-[325px] outline-none shadow-sm focus:ring-0 sm:text-sm border border-gray-700 bg-primary py-2 rounded-md pl-10 pr-2" placeholder="search Porject">

                        <button class="py2 px-4 text-white transition-all duration-300 hover:text-cyan-400"> Search </button>

                    </div>

                    <button type="button" class="w-full h-10 px-4 py-0.5 bg-cyan-400 hover:bg-cyan-600 rounded-md transition-all duration-300 cursor-pointer" @click=toggle_btn> Add new project </button>

                </div>

            </div>

            <div class="w-full h-full overflow-y-scroll">
                <slot/>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { useForm } from 'vee-validate';
    import * as yup from 'yup';

    const visible = ref(false)

    const projects = useState('projects')

    const schema = yup.object({
     project_name: yup.string().required('Project name is required!'),
   });

    const isBtn = ref(false)
    const projectName = ref('')

    const toggle_btn = () => {
        isBtn.value = !isBtn.value
    }
    const username = ref('')
    const profilePic = ref('')

    const { data: user }: any = await useFetch('/api/auth/retrieve')
    username.value = user._rawValue.user.username
    console.log(user)
    profilePic.value = user._rawValue.picture

    const { handleSubmit } = useForm({
        validationSchema: schema
    });

 const onSubmit = handleSubmit(async (values) => {
    console.log(values.project_name)
    const { data: response } =  await useFetch('/api/project/create', {
      onRequest({ request, options }) {
      options.method = 'POST'
      options.headers = { "Content-type": "application/json" };
      options.body = JSON.stringify({ project_name: values.project_name })
    }
  })
  if(response) {
    isBtn.value = false
    const { data: user }: any = await useFetch('/api/auth/retrieve')
    projects.value = user._rawValue.user.user_project
  }

  console.log(response.value)
})
</script>

