<!--<style>-->
    <!--/*公共顶部*/-->
    <!--.public-header{-->
        <!--width: 100%;-->
        <!--height: 5rem;-->
        <!--background: #24292c;-->
        <!--color: #ededed;-->
        <!--position: relative;-->
    <!--}-->
    <!--.public-header .box{-->
        <!--margin: 0 auto;-->
        <!--width: 60rem;-->
    <!--}-->
    <!--.public-header .logo{-->
        <!--font-size: 2rem;-->
        <!--display: inline-block;-->
        <!--margin: 1.5rem 4rem auto 0;-->
        <!--font-family: "SimSun";-->
    <!--}-->
    <!--.public-header .nav{-->
        <!--display: inline-block;-->
    <!--}-->
    <!--.public-header .nav ul{-->
        <!--list-style-type: none;-->
    <!--}-->
    <!--.public-header .account{-->
        <!--position: absolute;-->
        <!--right: 20px;-->
        <!--top: 10px;-->
        <!--font-size: 0.7rem;-->
    <!--}-->
    <!--.public-header .account a{-->
        <!--color: #fff;-->
        <!--text-decoration: none;-->
        <!--margin-right: 10px;-->
    <!--}-->
    <!--.public-header .personal{-->
        <!--margin-right: 4px;-->
        <!--font-size: 0.9rem;-->
    <!--}-->
    <!--.public-header .write{-->
        <!--position: fixed;-->
        <!--right: 0rem;-->
        <!--top:10rem;-->
    <!--}-->
    <!--.public-header .write i{-->
        <!--color: #000;-->
        <!--font-size: 2rem;-->
    <!--}-->
    <!--.public-header .personal-nav{-->
        <!--width: 100%;-->
        <!--color: #000;-->
        <!--border: 1px solid #fff;-->
        <!--margin-top: 0.2rem;-->
    <!--}-->
    <!--.public-header .personal-nav li{-->
        <!--padding: 0.15rem 0px;-->
        <!--border-radius: 2rem;-->
        <!--text-align: center;-->
    <!--}-->
    <!--.public-header .personal-nav a{-->
        <!--margin-right: 0px;-->
    <!--}-->
<!--</style>-->
<!--<template>-->
    <!--<div class="public-header">-->
        <!--asdfsdaf-->

    <!--</div>-->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
        <!--data () {-->
            <!--return {-->
                <!--// note: changing this line won't causes changes-->
                <!--// with hot-reload because the reloaded component-->
                <!--// preserves its current state and we are modifying-->
                <!--// its initial state.-->
                <!--msg: 'Hello World!'-->
            <!--}-->
        <!--}-->
    <!--}-->

<!--//     $.ajax({-->
<!--//         type: "get",-->
<!--//         url: "http://123.249.54.19:8085",-->
<!--//         dataType: "json",-->
<!--//         success: function (json) {-->
<!--//             console.log(json)-->
<!--//         },-->
<!--//         error: function () {-->
<!--//             console.log('llaalal');-->
<!--//         }-->
<!--//     })-->

<!--</script>-->



<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>{{$route.params.id}}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                // note: changing this line won't causes changes
                // with hot-reload because the reloaded component
                // preserves its current state and we are modifying
                // its initial state.
                msg: 'Hello World!'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }
</style>


