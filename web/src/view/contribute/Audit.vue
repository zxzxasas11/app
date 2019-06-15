<template>
    <div>
        <div class="list-title">
            <div></div>
            <div>题目类型</div>
            <div>题目难度</div>
            <div>章节名称</div>
            <div>题目名称</div>
            <div></div>
        </div>

        <div class="list" v-for="(l,index) in list">
            <div>{{index+1}}</div>
            <div>{{l.type}}</div>
            <div>{{l.difficulty}}</div>
            <div>{{l.catagory}}</div>
            <div :title="l.name">{{l.name|lengthControll}}</div>
            <div>
                <button class="check-btn" @click="editQuestion(l)">修改</button>
                <button class="check-btn" @click="deleteQuestion(l)">删除</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Audit",
        data(){
            return{
                list:[]
            }
        },
        created() {
        },
        methods:{
            getList(){

            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../assets/css/table.less';

</style>
