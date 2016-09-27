<style>
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


  .module-wrap{
    width: 90%;
    margin: 0 auto;
  }
  .module-wrap .col{
    float: left;
    width: 24%;
    margin-right: 1.333%;
    margin-top: 2.5rem;
  }
  .module-wrap .col:last-of-type{
    margin-right: 0;
  }
  .module-wrap .module{
    background: #fff;
    margin-bottom: 1rem;
    padding: 0.6rem 0 1.2rem 0;
    border-radius: 5px;
    box-shadow: 0px 3px 6px -2px #666;
  }
  .module-wrap .module .head{
    width: 60%;
    display: inline-block;
    font-size: 0.95rem;
  }
  .module-wrap .module .head img{
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    margin-left: 0.6rem;
    margin-right: 1rem;
    vertical-align: middle;
  }
  .module-wrap .module .focus{
    width: 34%;
    display: inline-block;
    text-align: center;
  }
  .module-wrap .module .focus span{
    display: inline-block;
    border: 1px solid #9ac600;
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
    color: #9ac600;
    border-radius: 4px;
  }
  .module-wrap .module .topic{
    width: 90%;
    margin: 0 auto;
    margin-top: 0.8rem;
    list-style-type: none;
  }
  .module-wrap .module .topic li{
    line-height: 20px;
    color: #666;
    font-size: 0.9rem;
  }
  .module-wrap .module .topic li a{
    color: #666;
    text-decoration: none;
  }
  .module-wrap .module .topic li a:hover{
    text-decoration: underline;
  }
  .module-wrap .module .more{
    width: 100%;
    text-align: right;
    margin-top: 0.5rem;
    color: #666;
  }
  .module-wrap .module .more span a{
    margin-right: 1.2rem;
    color: #666;
    text-decoration: none;
  }
</style>
<template>
    <router-view>
        <div class="public-header">
            <div class="box">
                <div class="logo">圈 儿</div>
                <div class="nav">
                    <ul>
                      <li><a href="/Hello">首页</a></li>
                    </ul>
                </div>
              </div>
            <div class="account">
              <!--{if condition="session('user_id') eq '' "}-->
              <!--<a href="javascript:void(0)" class="login">登陆</a>-->
              <!--<a href="javascript:void(0)" class="register">注册</a>-->
              <!--{else /}-->
              <!--<i class="iconfont personal">&#xe603;</i>-->
              <!--<a href="javascript:void(0)" id="changeNav">{$username}</a>-->
              <!--<ul class="personal-nav hid">-->
              <!--<li>-->
              <!--<a href="/index/exit">退出</a>>-->
              <!--</li>-->
              <!--</ul>-->
              <!--{/if}-->
            </div>
            <a href="/index/post/publish" class="write">
                <i class="iconfont">&#xe604;</i>
            </a>

        </div>
        <div class="module-wrap">
            <div id="header"></div>
                <div class="col0 col">

                    <div class="module" v-for="(i,l) in list" v-if="i%4 == 0">
                        <div>
                            <div class="head">
                                <img src="http://cdn.bangyoung.com/cdn/user_portrait/20160902/beijingdaxue/32xr22x.JPG" alt="">
                                <span>{{l.tag}}</span>
                            </div><div class="focus">
                            <span>关注</span>
                        </div>
                        </div>


                        <ul class="topic">
                            <li v-for="p in l.list">
                              <a href="/index/post/detail/{{p.id}}">{{p.title}}</a>
                            </li>
                        </ul>

                        <div class="more">
                            <span>
                                <a href="/index/post/list/">更多</a>
                            </span>
                        </div>
                    </div>

                </div>

                <div class="col1 col">

                    <div class="module" v-for="(i,l) in list" v-if="i%4 == 1">
                        <div>
                            <div class="head">
                                <img src="http://cdn.bangyoung.com/cdn/user_portrait/20160902/beijingdaxue/32xr22x.JPG" alt="">
                                <span>{{l.tag}}</span>
                            </div><div class="focus">
                                <span>关注</span>
                            </div>
                        </div>

                        <ul class="topic">
                            <li v-for="p in l.list">
                                <a href="/index/post/detail/{{p.id}}">{{p.title}}</a>
                            </li>
                        </ul>
                        <div class="more">
                            <span>
                                <a href="/index/post/list/">更多</a>
                            </span>
                        </div>
                    </div>

                </div>

            <div class="col2 col">

                <div class="module" v-for="(i,l) in list" v-if="i%4 == 2">
                    <div>
                        <div class="head">
                            <img src="http://cdn.bangyoung.com/cdn/user_portrait/20160902/beijingdaxue/32xr22x.JPG" alt="">
                            <span>{{l.tag}}</span>
                        </div><div class="focus">
                          <span>关注</span>
                        </div>
                    </div>

                    <ul class="topic">
                        <li v-for="p in l.list">
                            <a href="/index/post/detail/{{p.id}}">{{p.title}}</a>
                        </li>
                    </ul>
                    <div class="more">
                        <span>
                            <a href="/index/post/list/">更多</a>
                        </span>
                    </div>
                </div>

            </div>

            <div class="col3 col">

                <div class="module" v-for="(i,l) in list" v-if="i%4 == 3">
                    <div>
                        <div class="head">
                          <img src="http://cdn.bangyoung.com/cdn/user_portrait/20160902/beijingdaxue/32xr22x.JPG" alt="">
                          <span>{{l.tag}}</span>
                        </div><div class="focus">
                            <span>关注</span>
                        </div>
                    </div>

                    <ul class="topic">
                        <li v-for="p in l.list">
                            <a href="/index/post/detail/{{p.id}}">{{p.title}}</a>
                        </li>
                    </ul>
                    <div class="more">
                        <span>
                            <a href="/index/post/list/">更多</a>
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </router-view>
</template>

<script>
import Hello from './components/Hello'
import $ from 'jquery'
import Vue from 'vue'

//初始化数据
var initData = {
  list : []
}

export default {
    replace: false,
  data(){
      return initData;
  },
  methods:{
//    goNext(){
//      this.isRegister = true
//    }
  },
  compiled: function () {
      //`this` 指向 vm 实例


  }
}


$.ajax({
  type: "get",
  url: "http://123.249.54.19:8085/index/index_post",
  dataType: "json",
  success: function (data) {
    var vm = this;
    var list = transformArr(data.list);

    Vue.set(initData,'list',list);


  },
  error: function () {
    console.log('llaalal');
  }
})




//将对象转换成数组
function transformArr(data){
  var arr = [];
  var index = 0;
  for(var i in data){
    arr[index] = data[i];
    index++;
  }
  return arr;
}


</script>


