<template>
    <h1>
    About
    </h1>

    <button @click="enableLayout()">Update Layout</button>
    <NoteCard/>
</template>

<script setup>
definePageMeta({
    layout:false,
    middleware: ['named']
})

function enableLayout(params) {
    setPageLayout('custom')
}
</script>
