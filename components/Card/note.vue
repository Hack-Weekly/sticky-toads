<template>
  <div class="note-card-wrapper">

    <div class="update-model flex p-2 max-w-[260px] rounded-md border border-white/10 bg-[#1e1e1e] bg-center bg-cover mb-1 flex-col justify-center items-start" v-if="update_model">
        <form @submit.prevent="updateCardTitle" class="h-10 gap-x-2 flex justify-center items-center rounded-md">
            <input v-model="newCardTitle" type="text" class="bg-gray-800 border h-8 border-white/10 rounded-md text-sm px-2 text-white outline-none" placeholder="update card title">
            <button type="submit" class="cursor-pointer min-w-[32px] min-h-[32px] h-8 rounded-md flex justify-center items-center border border-white/10 text-white transition-all duration-300 hover:text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </button>
        </form>
        <form @submit.prevent="attachCardLabel" class="h-10 gap-x-2 flex justify-center items-center rounded-md">
            <input v-mode="cardLabelId" type="text" class="bg-gray-800 border h-8 border-white/10 rounded-md text-sm px-2 text-white outline-none" placeholder="add label to card">
            <button type="submit" class="cursor-pointer min-w-[32px] min-h-[32px] h-8 rounded-md flex justify-center items-center border border-white/10 text-white transition-all duration-300 hover:text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </button>
        </form>
        <form @submit.prevent="updateCardDescription" class="h-10 gap-x-2 flex justify-center items-center rounded-md">
            <input v-model="newCardDescription" type="text" class="bg-gray-800 border h-8 border-white/10 rounded-md text-sm px-2 text-white outline-none" placeholder="update card description">
            <button type="submit" class="cursor-pointer min-w-[32px] min-h-[32px] h-8 rounded-md flex justify-center items-center border border-white/10 text-white transition-all duration-300 hover:text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </button>
        </form>
    </div>
        
    <div class="project-card w-96 py-8 rounded-md p-4 flex flex-col justify-center items-start gap-y-4 bg-[#181b1e] bg-[url('/33.jpg')] bg-cover bg-center border-2 border-white/10">
        <div class="text-white w-full rounded-lg flex justify-between gap-x-2 items-center">
            <p class="text-lg font-semibold"> {{ title }} </p>
                <div class="flex gap-x-2">

                    <div class="update-btn cursor-pointer w-8 h-8 rounded-md flex justify-center items-center border border-white/10 text-white transition-all duration-300 hover:text-rose-400" v-if="update_model" @click="update_model = !update_model">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <div class="update-btn cursor-pointer w-8 h-8 rounded-md flex justify-center items-center border border-white/10 text-white transition-all duration-300 hover:text-cyan-400" v-if="!update_model" @click="update_model = !update_model">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>

                    </div>

                    <div class="trash-btn cursor-pointer w-8 h-8 rounded-md flex justify-center items-center border border-white/10 text-white transition-all duration-300 hover:text-rose-400" @click="deleteThisProject">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>

                    </div>

                </div>
        </div>

        <div class="flex gap-x-2 flex-warp">
          <div class="card-type w-full gap-x-2 max-w-fit flex justify-start items-center text-xs py-1 px-3 text-white bg-neutral-700/50 rounded-full">

              <p> Work </p>

            <div class="transition-all duration-300 hover:text-rose-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>

          </div>

          <div class="card-type w-full max-w-fit flex justify-start items-center text-xs py-1 px-3 text-white bg-neutral-700/50 rounded-full">

              <p> Company </p>
          
          </div>
        </div>

        <div class="w-full text-white text-sm">
            <p>
            {{ description }}
            </p>
        </div>

        <div class="w-full font-semibold flex justify-between items-center text-white">
            <p> {{ creation_date }} </p>
        </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const update_model = ref(false)
  const props = defineProps([ 'title', 'card_id', 'label', 'description', 'creation_date' ])
  const route = useRoute()
  const newCardTitle = ref(null)
  const newCardDescription = ref(null)
  const cardLabelId = ref(null)

  const { id } = route.params
  const { liId } = route.query
  const removeCard = async () => {
    const response = await $fetch(`/api/project/${id}/update`, {
      method: 'POST',
      body: {
        'card_operation': 'delete',
        'list_id': liId,
        'card': {
          'id': props.card_id,
        }
      }
    })
  }

  const updateCardTitle = async () => {
    const { data: response } = await useFetch(`/api/project/${id}/update`, {
    method: 'POST',
    body: {
    card_operation: "update",
    card: {
      id: props.card_id,
      title: newCardTitle
     }
    }
    })
  }

  const updateCardDescription = async () => {
    const { data: response } = await useFetch(`/api/project/${id}/update`, {
    method: 'POST',
    body: {
    card_operation: "update",
    card: {
      id: props.card_id,
      description: newCardDescription
     }
    }
    })
  }
  // still need option to create a card label somewhere, ammar you can refactor this im just trying to make it work even if its shit.
  const attachCardLabel = async () => {
    const { data: response } = await useFetch(`/api/project/${id}/update`, {
    method: 'POST',
    body: {
    label_operation: "attach",
    card: {
      id: props.card_id,
     },
    label: {
      id: cardLabelId
    }
    }
    })
  }
</script>
