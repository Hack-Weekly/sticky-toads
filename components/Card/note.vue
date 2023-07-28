<template>
  <div class="note-card-wrapper">    
    <div class="project-card w-96 py-8 rounded-md p-4 flex flex-col justify-center items-start gap-y-4 bg-[#181b1e] bg-[url('/33.jpg')] bg-cover bg-center border-2 border-white/10">
        <div class="text-white w-full rounded-lg flex justify-between gap-x-2 items-center">
            <p class="text-lg font-semibold"> {{ title }} </p>
                <div class="trash-btn cursor-pointer w-8 h-8 rounded-md flex justify-center items-center border border-white/10 text-white transition-all duration-300 hover:text-rose-400" @click="removeCard">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>

                </div>
        </div>

        <div class="flex gap-x-2 flex-warp">
          <div class="card-type w-full max-w-fit flex justify-start items-center text-xs py-1 px-3 text-white bg-neutral-700/50 rounded-full">

              <p> Work </p>
          
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
            <p> 09:38PM </p>
            <p> 07 JANUARY 2021 </p>
        </div>

    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps([ 'title', 'card_id', 'label', 'description' ])
  const route = useRoute()
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

    console.log(response)
  }
</script>
