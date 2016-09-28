var minute = 1000 * 60;
var hour = minute * 60;
var day = hour * 24;
var halfamonth = day * 15;
var month = day * 30;
var result = "";

var CommonJs = {
    
    getDateDiff:function (dateTimeStamp) {

        var now = new Date().getTime();
        var diffValue = now - dateTimeStamp;
        if(diffValue < 0){
            //若日期不符则弹出窗口告之
            //alert("结束日期不能小于开始日期！");
        }
        var monthC =diffValue/month;
        var weekC =diffValue/(7*day);
        var dayC =diffValue/day;
        var hourC =diffValue/hour;
        var minC =diffValue/minute;
        if(monthC>=1){

            result=parseInt(monthC) + "个月前";

        }
        else if(weekC>=1){

            result=parseInt(weekC) + "周前";

        }
        else if(dayC>=1){

            result=parseInt(dayC) +"天前";

        }
        else if(hourC>=1){

            result=parseInt(hourC) +"个小时前";

        }
        else if(minC>=1){

            result=parseInt(minC) +"分钟前";

        }else{
            result="刚刚";
        }

        return result;

    },

    //判断用户是否登录
    isLogin:function(){
        // $.get('http://123.249.54.19:8085/index/is_login', {

        //     },
        //     function (data, status) {
        //         alert(2);
        //             if (data.ret == 1) {

        //                 Vue.$set("is_login", true)

        //             } else {

        //                 Vue.$set("is_login", false)
                    
        //             }
        //         }, 'json'
        //     )
    },
    setCookie:function(c_name,value,expiredays){
            var exdate=new Date()
            exdate.setDate(exdate.getDate()+expiredays)
            document.cookie=c_name+ "=" +escape(value)+
            ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
    },
    getCookie:function(name){  
        var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));  
        if(arr != null){  
         return unescape(arr[2]);   
        }else{  
         return null;  
    }  
} 

}
CommonJs.isLogin();

module.exports = CommonJs;