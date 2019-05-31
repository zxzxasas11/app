
import axios from 'axios';
export  default {
    //list转成父子结构
    listToTree(list,pid,pidName,idName) {
        let ret = [];//一个存放结果的临时数组
        for(let i in list) {
            if(list[i][pidName] === pid) {//如果当前项的父id等于要查找的父id，进行递归
                list[i].children = this.listToTree(list, list[i][idName],pidName,idName);
                ret.push(list[i]);//把当前项保存到临时数组中
            }
        }
        return ret;//递归结束后返回结果
    },
    //格式化后台传过来的秒数 转化为年月日
    formatDate:function(str){
        let oDate = new Date(str),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth()+1,
            oDay = oDate.getDate();
        return oYear +'-'+ this.addZero(oMonth) +'-'+ this.addZero(oDay) +'';
    },
    formDataToHms(str){
        let oDate = new Date(str),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth()+1,
            oDay = oDate.getDate(),
            oHour = oDate.getHours(),
            oMinute = oDate.getMinutes(),
            oSecond = oDate.getSeconds();
        return oYear +'-'+ this.addZero(oMonth) +'-'+ this.addZero(oDay) +' ' + this.addZero(oHour)+":"+this.addZero(oMinute)+":"+this.addZero(oSecond);
    },
    //格式化秒数为时分秒转化为json对象供highCharts组件
    dateToHour(value){
        let secondTime = parseInt(value),minuteTime = 0,hourTime = 0;
        if(secondTime > 60) {
            minuteTime = parseInt(secondTime / 60);
            secondTime = parseInt(secondTime % 60);
            if(minuteTime > 60) {
                hourTime = parseInt(minuteTime / 60);
                minuteTime = parseInt(minuteTime % 60);
            }
        }
        return {hour:hourTime,minute:minuteTime,second:secondTime};
    },
    secondToString(value){
        let secondTime = parseInt(value),minuteTime = 0,hourTime = 0;
        if(secondTime > 60) {
            minuteTime = parseInt(secondTime / 60);
            secondTime = parseInt(secondTime % 60);
            if(minuteTime > 60) {
                hourTime = parseInt(minuteTime / 60);
                minuteTime = parseInt(minuteTime % 60);
            }
        }
        return hourTime+"时"+minuteTime+"分"+secondTime+"秒";
    },
    addZero(num){
        if(parseInt(num) < 10){
            num = '0'+num;
        }
        return num;
    },
    fixPicUrl(str){
        return axios.defaults.baseURL+str;
    },
    //清空json
    clearJson(obj){
        for(let key in obj){
            //alert(key + ":"+typeof (obj[key]));
            //obj[key]=null;
            if(typeof (obj[key])!=="object"){
                obj[key] = "";
            }
        }
    },
    //数组转换为string
    arrayToString(arr){
        return arr.join(",").toString();
    },
    stringToArray(str){
        return str.split(",");
    },
    letter:["A","B","C","D","E","F","G","J","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    formatDateAndTime(data,reg){
        let date = new Date(data)
        return date.getFullYear() + reg + this.addZero(date.getMonth() + 1) + reg + this.addZero(date.getDate() )+ ' ' + this.addZero(date.getHours()) + ':' + this.addZero(date.getMinutes()) + ':' + this.addZero(date.getSeconds());
    }
}
