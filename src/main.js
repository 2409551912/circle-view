import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'

import Home from './components/Home'
import PostDetail from './components/PostDetail'

import $ from 'jquery'
import VueRouter from 'vue-router'
/* eslint-disable no-new */


Vue.use(VueRouter);
var router = new VueRouter(); //这里可以带有路由器的配置参数

// new Vue({
//   el: 'body',
//   components: { App }
// })

var App1 = Vue.extend({});
Vue.component('Hello', Hello);
router.map({
    // '/foo': {
    //     component: Foo
    // },
    '/Index/post/detail/:id':{
        name:'postDetail',
        component:PostDetail
    },
    '/Hello': {
        component: Hello
    },
    '/': {
        component: Home
    }
});
router.start(App, "body");


// $.post('http://123.249.54.19:8085/index/post/publish_post',
//     {
//         title : '哈哈哈',
//         content: '我勒个去',
//         tag_id : 1
//
//     },function (data,status) {
//   if(data.ret == 1){
//     window.location.href='/';
//   }
// })


// $.getJSON("http://123.249.54.19:8085/index/index_post?jsoncallback=?",function(data){
//
//
// });


//jsonp跨域


// $.ajax({
//     type: "get",
//     url: "http://123.249.54.19:8085/index/index_post",
//     dataType: "json",
//     success: function (json) {
//         console.log(json)
//     },
//     error: function () {
//         console.log('llaalal');
//     }
// })
function transformArr(data){
    var arr = [];
    var index = 0;
    for(var i in data){
        arr[index] = data[i];
        index++;
    }
    return arr;
}




