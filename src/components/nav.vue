<template>
   <nav class="footer">
      <div class="menu-list">
        <router-link :to="{name:'all',query:{tab:'all'}}"  @click.native="sendMsgToParent">全部</router-link>
        <router-link :to="{name:'all',query:{tab:'ask'}}"  @click.native="sendMsgToParent">问答</router-link>
        <router-link :to="{name:'all',query:{tab:'share'}}" @click.native="sendMsgToParent">分享</router-link>
        <router-link :to="{name:'all',query:{tab:'good'}}" @click.native="sendMsgToParent">精华</router-link>
        <router-link :to="{name:'all',query:{tab:'job'}}" @click.native="sendMsgToParent">招聘</router-link>
      </div>
   </nav>
</template>
<script>
  import $ from 'webpack-zepto';
  export default{
    name:"all",
    props:["message"],
    data(){
      return{
        SCROLL_LOCK:false,
        params:{
          tab:'all',
        }
      }
    },
    mounted:function () {
      if(this.$route.query && this.$route.query.tab){
          this.params.tab = this.$route.query.tab;
          console.log("mounted",this.params.tab);
          // $(".menu-list a").eq(this.getTitle(this.$route.query.tab).idx).addClass("active").siblings("a").removeClass("active");
      }else{
          // $(".menu-list a").eq(0).addClass("active").siblings("a").removeClass("active");
      }
    },
    methods: {
      sendMsgToParent:function(e){
         this.$emit('listenToChildEvent',this.$route.query.tab);
         console.log("event",this.$route.query.tab);
      },
    },
    watch:{
      $route:function(to,form){
         if(to.query && to.query.tab){
            this.params.tab = to.query.tab;
            console.log("route",this.params.tab);
             // $(".menu-list a").eq(this.getTitle(to.query.tab).idx).addClass("active").siblings("a").removeClass("active");
         }else{
            // $(".menu-list a").eq(0).addClass("active").siblings("a").removeClass("active");
         }
      }
    }
  }
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss" scoped>
    @import "../assets/css/variable.scss";

    .footer {
      position:fixed;
      left:0;
      bottom:0px;
      width:100%;
      height:50px;
      background-color:#ffffff;
      overflow:hidden;
      .menu-list {
         width:100%;
         height:100%;
         border-top: 1px solid #dddddd;
         a {
            display:inline-block;
            height:100%;
            width:19%;
            line-height:50px;
            font-size:13px;
            text-align:center;
            text-decoration:none;
         }
         a.active {
            color:$green;
         }

      }

    }
</style>
