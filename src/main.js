import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'


import CommonJs from './assets/common.js'
import $ from 'jquery'
import VueRouter from 'vue-router'

import Home from './components/Home'
import PostDetail from './components/PostDetail'
import PostList from './components/PostList'


/* eslint-disable no-new */


Vue.use(VueRouter);
var router = new VueRouter(); //这里可以带有路由器的配置参数


var App1 = Vue.extend({});
Vue.component('Hello', Hello);
router.map({

    '/Index/post/detail/:id':{
        name:'postDetail',
        component:PostDetail
    },
    '/Index/post/list/:id': {
        name:'postList',
        component: PostList
    },
    '/': {
        component: Home
    }

});

//判断是否登录
// router.beforeEach(function (transition) {
//    if (CommonJs.getCookie('user_id')) {
       
//         Vue.set('is_login',true);
//         return true;

//    }else{

//         return false
   
//    }

// })


router.start(App, "body");





