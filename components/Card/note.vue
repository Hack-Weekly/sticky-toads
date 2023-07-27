<template>
    <div class="note-card w-96 h-64 rounded-3xl px-6 flex flex-col justify-center items-center gap-y-4 bg-[#D64F6F]">
        <button @click="removeCard" class='text-white bg-red-500'>Remove</button>
        <div class="text-white w-full rounded-lg flex justify-between gap-x-2 items-center">
            <p class="text-lg font-semibold"> {{ title }} </p>
            <div class="py-2 px-4 bg-white rounded-md text-gray-800 text-center">
                <p> {{ label }} </p>
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
