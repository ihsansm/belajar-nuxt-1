<template>
    <!-- <input type="text" placeholder="Type New Note....."> -->
    <input type="text" v-model="newNote" placeholder="Type New Note.....">
    <!-- <h1>{{ newNote }}</h1> -->
</template>

<script setup>
const newNote = ref('This is pre written value!');

</script>