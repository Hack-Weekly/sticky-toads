<template>
    <div class="flex relative">

        <div class="add-note w-full h-full absolute top-0 left-0 bg-black/75 flex justify-center items-center z-30" v-if="isBtn">
            <form @submit.prevent="createCard" class="p-8 bg-zinc-800/100 relative w-96 rounded-md border border-white/10 flex flex-col justify-center items-center gap-2">
                <span class="bg-rose-500 rounded-full absolute top-0 right-0 flex justify-center items-center translate-x-2/4 -translate-y-2/4 h-8 w-8 text-white transition-all duration-300 hover:scale-95" @click=toggle_btn>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
                 <input name='title' type="text" v-model="cardData.title" id="title" placeholder="card title..." 
    class="block w-full shadow-sm focus:ring-0 sm:text-sm border border-gray-700 bg-primary py-2 px-3 rounded-md">
                <textarea v-model="cardData.description" name="description" id="description" cols="30" rows="10" placeholder="card description..." class="block w-full shadow-sm focus:ring-0 sm:text-sm border border-gray-700 bg-primary py-2 px-3 rounded-md"></textarea>
                <button type="submit" class="block w-full shadow-sm focus:ring-0 sm:text-sm border border-cyan-700 py-2 px-3 rounded-md font-semibold bg-cyan-400 mt-1.5 transition-all duration-300 hover:scale-95">Create</button>
            </form>
        </div>

        <div class="side-bar w-80 h-screen bg-gray-800 border-gray-700 border-r">
            
            <div class="current-user w-full h-16 border-b border-gray-700 flex gap-x-4 justify-center items-center">
                <div class="p-1 border-2 border-cyan-500 rounded-full flex justify-center items-center">
                    <img src="https://media.tenor.com/O3i0RscRs88AAAAC/anime-girl-anime.gif" alt="user-img" class="w-10 h-10 rounded-full">
                </div>
                <p class="text-white"> {{ username }} </p>
            </div>

            <div @click="gotoList(list.id)" v-for="list in lists" class="cursor-pointer w-full border-b h-16 border-gray-700 flex justify-between items-center px-4">
                <div class="flex gap-x-4 justify-center items-center">
                    <span class="rounded-full w-4 h-4 bg-purple-600">
                    </span>
                    <p class="text-white"> {{ list.title }} </p>
                </div>
                <div class="py-1 px-3 text-center rounded-2xl text-white bg-purple-600 border-2 border-purple-500">
                    {{ list.card.length }}
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
                    <ButtonPrimary text="Add new note" type="button" @click=toggle_btn />
                </div>

            </div>

            <div class="overflow-y-auto">
                <slot/>
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
    const isBtn = ref(false)

    const toggle_btn = () => {
        isBtn.value = !isBtn.value
    }

    const username = ref('')
    const cardData = ref({ title: '', description: '' })
    const { data: user }: any = await useFetch('/api/auth/retrieve')
    username.value = user._rawValue.user.username

    const route = useRoute()
    const { pid, liId } = route.query
   
    const { data }: any = await useFetch(`/api/project/${pid}/retrieve`)
    let lists = data._rawValue.list

    async function gotoList(id: string) {
    await  navigateTo(`/notes/?pid=${pid}&liId=${id}`)
    }

    async function createCard () {
      console.log(cardData.value)
      $fetch(`/api/project/${pid}/update`, {
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
</script>
