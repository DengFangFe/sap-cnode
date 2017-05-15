<template>
	<div id="pageLoader" v-show="show"><img src="../assets/img/preLoad.gif" alt=""></div>
</template>
<script>
	export default {
		name:'preLoader',
		data() {
			return{
				show:true
			}
		},
		mounted:function(){
			setTimeout(() =>{
				this.$router.push({
					name:'all'
				});
				this.show = false;
			},200)
		},
	}
</script>
<style rel="stylesheet/scss" type="text/css"  lang="scss">
  #pageLoader { position: fixed; left: 50%; top: 50%; transform: translate(-50%,-50%) translateZ(0); width: 160px; height: 20px;}
</style>
