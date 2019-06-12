<template>
    <div>
        <ul>
            <li v-for="c in category">
                {{c.categoryName}}
            </li>
        </ul>
    </div>
</template>

<script>
    import categoryFunction from '../../api/category'
    export default {
        name: "header",
        data(){
            return{
                category:[]
            }
        },
        created(){
            this.getMenu();
        },
        methods:{
            getMenu(){
                categoryFunction.getAllCategory().then(res=>{
                    this.category=res.data.rows;
                })
            }
        }
    }
</script>

<style scoped lang="less">

</style>
