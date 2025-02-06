<template>

<h2>Recent Notes: {{ foo }}</h2>
 {{ $hello('Nuxt!') }}
 {{ $consoleIt(foo) }}
 <NoteCard/>
</template>

<script setup>
const foo=useFoo()
const {$hello,$consoleIt}=useNuxtApp()
console.log('useNextApp(): ', useNuxtApp());
</script>

<style></style>