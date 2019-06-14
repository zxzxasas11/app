<template>
    <div class="header">
        <div class="header-nav">
            <div class="fl">
                <router-link to="/">主站</router-link>
            </div>

            <div class="fr contribute">
                <router-link to="/CreationCenter/Contribute">投稿</router-link>
            </div>
            <div class="fr">
                <router-link to="/history">历史</router-link>
            </div>
        </div>
        <ul class="category" v-if="$route.path.indexOf('/CreationCenter')<0">
            <li v-for="c in category">
                {{c.categoryName}}
                <ul class="second-category">
                    <li v-for="a in c.children">
                        {{a.categoryName}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import categoryFunction from '../../api/category'
    export default {
        name: "Header",
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
                    this.category=this.common.listToTree(res.data.rows,"0","categoryPid","categoryId");
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .header{
        width:100%;
        .header-nav{
            height:40px;
            line-height: 40px;
            padding:0 10%;
            background-color: rgba(62, 255, 162, 0.1);
            .contribute{
                height:45px;
                width:50px;
                background-color: #fb4278;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }
    }
.category{
    display: flex;
    padding:0 10%;
    >li{
        flex:1;
        max-width:100px;
        ul{
            display: none;
            li{
            }
        }
    }
    >li:hover{
        ul{
            display: inline-block;
        }
    }

}
</style>
