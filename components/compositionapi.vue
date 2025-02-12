<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script setup>
const title=ref('Composition Api')
const hello=()=>{
    console.log('Hello from Composition Api')
}
</script>

<style>

</style>