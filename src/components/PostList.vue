<template>
    <div class="public-header">
        <div class="box">
            <div class="logo">圈 儿</div>
            <div class="nav">
                <ul>
                    <li>首页</li>
                </ul>
            </div>
        </div>
        <div class="account">
            
            <span v-if="is_login">
                <i class="iconfont personal">&#xe603;</i>
                <a href="javascript:void(0)" id="changeNav">小小鸟</a>
                <ul class="personal-nav hid">   
                    <li>    
                        <a href="/index/exit">退出</a>>   
                    </li>   
                </ul>   
            </span>    

            <span v-else>
                <a href="javascript:void(0)" class="login" v-on:click="showLogin">登陆</a>
                <a href="javascript:void(0)" class="register">注册</a>
            </span>   
            
        </div>
        <a href="/index/post/publish" class="write">
            <i class="iconfont">&#xe604;</i>
        </a>

    </div>
   <div class="post-list">
    <div class="outer">

        <div class="item clearfix" v-for="l in data.list">
            <img src="http://cdn.bangyoung.com/cdn/user_portrait/20160902/beijingdaxue/32r2r2r.jpg" alt="" class="head">
            <div class="post">
                <div class="user">
                    <span class="name">{{l.username}}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="time">{{l.create_at}}</span>
                    <p class="interact">
                        <i class="iconfont">&#xe602;</i>100<i class="iconfont red">&#xe601;</i>100
                    </p>
                </div>
                <p class="title"><a href="/index/post/detail/{$vo->id}">{{l.title}}</a></p>
                <p class="content">{{l.content}}</p>
            </div>
        </div>
       
        
    </div>
</div>
</template>

<script>
    import Common from '../assets/common.css'
    import Reset from '../assets/reset.css'

    import CommonJs from '../assets/common.js'

    import $ from 'jquery'

    import Vue from 'vue'

    //    alert($router);
    //初始化数据
    var initData = {
        'data':'',
    }

    export default {
        replace: false,
        data () {
            return initData
        },
        created:function(){
            var $this = this;
    
           $.ajax({
                type: "get",
                url: "http://123.249.54.19:8085/index/post/list/"+this.$route.params.id,
                dataType: "json",
                success: function (data) {

                    console.log('sd')
                    console.log(data);
                    for(var i = 0;i < data.list.length;i++){

                        data.list[i].create_at = CommonJs.getDateDiff(data.list[i].create_at*1000);

                    }
                    
                    $this.$set('data',data);

                },
                error: function () {
                    console.log('llaalal');
                }
            })
        },
        methods:{
            

           
        }
    }


    

</script>


















<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*公共顶部*/
  *{
    margin:0;
    padding: 0;
  }
  .public-header{
    width: 100%;
    height: 5rem;
    background: #24292c;
    color: #ededed;
    position: relative;
  }
  .public-header .box{
    margin: 0 auto;
    width: 60rem;
  }
  .public-header .logo{
    font-size: 2rem;
    display: inline-block;
    margin: 1.5rem 4rem auto 0;
    font-family: "SimSun";
  }
  .public-header .nav{
    display: inline-block;
  }
  .public-header .nav ul{
    list-style-type: none;
  }
  .public-header .account{
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 0.7rem;
  }
  .public-header .account a{
    color: #fff;
    text-decoration: none;
    margin-right: 10px;
  }
  .public-header .personal{
    margin-right: 4px;
    font-size: 0.9rem;
  }
  .public-header .write{
    position: fixed;
    right: 0rem;
    top:10rem;
  }
  .public-header .write i{
    color: #000;
    font-size: 2rem;
  }
  .public-header .personal-nav{
    width: 100%;
    color: #000;
    border: 1px solid #fff;
    margin-top: 0.2rem;
  }
  .public-header .personal-nav li{
    padding: 0.15rem 0px;
    border-radius: 2rem;
    text-align: center;
  }
  .public-header .personal-nav a{
    margin-right: 0px;
  }

   .post-list .outer{
    width: 70%;
    margin: 0 auto;
}
.post-list .outer .item{
    width: 65%;
    margin:1rem 0rem 2rem 0rem;
}
.post-list .outer .head{
    width: 45px;
    height: 45px;
    margin-right: 20px;
    float: left;

}
.post-list .outer .post {
    margin-left: 65px;
    color: #666;
    font-size: 12px;

}

.post-list .outer .post .user {
    background: #f2fbf2;
    color: #444;
    font-size: 12px;
    padding: 4px 0px;
    padding-left: 2px;
    background: #f2fbf2;
    margin-bottom: 8px;
    background: #fff;

}
.post-list .outer .post .user .name{
    color:#259;
}

.post-list .outer .post .title{
    padding-left: 2px;
    margin-bottom: 8px;
}
.post-list .outer .post .title a{
    color:#666;
    text-decoration: none;
}
.post-list .outer .post .title a:hover{
    text-decoration: underline;
}
.post-list .outer .post .content{
    padding-left: 2px;
}
.post-list .outer .post .interact{
    float: right;
    margin-right: 10px;
}
.post-list .outer .post .interact i{
    font-size: 12px;
    margin-right: 2px;
    margin-left: 20px;
}
.post-list .outer .post .interact i.red{
    font-size: 13px;
}

</style>
