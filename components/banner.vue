<template>
    <h1>Welcome To Out Note App!</h1>
    <button @click="increment()">Increment</button>
    <br>
    <br>
    <button @click="decrement()">decrement</button>
    <h1>count : {{count}}</h1>
</template>

<script setup>
const count = ref(0);


function increment() {
    count.value++;
}
function decrement() {
    count.value--;
}
</script>

<style>
.isRed {
    color: red;
}

.isGreen {
    color: green;
}   


</style>