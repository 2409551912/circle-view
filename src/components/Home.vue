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

                <a href="javascript:void(0)" v-on:click="exit">退出</a>
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
                        <a v-link="{ name: 'postDetail',params:{id:p.id}}">{{p.title}}</a>
                    </li>
                </ul>

                <div class="more">
                        <span>
                            <a v-link="{ name: 'postList', params: { id: l.tag_id }}">更多</a>
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
                        <a v-link="{ name: 'postDetail',params:{id:p.id}}">{{p.title}}</a>
                    </li>
                </ul>
                <div class="more">
                        <span>
                            <a v-link="{ name: 'postList', params: { id: l.tag_id  }}">更多</a>
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
                        <a v-link="{ name: 'postDetail',params:{id:p.id}}">{{p.title}}</a>
                    </li>
                </ul>
                <div class="more">
                    <span>
                        <a v-link="{ name: 'postList', params: { id: l.tag_id  }}">更多</a>
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
                        <a v-link="{ name: 'postDetail',params:{id:p.id}}">{{p.title}}</a>
                    </li>
                </ul>
                <div class="more">
                    <span>
                        <a v-link="{ name: 'postList', params: { id: l.tag_id  }}">更多</a>
                    </span>
                </div>
            </div>
        </div>
    </div>

    <div class="login-mask" v-show="show_login">
        <div class="login-box">
            <ul class="nav">
                <li>
                    <a href="javascript:void(0)" class="login">登陆</a>
                </li><li class="register">
                <a href="javascript:void(0)">注册</a>
            </li>
            </ul>
            <form action="" class="login-form">
                <input type="text" placeholder="请输入账号" name="l-account" class="l-account" v-model="account">
                <input type="password" placeholder="请输入密码" name="l-password" class="l-password" v-model="password">
                <input type="button" value="登陆" id="login" v-on:click="login">
            </form>

            <form action="" class="register-form hid" method="post">
                <input type="text" placeholder="请输入注册账号" name="r-account" class="r-account">
                <input type="password" placeholder="请输入注册密码" name="r-password" class="r-password">
                <input type="button" value="注册" id="register">
            </form>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import Vue from 'vue'
    import CommonVue from './Common.vue'
    import CommonJs from '../assets/common.js'


    //初始化数据
    var initData = {
        list : [],
        show_login:false,
        account:'',
        password:'',
        is_login:false
    }

    export default {
        replace: false,
        data(){
            return initData;
        },
        created:function(){
            this.isLogin();
        },
        methods: {
            showLogin: function () {
                this.$set("show_login", true)
            },

            login: function () {

                var $this = this;
                $.post('http://123.249.54.19:8085/index/login', {

                    account:this.account,
                    password:this.password

                },
                function (data, status) {
                        if (data.ret == 1) {

                            $this.$set("show_login", false);
                            CommonJs.setCookie('bang_token',data.bang_token);
                            CommonJs.setCookie('bang_account',data.bang_account);

                            $this.isLogin();
                        } else {

                            alert('密码错误');
                        
                        }
                    }, 'json'
                )
            },

            //判断是否登陆
            isLogin: function () {
                if (CommonJs.getCookie('bang_token')) {

                    this.$set('is_login',true);

                }else{

                    this.$set('is_login',false);

                }
            },

            //退出
            exit:function () {

                CommonJs.delCookie('bang_token');
                this.$set('is_login',false);
            }
        },
        compiled: function () {
            //`this` 指向 vm 实

        },

    }


    $.ajax({
        type: "get",
        url: "http://123.249.54.19:8085/index/index_post",
        dataType: "json",
        success: function (data) {
            var vm = this;
            var list = transformArr(data.list);

            console.log(list);
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










<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }
    /*登陆*/
    .login-mask{
        position: fixed;
        left: 0rem;
        top: 0rem;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
    }
    .login-box{
        width: 20rem;
        height:14rem;
        background: #fff;
        position: fixed;
        left: 50%;
        margin-left: -10rem;
        top: 50%;
        margin-top: -8rem;
    }
    .login-box .nav{
        width: 90%;
        margin: 0 auto;
        margin-top: 2rem;
    }
    .login-box .nav li{
        display: inline-block;
        width: 50%;
        text-align: center;
        vertical-align: top;
    }
    .login-box form{
        width: 80%;
        margin: 0 auto;
        margin-top: 2rem;
    }
    .login-box form input[type=text],
    .login-box form input[type=password]{
        width: 100%;
        margin-bottom: 1rem;
        padding: 0.5rem 0rem 0.5rem 0.2rem;
    }
</style>
