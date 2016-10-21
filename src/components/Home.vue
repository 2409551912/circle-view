<template>

    <Header>fsadf</Header>
    <!--<div class="public-header">-->
        <!--<div class="box">-->
            <!--<div class="logo">圈 儿</div>-->
            <!--<div class="nav">-->
                <!--<ul>-->
                    <!--<li>首页</li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="account">-->
            <!---->
            <!--<span v-if="is_login">-->
                <!--<i class="iconfont personal">&#xe603;</i>-->
                <!--<a href="javascript:void(0)" id="changeNav">{{username}}</a>-->

                <!--<a href="javascript:void(0)" v-on:click="exit">退出</a>-->
                <!--<ul class="personal-nav hid">-->
                    <!--<li>    -->
                        <!--<a href="/index/exit">退出</a>>   -->
                    <!--</li>   -->
                <!--</ul>   -->
            <!--</span>    -->

            <!--<span v-else>-->
                <!--<a href="javascript:void(0)" class="login" v-on:click="showLogin(1)">登陆</a>-->
                <!--<a href="javascript:void(0)" class="register" v-on:click="showLogin(0)">注册</a>-->
            <!--</span>   -->
            <!---->
        <!--</div>-->
        <!--<a v-link="{name: 'publish'}" class="write">-->
            <!--<i class="iconfont">&#xe604;</i>-->
        <!--</a>-->

    <!--</div>-->
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

    <div class="login-mask" v-show="show_login" v-on:click="hiddenLogin">

        <div class="login-box" v-on:click="stopPropagation">
            <ul class="nav">
                <li>
                    <a href="javascript:void(0)" class="login" v-on:click="showBox(1)" v-bind:class="{ 'main-color': !login_box }">登陆</a>
                </li><li class="register">
                <a href="javascript:void(0)" v-on:click="showBox(0)" v-bind:class="{ 'main-color': login_box }">注册</a>
                </li>
            </ul>
            <form action="" class="login-form">


                <template v-if="login_box">
                    <input type="text" placeholder="请输入账号" name="l-account" class="l-account" v-model="account" v-on:focus="removeHint">
                    <input type="password" placeholder="请输入密码" name="l-password" class="l-password" v-model="password" v-on:focus="removeHint">
                    <div class="hint" v-if="hint">{{hint}}</div>
                    <input type="button" value="登陆" id="login" v-on:click="login">
                </template>

                <template v-else>
                    <input type="text" placeholder="请输入注册账号" name="r-account" class="r-account" v-model="r_account">
                    <input type="text" placeholder="请设置用户名" name="r-username" class="r-username" v-model="r_username">
                    <input type="password" placeholder="请输入注册密码" name="r-password" class="r-password" v-model="r_password">
                    <div class="hint" v-if="hint">{{hint}}</div>
                    <input type="button" value="注册" id="register" v-on:click="register">
                </template>
                
            
            </form>
        </div>

    </div>

</template>

<script>
    import $ from 'jquery'
    import Vue from 'vue'
    import CommonVue from './Common.vue'
    import CommonJs from '../assets/common.js'
    import Header from './Header'
    



    //初始化数据
    var initData = {
        list : [],
        show_login:false,
        account:'',
        password:'',
        is_login:false,
        login_box:1,
        r_account:'',
        r_password:'',
        r_username:'',
        username:'',
        hint:''
    }

    export default {
        replace: false,
        data(){
            return initData;
        },
        created:function(){
            this.isLogin();
            if(CommonJs.getCookie('username')){
                this.$set('username',CommonJs.getCookie('username'));
            }
        },
        components: {
            // <my-component> 只能用在父组件模板内
            'Header': Header
        },
        methods: {
            showLogin: function (boxType) {
                this.$set("show_login", true);
                this.$set("login_box", boxType);
            },
            hiddenLogin: function(){
                this.$set("show_login", false)
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
                            $this.$set("username", data.body.user.username);
                            CommonJs.setCookie('bang_token',data.bang_token);
                            CommonJs.setCookie('bang_account',data.bang_account);
                            CommonJs.setCookie('username',data.body.user.username);

                            $this.isLogin();
                        } else {

                            $this.$set("hint", "账号密码错误");
                        
                        }
                    }, 'json'
                )
            },
            //注册
            register:function(){
                var $this = this;
                $.post('http://123.249.54.19:8085/index/user/register', {
                    account:this.r_account,
                    password:this.r_password,
                    username:this.r_username

                },
                function (data, status) {

                        if (data.ret == 1) {

                            $this.$set("login_box", 1);

                        }else{
                            $this.$set("hint", "用户名已注册");
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

            showBox: function (boxType) {
                 this.$set('login_box',boxType);
                 this.removeHint();
            },


            //退出
            exit:function () {

                CommonJs.delCookie('bang_token');
                CommonJs.delCookie('bang_account');
                CommonJs.delCookie('username');
                this.$set('is_login',false);
            
            },

            //阻止冒泡
            stopPropagation:function(event){
                event.stopPropagation();
            },
            
            //取消提示
            removeHint:function () {
                this.$set("hint", "");
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
        /*height:14rem;*/
        background: #fff;
        position: fixed;
        left: 50%;
        margin-left: -10rem;
        top: 50%;
        margin-top: -8rem;
        padding-bottom: 1.5rem;
    }
    .login-box .nav{
        margin: 0 auto;
    }
    .login-box .nav li{
        display: inline-block;
        width: 50%;
    }
    .login-box .nav li a{
        color: #444;
        display: inline-block;
        width: 100%;
        text-align: center;
        vertical-align: top;
        padding:1.4rem 0rem 1.4rem 0rem;
    }
    .login-box form{
        width: 80%;
        margin: 0 auto;
        margin-top: 1rem;
    }
    .login-box form input[type=text],
    .login-box form input[type=password]{
        width: 100%;
        margin-bottom: 1rem;
        padding: 0.5rem 0rem 0.5rem 0.2rem;
    }
    .login-box form input[type=password]{
        margin-bottom: 0.4rem;
    }

    .login-box form input[type=button]{
        margin-top:0.4rem;
    }

    .login-box .nav li a.main-color{
        background:rgba(154,198,0,0.8);
        color: #fff;
    }
    .login-box .hint{
        color: #f71e1e;
        font-size: 0.8rem;
    }
</style>
