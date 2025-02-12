<template>
    <div>
        <h1>{{ title }}</h1>
        <h4>Function : {{ hello() }}</h4>

    </div>
</template>

<script setup>
const title=ref('Composition Api')
const hello=()=>{
    return 'Hello from Composition Api'
}
onMounted(()=> title.value='Hello Composition Api')
</script>

<style>

</style>