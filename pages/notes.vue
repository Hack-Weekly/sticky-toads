<template>
    <div class="p-8 flex flex-wrap">
        <CardNote v-for="card in cards" :title="card.title" :description="card.description"/>
    </div>
</template>


<script setup lang="ts">

    const notes = ref('notes')

    definePageMeta({
        layout: 'notes',
        middleware: 'session'
    })

    const route = useRoute()
    const { pid, liId } = route.query
    
    const { data }: any = await useFetch(`/api/project/${pid}/retrieve`)
    const lists = data._rawValue.list
    let cards = ref('')
    cards.value = lists
    console.log(cards.value)
    if (liId) {
      // @ts-ignore
      const list = lists.filter(l => l.id === liId)
      cards.value = list[0].card
      console.log(cards)
    } 
</script>
