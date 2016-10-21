
<template>

    <div class="post-publish">
        <div class="editor">
            <form action="">
                <div class="title">
                    <p>发表帖子</p>
                    <input type="text" name="title"/><select name="tag_id" id="tag">

                    {foreach $tag_arr as $t}

                    <option value="{$t['id']}">{$t['tag']}</option>

                    {/foreach}

                </select>
                </div>
                <div class="content">
                    <textarea id="" cols="30" rows="20" name="content"></textarea>
                </div>
                <a href="javascript:void(0)" class="publish" id="publish">发布</a>
            </form>

        </div>
    </div>

</template>


<script type="text/javascript">
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
        created:function() {
            var $this = this;
        },
        methods:{



        }
    }
</script>


<style>


    /*发布帖子*/
    .post-publish{
        width: 70%;
        margin: 0 auto;
    }
    .post-publish .editor{
        width: 60%;
        margin-top: 1rem;
    }
    .post-publish .editor .title p{
        border-left: 3px solid #9ac600;
        height: 20px;
        line-height: 20px;
        font-size: 0.9rem;
        padding-left: 0.5rem;
    }
    .post-publish .title input{
        margin-top: 1rem;
        width: 68%;
        padding: 0.3rem 0rem;
        display: inline-block;
    }
    .post-publish select{
        margin-top: 1rem;
        width: 30%;
        padding: 0.3rem 0rem;
        display: inline-block;
        margin-left:2%;
    }

    .post-publish .content textarea{
        width: 100%;
        margin-top: 1rem;
    }


</style>