<template>
    <h1>Notes</h1>
    <br>
    <button @click="boolean=!boolean">Add New</button>
    <br>
    <!-- <component :is="boolean ? newNote : noteCard">Add New {{ boolean }}</button> -->

<br>
<br>
</template>

<script setup>
const newNote = resolveComponent('NewNote')
const newCard = resolveComponent('NoteCard')

</script>

<style>
</style>