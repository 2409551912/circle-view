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
            <a href="javascript:void(0)" class="login">登陆</a>
            <a href="javascript:void(0)" class="register">注册</a>

            <!--<i class="iconfont personal">&#xe603;</i>-->
            <!--<a href="javascript:void(0)" id="changeNav">{$username}</a>-->
            <!--<ul class="personal-nav hid">-->
            <!--<li>-->
            <!--<a href="/index/exit">退出</a>>-->
            <!--</li>-->
            <!--</ul>-->
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
                        <a v-link="{ name: 'postDetail',params:{id:p.id}}">{{p.title}}</a>
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
                        <a v-link="{ name: 'postDetail',params:{id:p.id}}">{{p.title}}</a>
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
                        <a v-link="{ name: 'postDetail',params:{id:p.id}}">{{p.title}}</a>
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
</template>

<script>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }
</style>
