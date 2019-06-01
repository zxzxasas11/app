<template>

</template>

<script>
    import jwt_decode from 'jwt-decode'
    export default {
        name: "Home",
        data(){
            return{

            }
        },
        methods:{
            aa(){
                let token;
                const decode = jwt_decode(token)

            }
        }
    }
</script>

<style scoped>

</style>
