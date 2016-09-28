<template>
    
</template>

<script>
    import CommonJs from '../assets/common.js'

    import $ from 'jquery'
    import Vue from 'vue'
    export default {
        data () {
            return {
                is_login:''
            }
        },
        created:function(){
            alert('sadf');
            
        },
        methods:{

            publishCommentInteract:function (index) {

                //jquery操作dom
                $('.item').eq(index).find(".reply-interact").toggle();

            },

        }
    }

</script>


















<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>