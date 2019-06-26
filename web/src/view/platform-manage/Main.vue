<template>
    <div style="height:100%;">
        <title>
            平台后台管理系统
            <div class="user-box">
                <router-link to="/Home">返回主页</router-link>
                <span class="user">{{username}}</span>
                <span class="logout" @click="logout">注销</span>
            </div>
        </title>
        <div class="window overflow_hide">
            <div class="nav">
                <Menu></Menu>
            </div>
            <div class="manage">
                <Tags></Tags>
                <keep-alive :include="includedComponents">
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    //import Menu from '@/components/platform-manage/Menu'
    import Tags from '../../components/platform-manage/Tags'
    import Menu from '../../components/platform-manage/Menu'

    export default {
        name: "Main",
        components: {Menu, Tags},
        created() {
        },
        methods: {
            logout() {
                this.$router.push("/");
                this.$store.dispatch("delUser");
                this.$store.dispatch("delIsLogin");
            }
        },
        mounted() {
            //this.$router.push("/Main");
            //this.$store.dispatch('addVisitedViews', {url: this.$route.path , name: this.$route.name});
            //this.$store.dispatch('setActiveIndex', this.$route.path);
            //this.$store.dispatch("emptyVisitedViews");
            //控制页面刷新
            if (this.$route.path !== '/SysHome') {
                this.$store.dispatch('addVisitedViews', {url: this.$route.path, name: this.$route.name});
                this.$store.dispatch('setActiveIndex', this.$route.path);
                //this.$store.dispatch('addVisitedViews', {href: '/Main', name: '首页'});

            } else {
                //this.$store.dispatch('addVisitedViews', {href: '/Main', name: '首页'});
                this.$store.dispatch('setActiveIndex', '/SysHome');
                this.$router.push('/SysHome');
            }
        },
        computed: {
            username() {
                return this.$store.getters.getToken.username;

            },
            includedComponents() {
                return this.$store.getters.getKeepAlive.toString().replace(/\//g, "");
            }
        },
        watch: {
            $route(to, from) {

            }
        }
    }
</script>

<style scoped lang="less">
    @height: 60px;
    @nav-width: 200px;
    title {
        background-color: #324057;
        display: block;
        font-size: 20px;
        color: #fff;
        text-align: left;
        height: @height;
        line-height: @height;

        .user-box {
            float: right;
            padding-right: 40px;

            .user {
                padding-right: 40px;
            }

            .user::before {
                content: "用户名:";
            }

            .logout {
                cursor: pointer;
            }
        }
    }

    .window {
        height: calc(100% - @height);

        .nav {
            width: @nav-width;
            float: left;
            height: 100%;
            overflow: auto;
        }

        .manage {
            width: calc(100% - @nav-width);
            float: left;
            height: 100%;
        }
    }

    tags {
        display: block;
    }
</style>
