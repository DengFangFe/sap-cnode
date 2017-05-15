<template>
	<section class="topic-detail">
		<div class="topic-box" v-if="topic.title">
      <div class="topic-title">{{topic.title}}</div>
      <div class="author-box">
        <div class="author-avatar">
          <img :src="topic.author && topic.author.avatar_url" alt="">
        </div>
        <div class="author-desc">
          <p class="author-name"></p>
          <p class="author-ctime" v-if="topic.create_at">发布于：{{topic.create_at | getFreeTime}}</p>
        </div>
        <div class="author-view" v-if="topic.visit_count">{{topic.visit_count}}次浏览</div>
      </div>
      <div class="topic-content markdown-body" v-html="topic.content"></div>
      <div class="topic-reply-count" v-if="topic.reply_count"><b>{{topic.reply_count}}</b>条回复</div>
      <div class="topic-reply">
        <ul class="reply-list">
          <li v-for="reply in topic.replies">
            <div class="reply-info">
              <div class="reply-avatar">
                <img :src="reply.author.avatar_url" alt="">
              </div>
              <div class="reply-desc">
                <p class="clearfix">{{reply.author.loginname}} 发布于：{{reply.create_at | getFreeTime}}<span class="fr"><i class="iconfont icon-zan"></i>{{reply.ups.length}}</span></p>
              </div>
            </div>
            <div class="reply-content" v-html="reply.content"></div>
          </li>
        </ul>
      </div>
    </div>
	</section>
</template>
<script>
	import $ from 'webpack-zepto';
	export default {
	  name:"topic",
	  filters: {
	  	 getFreeTime: function (time) {
	        var timestamp = +new Date(time)
	        return formatTime(timestamp, "yyyy.MM.dd");
	        function formatTime(time, format) {
	          var t = new Date(time);
	          var tf = function (i) {
	            return ( i < 10 ? '0' : '') + i
	          };
	          return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
	            switch (a) {
	              case 'yyyy':
	                return tf(t.getFullYear());
	                break;
	              case 'MM':
	                return tf(t.getMonth() + 1);
	                break;
	              case 'mm':
	                return tf(t.getMinutes());
	                break;
	              case 'dd':
	                return tf(t.getDate());
	                break;
	              case 'HH':
	                return tf(t.getHours());
	                break;
	              case 'ss':
	                return tf(t.getSeconds());
	                break;
	            }
	          })
	        }
	      }
	  },
	  data(){
	  	 return{
	  	 	topic:{},
	  	 	topicId:'',
	  	 }
	  },
	  mounted: function(){
	  	debugger;
	  	this.topicId = this.$route.params.id;
	  	 $.get('http://cnodejs.org/api/v1/topic/' + this.topicId,(res) => {
	  	 	 if(res && res.data){
	  	 	 	this.topic = res.data;
	  	 	 	 console.log(this.topic);
                 console.log(this.topic.author.avatar_url);
	  	 	 }
	  	 });
	  },
	}
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss">
   @import "../assets/css/common/_variable.scss";

	.topic-detail {
    position: relative;
    width: 100%;
    .topic-box { padding-top: 44px; background-color: $white; line-height: 1.5;
      .topic-title { margin: 15px; padding: 10px; border-bottom: solid 1px $border; font-size: 18px; font-weight: bolder;}
      .author-box { padding: 0 15px; display: flex;
        .author-avatar { width: 40px; height: 40px; margin-right: 10px; overflow: hidden; border-radius: 50%;}
      }
      .topic-content { padding: 15px; margin-top: 15px; border-bottom: solid 1px $border;}
      .topic-reply-count {  padding: 15px;
        b { color: $green; border-bottom: solid 1px $border;}
      }
      .topic-reply {
        .reply-list { width: 100%;
          li { border-bottom: solid 1px $border; padding: 10px 15px;
            .reply-info { display: flex;
              .reply-avatar { width: 40px; height: 40px; overflow: hidden; border-radius: 5px; margin-right: 10px;}
              .reply-desc { flex: 1; width: 0;}
            }
          }
        }
      }
    }
  }
</style>