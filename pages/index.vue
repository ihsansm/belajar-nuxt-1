<template>
    <Banner/>
    <NewNote/>

    <composition-api/>
    
    <br>
    
    <options-api/>

<h2>Recent Notes: {{ foo }}</h2>
{{ $hello('Nuxt!') }}
 {{ $consoleIt(foo) }}
  <p>{{ data }}</p>
 <NoteCard/>
 <br>
</template>

<script setup>
const foo=useFoo()
const {$hello,$consoleIt}=useNuxtApp()
console.log('useNextApp(): ', useNuxtApp());
const {data}=await useFetch('/api/hello')
</script>

<style></style>