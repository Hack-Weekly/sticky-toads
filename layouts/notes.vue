<template>
    <div class="flex relative h-screen">

        <div class="add-note p-4 w-full h-full absolute top-0 left-0 bg-black/75 flex justify-center items-center z-30 text-white" v-if="isBtn">

            <form @submit.prevent="createCard" class="p-8 bg-zinc-800/100 relative w-96 rounded-md border border-white/10 flex flex-col justify-center items-start gap-2">

                <span class="bg-rose-700 border border-rose-600 rounded-full absolute top-0 right-0 flex justify-center items-center translate-x-2/4 -translate-y-2/4 h-8 w-8 text-white transition-all duration-300 hover:bg-rose-600" @click=toggle_btn>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
                <label for="title"> Note title</label>
                 <input name='title' type="text" v-model="cardData.title" id="title" placeholder="card title..." class="block w-full shadow-sm focus:ring-0 sm:text-sm border border-gray-700 bg-primary py-2 px-3 rounded-md">

                <label for="description"> Note description</label>
                <textarea v-model="cardData.description" name="description" id="description" cols="30" rows="10" placeholder="card description..." class="block w-full shadow-sm focus:ring-0 sm:text-sm border border-gray-700 bg-primary py-2 px-3 rounded-md"></textarea>

                <button type="submit" class="w-full h-10 bg-cyan-400 hover:bg-cyan-600 rounded-md transition-all duration-300 cursor-pointer">Create</button>

            </form>

        </div>

        <div class="side-bar w-80 h-screen bg-gray-800 border-gray-700 border-r text-white">
            
            <div class="current-user w-full h-16 border-b border-gray-700 flex gap-x-4 justify-center items-center">
                <div class="p-1 border-2 border-cyan-500 rounded-full flex justify-center items-center">
                    <img src="https://media.tenor.com/O3i0RscRs88AAAAC/anime-girl-anime.gif" alt="user-img" class="w-10 h-10 rounded-full">
                </div>
                <p class="text-white max-md:hidden"> {{ username }} </p>
            </div>

            <div class="add-list w-full h-full absolute top-0 left-0 bg-black/75 flex justify-center items-center z-30" v-if="isBtn2">

            <form @submit.prevent="createList" class="p-8 bg-zinc-800/100 relative w-96 rounded-md border border-white/10 flex flex-col justify-center items-start gap-2">

                <span class="bg-rose-700 border border-rose-600 rounded-full absolute top-0 right-0 flex justify-center items-center translate-x-2/4 -translate-y-2/4 h-8 w-8 text-white transition-all duration-300 hover:bg-rose-600" @click=toggle_btn2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>

                <label for="list_title"> List title</label>
                <FormDefaultInput id="list_title" type="text" name="list_title" placeholder="list title..."/>

                <button type="submit" class="w-full h-10 px-4 py-0.5 bg-cyan-400 hover:bg-cyan-600 rounded-md transition-all duration-300 cursor-pointer">Create</button>

            </form>
            
        </div>

        <div class="p-2 border border-white/10 text-white">
            <button type="submit" class="w-full h-10 px-4 py-0.5 bg-cyan-400 hover:bg-cyan-600 rounded-md transition-all duration-300 cursor-pointer" @click=toggle_btn2> Add new list </button>
        </div>



            <template v-if="lists">
                <div v-for="list in lists" :key="list.id">

                    <NuxtLink  :to="{ path: `/notes/${id}`,  query: { liId: list.id }}" class="cursor-pointer w-full border-b h-16 border-gray-700 flex justify-between items-center px-4">
                        <div class="flex gap-x-4 justify-center items-center">
                            <div class="rounded-full w-4 h-4 border border-white/10 p-0.5 flex justify-center items-center">
                                <div class="rounded-full w-2 h-2 bg-white"></div>
                            </div>
                            <p class="text-white"> {{ list.title }} </p>
                        </div>
                        <div class="flex gap-x-2">
                            <div class="trash-btn cursor-pointer w-8 h-8 rounded-md flex justify-center items-center border border-white/10 text-white transition-all duration-300 hover:text-rose-400" @click="removeList(list.id)">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>

                            </div>
                            <div class="trash-btn cursor-pointer w-8 h-8 rounded-md flex justify-center items-center border border-white/10 text-white">
                               {{ list.card.length }}
                            </div>
                        </div>
                    </NuxtLink>

                </div>
            </template>
            <template v-else>
                <div class="flex justify-center items-center mt-8 text-gray-400">No lists</div>
            </template>

        </div>
        
        <div class="w-full overflow-hidden pb-20 h-full">
            
            <div class="nav-bar w-full h-16 border-b border-gray-700 bg-gray-800 px-4 flex justify-between items-center">
                
                <div class="flex justify-center items-center text-white">
                    <p> All notes </p>
                </div>

                <div class="flex gap-x-6 justify-center items-center text-white cursor-pointer">
                    <div class="relative flex items-center max-lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 absolute ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input type="text" class="w-full max-w-[325px] min-w-[325px] outline-none shadow-sm focus:ring-0 sm:text-sm border border-gray-700 bg-primary py-2 rounded-md pl-10 pr-2" placeholder="search Porject">
                        <button class="py2 px-4 text-white transition-all duration-300 hover:text-cyan-400"> Search </button>
                    </div>
                    <button type="submit" class="w-full h-10 px-4 py-0.5 bg-cyan-400 hover:bg-cyan-600 rounded-md transition-all duration-300 cursor-pointer" @click=toggle_btn>
                        <p class="max-md:hidden"> Add new note </p>
                        <span class="hidden max-md:flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </span>
                    </button>
                </div>

            </div>

            <div class="w-full h-full overflow-scroll">
                <slot/>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
    // create card should probably use vee validate, im not touching it for now but just an fyi
    // everything else i will try to use vee validate for in this example for the list
    import { watch, ref } from 'vue'
    import { useForm } from 'vee-validate';
    import * as yup from 'yup';
    // this can for sure be refactored
    const createListSchema = yup.object({
     list_title: yup.string().required('List requires a title!'),
   });

    const isBtn = ref(false)
    const isBtn2 = ref(false)
    const lists = ref(false)
    const toggle_btn = () => {
        isBtn.value = !isBtn.value
    }

    const toggle_btn2 = () => isBtn2.value = !isBtn2.value

    const username = ref('')
    const cardData = ref({ title: '', description: '' })
    const id: any = ref('')
    const { data: user }: any = await useFetch('/api/auth/retrieve')
    username.value = user._rawValue.user.username

    const route = useRoute()
    const { liId } = route.query
    console.log(route.query)
    watch(() => route.params, async (value) => {
    id.value = value.id
     const { data }: any = await useFetch(`/api/project/${value.id}/retrieve`)
     lists.value = data._rawValue.list
  }, { immediate: true, deep: true })

    async function createCard () {
      await $fetch(`/api/project/${id}/update`, {
        method: 'POST',
        body: {
          'card_operation': 'create',
          'list_id': liId,
          'card': {
             "title": cardData.value.title,
             'description': cardData.value.description
           }

        }
      })
    }
  

  ///////////////////////////////////////////////////////////////////////
   const { handleSubmit } = useForm({
     validationSchema: createListSchema
   });

   const createList = handleSubmit(async (values) => {
     const { data: response } =  await useFetch(`/api/project/${id.value}/update`, {
      onRequest({ request, options }) {
        options.method = 'POST'
        options.headers = { "Content-type": "application/json" };
        options.body = JSON.stringify({
        list_operation: 'create',
        list_title: values.list_title, })
      }
    })
    console.log(response)
  })

  const removeList = async (listId: string) => {
    const response = await $fetch(`/api/project/${id.value}/update`, {
      method: 'POST',
      body: {
        'list_operation': 'delete',
        'list_id': listId,
      }
    })
  }
</script>
