<template>
    <!-- <input type="text" placeholder="Type New Note....."> -->
    <input type="text" placeholder="Type New Note....." v-model="newNote" />
    <h1>{{ newNote }}</h1>
</template>

<script setup>
const newNote = ref('');

</script>