<template>
    <div class="header">
        <div class="header-nav">
            <div class="fl">
                <router-link to="/">主站</router-link>
            </div>

            <div class="fr contribute">
                <router-link to="/CreationCenter/Contribute" v-if="$store.getters.getToken.power===0">投稿</router-link>
                <router-link to="/CreationCenter/Audit" v-else>投稿中心</router-link>
            </div>
            <div class="fr">
                <router-link to="/history">历史</router-link>
            </div>
            <div class="fr" v-if="!$store.getters.getToken">
                <router-link to="/Login" style="padding-right:20px;">
                    登录
                </router-link>
            </div>
            <div class="fr" v-else style="padding-right:20px;">
                欢迎您{{$store.getters.getToken.username}}
            </div>
        </div>
        <ul class="category" v-if="$route.path.indexOf('/CreationCenter')<0">
            <li v-for="c in category">
                <router-link :to="'/category/'+c.categoryId">{{c.categoryName}}</router-link>
                <ul class="second-category">
                    <li v-for="a in c.children">
                        <router-link :to="'/column/'+a.categoryId">{{a.categoryName}}</router-link>
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
        data() {
            return {
                category: []
            }
        },
        created() {
            this.getMenu();
            console.log(this.$store.getters.getToken);
        },
        methods: {
            getMenu() {
                categoryFunction.getAllCategory().then(res => {
                    this.category = this.common.listToTree(res.data.rows, "0", "categoryPid", "categoryId");
                    console.log(this.category);
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .header {
        width: 100%;

        .header-nav {
            height: 40px;
            line-height: 40px;
            padding: 0 10%;
            background-color: rgba(62, 255, 162, 0.1);

            .contribute {
                height: 45px;
                min-width: 50px;
                background-color: #fb4278;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }
    }

    .category {
        display: flex;
        padding: 0 10%;

        > li {
            flex: 1;
            max-width: 100px;
            position: relative;
            ul {
                display: none;
                position: absolute;
                left:0;
                top:20px;
                li {
                }
            }
        }

        > li:hover {
            ul {
                display: inline-block;
            }
        }
    }

    .second-category {
        li {
            height: 40px;
            line-height: 40px;

        }
    }
</style>
