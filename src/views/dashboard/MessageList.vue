<template>
    <div >
        <ul class="messageList">
            <li v-for="message in messages">
                <span><img :src="message.header" /></span>
                <span class="message_name">{{message.name}}</span>
                <span class="ms-content">{{message.content}}</span>
            </li>

        </ul>

    </div>
</template>

<script>
    export default {
        components:{

        },
         data() {
            return {

                messages:[
                    {header:'../../../static/images/user.png',name:'王利超',content:'QConf的共享内存异常，请重启。',time:'3'},
                    {header:'../../../static/images/user.png',name:'戚磊',content:'zyagent升级成功了。',time:'15'},
                    {header:'../../../static/images/user.png',name:'白江涛',content:'warship新版本上线了。',time:'18'},
                ]
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

    .messageList{
        list-style:none;
    }
    .messageList li{
        clear:both;
        border-bottom:1px solid #ccc;
        padding:10px;
        height:auto;
        overflow:hidden;
        cursor:pointer;
    }
    .messageList span{
        display:block;
        float:left;
        margin-right:5px;
        height:auto;
    }
    .messageList img{
        transition:all 0.5s;
        -moz-transition:all 0.5s;
        -o-transition:all 0.5s;
        -ms-transition:all 0.5s;
        -webkit-transition:all 0.5s;
        width:50px;
        border-radius:50%;
    }
    .messageList li:hover img{

        width:55px;

    }
    .messageList .ms-content{
        width:70%;
        font-size:12px;
        margin-top:6px;
    }
    .messageList .message_name{
        color:#4cb1a7;
    }


</style>
