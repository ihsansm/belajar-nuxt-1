<template>
    <div>
        <h1 v-bind:class="isRed ? 'isRed' : 'isGreen'">
            Welcome To Out Notes App!
        </h1>
        <img :src="imgSrc" alt="" width="200"/>
        <!-- <h1>{{ istitle }}</h1>
        <h1>{{ isfive==5?'Number is 5' : 'Number is not equal to 5' }}</h1> -->
    </div>
</template>

<script setup>
const isRed = ref(false); // false akan mengubah teks menjadi hijau, true sebaliknya
// const istitle = ref('This is a banner.');
// const isfive = (5)
const imgSrc = ref(
    'https://mahanmedical.com/image/cache/product/test-1000x1000.jpg'
)
</script>

<style>
.isRed {
    color: red;
}

.isGreen {
    color: green;
}   


</style>