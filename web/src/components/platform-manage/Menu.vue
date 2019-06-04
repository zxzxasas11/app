<template>
    <div class="menu-box">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                ref="leftMenu"
                key="1"
                @close="handleClose">
            <router-link to="/SysHome">
                <el-menu-item index="0" key="0">
                    <i class="el-icon-tickets"></i>
                    <span slot="title">后台管理系统</span>
                </el-menu-item>
            </router-link>
            <el-submenu style="background-color: #f4f9ff" :index="menu.menuId" v-for="(menu,index) in menus"
                        :key="menu.menuId" v-if="menu.menuPid==='0'">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{menu.name}}</span>
                </template>
                <el-menu-item-group
                        class="list-line"
                        :key="menu2.menuId" :index="menu2.menuId" v-for="menu2 in menus"
                        v-if="menu2.menuPid===menu.menuId&&menu2.url!=''&&menu2.url!=null">
                    <el-menu-item :index="menu2.menuId">
                        <router-link class="second_menu_a" :to="menu2.url" @click.native="addTags(menu2)">
                            {{menu2.name}}
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    import Utils from '../../assets/js/Utils'

    export default {
        name: "Menu",
        data() {
            return {
                menus: []
            }
        },
        created() {
            this.getMenu();
        },
        methods: {
            handleOpen() {

            },
            handleClose() {

            },
            getMenu() {
                const that = this;
                this.$post("/Menu/loadMenu").then(function (response) {
                    that.menus = response.data;
                });
            },
            addTags(m) {
                let visit = this.$store.getters.visitedViews;
                this.$store.dispatch("setActiveIndex", m.url);
                for (let i = 0; i < visit.length; i++) {
                    if (m.name === visit[i].name) {
                        return;
                    }
                }
                this.$store.dispatch("addVisitedViews", m);
            }
        },
        mounted() {
            //定义要传递的函数refreshMemu   用于刷新
            let that = this;
            Utils.$on('refreshMenu', function () {
                that.getMenu();
            })
        },
    }
</script>

<style scoped lang="less">
    .menu-box {
        height: 100%;

        ul {
            height: 100%;
        }
    }

    .second_menu_a {
        display: block;
        width: 100%;
        height: 100%;
    }
    /*.el-menu-item-group__title {
        padding: 0 !important;

    }

    .list-line {
        background-color: #f4f9ff;
        border-bottom: 1px solid #e8e8e8;
        height: 50px;
        line-height: 50px;
    }*/
</style>
