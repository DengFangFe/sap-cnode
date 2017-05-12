<template>
	<div class="backtop" v-show="show" @click="backTop">
		<span>{{title}}</span>
	</div>
</template>
<script>
	import $ from  'webpack-zepto'
	export default {
		name:'backTop',
		data() {
			return {
				show:false,
				title:'Top',
			}
		},
		mounted:function(){
			var self = this;
			$(window).on('scroll',function(){
				if($(window).scrollTop() > 100){
					self.show = true;
				}else{
				    self.show = false;
				}
			});
		},
		methods:{
			backTop:function(){
				$(window).scrollTop(0);
				this.show = false;
			}
		}
	}
</script>
<style rel="stylesheet/scss" type="text/css" lang="scss" scoped>
  .backtop { 
  	position: fixed; 
  	right: 20px; 
  	bottom: 60px;
  	width: 36px;
  	height: 36px; 
  	border-radius:50%;
  	line-height:36px;
  	color:#ffffff;
  	background-color: #42b983;
    .icon-backtop {
    	font-size: 36px; 
    	line-height: 36px; 
    	text-align: center;
    	width:80px;
    	height:80px;
    	border-radius:50%;
    	display:inline-block;
    	color: #80bd01;
    	background-color:#42b983;
    }
  }
</style>