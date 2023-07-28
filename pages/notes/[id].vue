<template>
    <div class="p-4 flex h-full flex-wrap justify-start items-start gap-4">
        <CardNote v-for="card in cards" :title="card.title" :description="card.description" :card_id="card.id" :key="card.id"/>
    </div>
</template>


<script setup lang="ts">
  import { ref, watch } from 'vue'
  definePageMeta({
    layout: 'notes',
    middleware: 'session'
  })
  const cards = ref([])
  const list = ref([])
  const route = useRoute()
  const { id } = route.params
  const { data }: any = await useFetch(`/api/project/${id}/retrieve`)
  const lists = data._rawValue.list
  watch(() => route.query, async (value) => {
  console.log('hi')
    if (value.liId) {
    console.log(value.liId)
    // @ts-ignore
    list.value = lists.filter(l => l.id === value.liId)
    cards.value = list.value[0].card
    console.log(cards.value)
    } else cards.value = lists
  })
</script>
