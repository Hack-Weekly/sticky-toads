<template>
    <div class="p-8 flex flex-wrap">
        <CardNote v-for="card in cards" :title="card.title" :description="card.description"/>
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
  console.log(value.liId)
    if (value.liId) {
    // @ts-ignore
    list.value = lists.filter(l => l.id === value.liId)
    cards.value = list.value[0].card
    } else cards.value = lists
  })
</script>
