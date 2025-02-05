<template>
    <h1> {{ $route.params.id }} </h1>

    <button>Copy URL</button>
</template>

<script setup>
definePageMeta({
    layout: 'custom',
})
const { copyToCliboard } = useClipboardCopy() 

const copyUrl=()=>{
    copyToCliboard(window.location.href)
}
</script>

