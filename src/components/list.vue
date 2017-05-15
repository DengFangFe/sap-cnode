<template>
	<section class="topic-body">
		<div class="topic-box">
			<ul class="topic-list">
				<li v-for = "topic in topics">
					<router-link :to="{name:'topic',params:{id:topic.id}}" :data-id="topic.id">
						<div class="topic-title">{{topic.title}}</div>
						<div class="topic-content">
							<div class="topic-avatar">
								<img class="avatar" :src="topic.author.avatar_url" alt="">
							</div>
							<div class="topic-info">
								<p>
									<span class="topic-author">{{topic.author.loginname}}</span>
									<span class="topic-total"><b>{{topic.reply_count}}</b>/{{topic.visit_count}}</span>
								</p>
								<p>
									<span class="topic-ctime">Post:{{topic.create_at | getFreeTime}}</span>
									<span class="topic-rtime">Reply:{{topic.last_reply_at | getFreeTime}}</span>
								</p>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</section>
</template>
<script>
	import $ from 'webpack-zepto';
	export default {
		name:"list",
		props:["message"],
		filters: {
			getFreeTime:function(time){
				var timestamp = +new Date(time);
				return formatTime(timestamp,"yyyy.MM.dd");
				function formatTime(time,format){
					var t = new Date(time);
					var tf = function(i){
						return (i < 10 ? '0' : '') + i;
					};

					return format.replace(/yyyy|MM|dd|HH|mm|ss/g,function(a){
						switch(a){
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
		data() {
			return {
				SCROLL_LOCK: false,
				topics:[],
				params:{
					page:1,
					limit:20,
					tab:'all',
					mdrender:true
				}
			}
		},
		mounted:function(){
			var self = this;
			self.params.tab = self.message || self.params.tab;
			console.log("1",self.params.tab);
			this.getTopics();
			//滚动
			$(window).on('scroll',function(){
				self.getScrollData();
			})
		},
		methods:{
			getTopics:function(data){
				var self = this;
				self.params.tab = data;
				$.get("https://cnodejs.org/api/v1/topics",self.params,function(res){
					if(res && res.data){
						debugger;
						self.SCROLL_LOCK = true;
						self.topics = res.data;
						console.log("1",self.topics);
					}
				})
			},
			getScrollData:function(){
				if(this.SCROLL_LOCK){
					var totalheight = $(window).height() + $(window).scrollTop();
					if($(document).height() <= totalheight + 200){
						this.SCROLL_LOCK = false;
						this.params.limit += 20;
						this.getTopics();
					}
				}
			},
		},
	}
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss" scoped="">
    @import "../assets/css/common/_variable.scss";
	.topic-body{
		height:calc(100% - 160px);
		height:-webkit-calc(100% - 160px);
		height:-moz-calc(100% - 160px);
		width:100%;
		margin-top:50px;
		margin-bottom:50px;
		position:relative;
		.topic-box{
			background-color:#ffffff;
			.topic-list {
				li {
					border-bottom:1px solid #dddddd;
					a {
						padding:10px 15px;
						display:block;
						text-decoration:none;
						.topic-title{
							color:#000000;
							font-size:14px;
							font-weight:bolder;
							line-height:24px;
							height:24px;
							text-overflow:ellipsis;
							overflow:hidden;
							white-space:nowrap;
							text-align:left;

						}
					.topic-content{
						display:flex;
						padding-top:5px;
						.topic-avatar {
							width:40px;
							height:40px;
							margin-right:10px;
							border-radius:50%;
							overflow:hidden;
							img{
								width:40px;
								height:40px;
							}
						}
						.topic-info {
							flex:1;
							width:0;
							p{
								display:flex;
								padding:6px 0;
								span:first-child {
									flex:1;
									width:0;
									text-align:left;
								}
								span:last-child{
									text-align:right;
								}
								.topic-author{
									color:#666666
								}
								.top-total{
									color:#666666;
									b{
										color:$green;
									}
								}
								.topc-ctime{
									color:#999999;
								}
								.topic-rtime{
									color:#999999;
								}
							}
						}
					  }
					}
				}

			}
		}

	}
</style>