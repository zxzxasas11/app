
//export  default
module.exports = {
    //list转成父子结构
    async listToTree(list,pid,pidName,idName) {
        let ret = [];//一个存放结果的临时数组
        for(let i in list) {
            if(list[i][pidName] === pid) {//如果当前项的父id等于要查找的父id，进行递归
                list[i].children = this.listToTree(list, list[i][idName],pidName,idName);
                ret.push(list[i]);//把当前项保存到临时数组中
            }
        }
        return ret;//递归结束后返回结果
    },
}
