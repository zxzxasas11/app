<template>
    <div>
        <video src="" controls="controls">
            your browser does not support the video tag
        </video>
    </div>
</template>

<script>
    export default {
        name: "VideoPlay",
        data(){
            return{

            }
        },
        created() {
            console.log(this.$route.params);
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
