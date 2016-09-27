<template>
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
    <div class="post-detail">
        <div class="outer">
            <div class="detail clearfix">
                <div class="inner">
                    <div class="user clearfix">
                        <p class="title">{{data.post.title}}</p>

                        <div class="user-info">
                            <img src="http://cdn.bangyoung.com/cdn/user_portrait/20160902/beijingdaxue/32r2r2r.jpg" alt="" class="host-head">
                            <p class="name">{{data.username}}</p>
                        </div>

                    </div>
                    <div class="post">
                        <p class="content">{{data.post.content}}</p>
                        <a href="javascript:void(0)" class="comment" id="p-comment" v-on:click="comment()">参与评论</a>
                        <i class="iconfont praise">&#xe601;</i>
                    </div>
                    <div class="post-comment hid">
                        <form action="">
                            <textarea name="" id="comment-detail" rows="8" v-model = "postContent"></textarea>
                            <div>
                                <a href="javascript:void(0)" class="cancel">收起</a>
                                <a href="javascript:void(0)" class="publish" post-id="{$post->id}" v-on:click="publishComment()">发布</a>
                            </div>
                        </form>
                    </div>

                    <div class="comment-order">
                        <a href="">最新评论</a>
                        <a href="">热门评论</a>
                    </div>

                </div>

            </div>
            <div class="item clearfix" v-for="l in data.interact_list">
                <img src="http://cdn.bangyoung.com/cdn/user_portrait/20160902/beijingdaxue/32r2r2r.jpg" alt="" class="head">
                <div class="comment">
                    <div class="comment-box">
                        <p class="user">
                            <span class="name">{{l.username}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="time">{{l.create_at}}</span></p>
                        <div class="content">
                            {{l.content}}
                        </div>
                        <p class="interact"><span>热度(10)</span><span><a href="javascript:void(0)"class="reply">评论(1)</a></span><span>点赞 <i class="iconfont praise">&#xe601;</i></span></p>
                    </div>
                    <div class="reply-interact hid clearfix">
                        <div class="reply-box clearfix">
                            <input type="hidden" class="at-user">
                            <input type="text" class="reply-content">
                            <a href="javascript:void(0)" class="publish" interact-id="{$interact->id}">发布</a>
                        </div>

                        <ul class="reply-interact-box">

                            <li class="clearfix" v-for="r in data.interest_list.reply_list">

                                <img src="http://cdn.bangyoung.com/cdn/user_portrait/20160902/beijingdaxue/32r2r2r.jpg" alt="" class="head">
                            <p>
                                <span class="name">小小鸟</span>
                                    <span v-if="l.at_auer_id">

                                        <span>回复了</span>
                                        <span class="at-username">{$reply->at_username}</span>

                                    </span>

                                <span>{r.content}</span>

                            </p>
                            <a href="javascript:void(0)" class="reply" from_user_id="{$reply->from_user_id}">回复</a>

                            </li>


                        </ul>


                    </div>

                </div>
            </div>



        </div>
        <!--<div class="comment-publish">-->
        <!--<div class="outer">-->
        <!--<div class="item clearfix">-->
        <!--<img src="http://cdn.bangyoung.com/cdn/user_portrait/20160902/beijingdaxue/32r2r2r.jpg" alt="" class="head">-->
        <!--<div class="comment">-->
        <!--<div>-->
        <!--<p>小小鸟</p>-->
        <!--<form action="">-->
        <!--<input type="text">-->
        <!--</form>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
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
//        'title':"asdfdsaf",
//        'post':{},
//        'username':''
        'data':'',
        'postContent':''
    }

    export default {
        replace: false,
        data () {
            return initData
        },
        created:function(){
            $.ajax({
                type: "get",
                url: "http://123.249.54.19:8085/index/post/detail/"+this.$route.params.id,
                dataType: "json",
                success: function (data) {

                    for(var i = 0;i < data.interact_list.length;i++){

                        data.interact_list[i].create_at = CommonJs.getDateDiff(data.interact_list[i].create_at*1000);

                    }

                    Vue.set(initData,'data',data);

                },
                error: function () {
                    console.log('llaalal');
                }
            })
        },
        methods:{
            comment:function () {
                $(".post-comment").slideToggle();
            },
            getLocalTime:function (ns) {
                return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
            },
            publishComment:function () {


                $.ajax({

                    type:"POST",
                    url:"http://123.249.54.19:8085/index/post/reply_post",
                    data:{
                        content:this.postContent,
                        type:1,
                        post_id:this.data.post.id
                    },
                    dataType:"json",
                    success:function (data) {


                        if(data.ret == 1){

                            //收起发布框
                            $(".post-comment").slideToggle();

                            //追加数据
                            $.ajax({
                                type: "get",
                                url: "http://123.249.54.19:8085/index/post/detail/"+this.$route.params.id,
                                dataType: "json",
                                success: function (data) {

                                    console.log(data);

                                    for(var i = 0;i < data.interact_list.length;i++){


                                        data.interact_list[i].create_at = CommonJs.getDateDiff(data.interact_list[i].create_at*1000);

                                    }

                                    Vue.set(initData,'data',data);

                                },
                                error: function () {
                                    console.log('llaalal');
                                }
                            })



                        }

                    }

                })

            }
        }
    }


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
    /*帖子详情*/
    .post-detail .outer{
        width:70%;
        margin: 0 auto;
    }
    .post-detail .outer .detail{
        width:70%;
        margin: 20px 0px;
    }
    .post-detail .outer .inner{
        margin-left: 70px;
        background: #fff;
        border: 1px solid #dfdfdf;
    }
    .post-detail .outer .inner .user-info{
        float: right;
        height: 58px;
    }
    .post-detail .inner .user-info .name{
        font-size: 0.8rem;
        width: 42px;
        height: 16px;
        text-align: center;
        line-height: 16px;
    }
    .post-detail .outer .host-head{
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }


    .post-detail .outer .detail .user{
        border-bottom: 1px solid #dfdfdf;
        padding: 0.3rem 1.5rem;
    }
    .post-detail .outer .detail .title{
        float: left;
        font-size: 1.2rem;
        color: #444;
        height: 58px;
        line-height: 58px;
    }
    .post-detail .outer .post{
        color: #444;
        padding: 1.5rem 1.5rem 1.5rem 1.5rem;
        border-bottom: 1px solid #dfdfdf;
    }
    .post-detail .outer .post .content{
        margin-bottom: 1rem;
    }
    .post-detail .outer .post .comment{
        display: inline-block;
        background: #81a908;
        color: #fff;
        font-size: 0.8rem;
        text-decoration: none;
        width: 5.2rem;
        height: 1.8rem;
        line-height: 1.8rem;
        text-align: center;
    }
    .post-detail .outer .post .praise{
        font-size: 2.5rem;
        position: relative;
        top: 0.8rem;
        left: 2.5rem;
        color: #aaa;
    }
    .post-detail .outer .post-comment{
        border-bottom: 1px solid #dfdfdf;
        padding: 1.5rem;
    }
    .post-detail .outer .post-comment textarea{
        width: 100%;
    }
    .post-detail .outer .post-comment div{
        width: 100%;
        text-align: right;
    }
    .post-detail .outer .post-comment div a{
        display: inline-block;
        font-size: 0.8rem;
        color: #fff;
        width: 5.2rem;
        height: 1.8rem;
        line-height: 1.8rem;
        text-align: center;
        margin-top: 1rem;
    }
    .post-detail .outer .post-comment div a:first-child{
        background-color: #aaa;
    }
    .post-detail .outer .post-comment div a:last-child{
        background-color: #81a908;
    }
    .post-detail .outer .comment-order{
        padding: 1.5rem;
    }
    .post-detail .outer .comment-order a{
        color: #444;
        margin-right: 1rem;
    }
    .post-detail .item{
        width: 70%;
        margin-bottom: 1.5rem;
    }
    .post-detail .item .head{
        width: 48px;
        height: 48px;
        float: left;
    }
    .post-detail .item .comment{
        margin-left: 70px;
        border: 1px solid #dfdfdf;
    }
    .post-detail .item .comment .comment-box{
        background: #fff;
        padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    }
    .post-detail .item .comment .user .name{
        color:#888;
    }
    .post-detail .item .comment .content{
        margin-top: 1rem;
    }
    .post-detail .item .comment .interact{
        text-align: right;
        color: #aaa;
        font-size: 0.8rem;
    }
    .post-detail .item .comment .interact a{
        color: #aaa;
    }
    .post-detail .item .comment .interact span{
        margin-left: 0.8rem;
    }
    .post-detail .item .comment .interact .praise{
        position: relative;
        left: 0rem;
        top: 0rem;
    }
    .post-detail .item .comment .reply-interact{
        background: #fff;
        border-top: 1px solid #dfdfdf;
        padding: 1.5rem;
        color: #444;
    }
    .post-detail .item .comment .reply-box{
        width: 100%;
    }
    .post-detail .reply-interact input[type=text]{
        width: 77%;
        height: 2.5rem;
        padding-left: 6px;
        float: left;

    }
    .post-detail .reply-interact a.publish{
        display: inline-block;
        width: 20%;
        height: 2.5rem;
        background: #81a908;
        vertical-align: middle;
        line-height: 2.5rem;
        color: #fff;
        float: right;
        text-align: center;
    }
    .post-detail .reply-interact-box{
        padding: 1rem 0rem 0rem 0rem;
    }
    .post-detail .reply-interact-box li{
        font-size: 0.8rem;
        vertical-align: middle;
        clear: both;
        padding: 0.3rem 0rem;
    }
    .post-detail .reply-interact-box li:first-child {
        padding-top: 0rem;
    }
    .post-detail .reply-interact-box li:last-child{
        padding-bottom: 0rem;
    }
    .post-detail .reply-interact-box .head{
        width: 20px;
        height: 20px;
        float: left;
    }
    .post-detail .reply-interact-box li p{
        margin-left: 15px;
        line-height: 24px;
        float: left;
        width: 65%;
    }
    .post-detail .reply-interact-box li p .name,
    .post-detail .reply-interact-box li p .at-username{
        color: #7594B3;
    }

    .post-detail .reply-interact-box .reply{
        color: #7594B3;
        float: right;
        display: inline-block;
        line-height: 24px;
    }


    /*帖子详情*/
    .post-detail .outer{
        width:70%;
        margin: 0 auto;
    }
    .post-detail .outer .detail{
        width:70%;
        margin: 20px 0px;
    }
    .post-detail .outer .inner{
        margin-left: 70px;
        background: #fff;
        border: 1px solid #dfdfdf;
    }
    .post-detail .outer .inner .user-info{
        float: right;
        height: 58px;
    }
    .post-detail .inner .user-info .name{
        font-size: 0.8rem;
        width: 42px;
        height: 16px;
        text-align: center;
        line-height: 16px;
    }
    .post-detail .outer .host-head{
        width: 42px;
        height: 42px;
        border-radius: 50%;
    }


    .post-detail .outer .detail .user{
        border-bottom: 1px solid #dfdfdf;
        padding: 0.3rem 1.5rem;
    }
    .post-detail .outer .detail .title{
        float: left;
        font-size: 1.2rem;
        color: #444;
        height: 58px;
        line-height: 58px;
    }
    .post-detail .outer .post{
        color: #444;
        padding: 1.5rem 1.5rem 1.5rem 1.5rem;
        border-bottom: 1px solid #dfdfdf;
    }
    .post-detail .outer .post .content{
        margin-bottom: 1rem;
    }
    .post-detail .outer .post .comment{
        display: inline-block;
        background: #81a908;
        color: #fff;
        font-size: 0.8rem;
        text-decoration: none;
        width: 5.2rem;
        height: 1.8rem;
        line-height: 1.8rem;
        text-align: center;
    }
    .post-detail .outer .post .praise{
        font-size: 2.5rem;
        position: relative;
        top: 0.8rem;
        left: 2.5rem;
        color: #aaa;
    }
    .post-detail .outer .post-comment{
        border-bottom: 1px solid #dfdfdf;
        padding: 1.5rem;
    }
    .post-detail .outer .post-comment textarea{
        width: 100%;
    }
    .post-detail .outer .post-comment div{
        width: 100%;
        text-align: right;
    }
    .post-detail .outer .post-comment div a{
        display: inline-block;
        font-size: 0.8rem;
        color: #fff;
        width: 5.2rem;
        height: 1.8rem;
        line-height: 1.8rem;
        text-align: center;
        margin-top: 1rem;
    }
    .post-detail .outer .post-comment div a:first-child{
        background-color: #aaa;
    }
    .post-detail .outer .post-comment div a:last-child{
        background-color: #81a908;
    }
    .post-detail .outer .comment-order{
        padding: 1.5rem;
    }
    .post-detail .outer .comment-order a{
        color: #444;
        margin-right: 1rem;
    }
    .post-detail .item{
        width: 70%;
        margin-bottom: 1.5rem;
    }
    .post-detail .item .head{
        width: 48px;
        height: 48px;
        float: left;
    }
    .post-detail .item .comment{
        margin-left: 70px;
        border: 1px solid #dfdfdf;
    }
    .post-detail .item .comment .comment-box{
        background: #fff;
        padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    }
    .post-detail .item .comment .user .name{
        color:#888;
    }
    .post-detail .item .comment .content{
        margin-top: 1rem;
    }
    .post-detail .item .comment .interact{
        text-align: right;
        color: #aaa;
        font-size: 0.8rem;
    }
    .post-detail .item .comment .interact a{
        color: #aaa;
    }
    .post-detail .item .comment .interact span{
        margin-left: 0.8rem;
    }
    .post-detail .item .comment .interact .praise{
        position: relative;
        left: 0rem;
        top: 0rem;
    }
    .post-detail .item .comment .reply-interact{
        background: #fff;
        border-top: 1px solid #dfdfdf;
        padding: 1.5rem;
        color: #444;
    }
    .post-detail .item .comment .reply-box{
        width: 100%;
    }
    .post-detail .reply-interact input[type=text]{
        width: 77%;
        height: 2.5rem;
        padding-left: 6px;
        float: left;

    }
    .post-detail .reply-interact a.publish{
        display: inline-block;
        width: 20%;
        height: 2.5rem;
        background: #81a908;
        vertical-align: middle;
        line-height: 2.5rem;
        color: #fff;
        float: right;
        text-align: center;
    }
    .post-detail .reply-interact-box{
        padding: 1rem 0rem 0rem 0rem;
    }
    .post-detail .reply-interact-box li{
        font-size: 0.8rem;
        vertical-align: middle;
        clear: both;
        padding: 0.3rem 0rem;
    }
    .post-detail .reply-interact-box li:first-child {
        padding-top: 0rem;
    }
    .post-detail .reply-interact-box li:last-child{
        padding-bottom: 0rem;
    }
    .post-detail .reply-interact-box .head{
        width: 20px;
        height: 20px;
        float: left;
    }
    .post-detail .reply-interact-box li p{
        margin-left: 15px;
        line-height: 24px;
        float: left;
        width: 65%;
    }
    .post-detail .reply-interact-box li p .name,
    .post-detail .reply-interact-box li p .at-username{
        color: #7594B3;
    }

    .post-detail .reply-interact-box .reply{
        color: #7594B3;
        float: right;
        display: inline-block;
        line-height: 24px;
    }
    /*.post-detail .comment-publish{*/
    /*position: fixed;*/
    /*top:0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*background: rgba(0,0,0,0.7);*/
    /*}*/

    /*.post-detail .comment-publish .outer{*/
    /*margin-top: 8rem;*/
    /*}*/
    /*.post-detail .comment-publish .comment{*/
    /*background-color: #fff;*/
    /*height: 26rem;*/
    /*padding: 1.5rem;*/
    /*}*/
</style>
