<template>
    <div>
        <h1>{{ title }}</h1>
        <h4>Function : {{ hello() }}</h4>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:'Option Api'
        }
    },
    methods:{
        hello(){
            return 'Hello from Option Api!'
        }
    },
    mounted(){
        setTimeout(()=>{
            this.title='Hello Options api'
        },1000)
    }

}


</script>