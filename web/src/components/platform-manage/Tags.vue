<template>
    <div class="tag_box">
        <el-tabs
                v-model="activeIndex"
                type="border-card"
                @tab-click="tabClick"
                v-if="options.length"
                @tab-remove="tabRemove">
            <el-tab-pane
                    :key="item.url"
                    v-for="(item, index) in options"
                    :label="item.name"
                    :closable="item.close"
                    :name="item.url">
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "Tags",
        data() {
            return {
            };
        },
        methods:{
            del_visit(index){
                this.$store.dispatch("delVisitedViews",index);
                let arr = this.$store.getters.visitedViews;
                if(arr.length>0){
                    this.$router.replace(arr[arr.length-1].url);
                }
                else  this.$router.push("/SysHome");
            },
            tabClick(){
                let path = this.activeIndex;
                this.$router.push({path: path});
            },
            tabRemove(targetName){
                this.$store.dispatch('delVisitedViews', targetName);
                if (this.activeIndex === targetName) {
                    // 设置当前激活的路由
                    if (this.options && this.options.length >= 1) {
                        this.$store.dispatch('setActiveIndex', this.options[this.options.length-1].url);
                        this.$router.push({path: this.activeIndex});
                    } else {
                        this.$router.push({path: '/SysHome'});
                    }
                }
            }
        },
        created(){
        },
        computed:{
            options(){
                return this.$store.getters.visitedViews
            },
            activeIndex:{
                get () {
                    return this.$store.getters.activeIndex
                },
                set (val) {
                    this.$store.dispatch("setActiveIndex",val);
                }
            }
        },
        watch:{
            '$route'(to) {
                if(this.$route.meta.needTabs===false){
                    //this.$store.dispatch('addVisitedViews', {url: '/' + to.path.split('/')[1], name: "字典类型管理"});
                    this.$store.dispatch('setActiveIndex', '/' + to.path.split('/')[1]);
                }
                else{
                    let flag = false;
                    for (let option of this.options ) {
                        if (option.name === to.name) {
                            //if (to.name.indexOf(option.name)>=0) {
                            flag = true;
                            this.$store.dispatch('setActiveIndex', '/' + to.path.split('/')[1]);
                            break;
                        }
                    }
                    if (!flag) {
                        this.$store.dispatch('addVisitedViews', {url: '/' + to.path.split('/')[1], name: to.name});
                        this.$store.dispatch('setActiveIndex', '/' + to.path.split('/')[1]);
                    }
                }
            }
        }
    }
</script>

<style scoped lang="less">
    *{user-select: none}
    .tag_box{
        height:40px;
        overflow: hidden;
    }
.tag{
    height:40px;
    line-height: 40px;
    min-width: 80px;
    float: left;text-align: center;
    position: relative;
    a{
        border: 1px solid #ccc;
        border-bottom:0;
        display: block;
        height:38px;
    }
    i{
        cursor: pointer;
        position: absolute;
        right: 0;

    }
}
.active{background-color: coral}
</style>
