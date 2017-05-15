<template>
	<section class="content-box">
		<div class="about-box">
			  <div class="about-title">关于项目</div>
		      <div class="about-desc">一个CNode社区webapp版。采用vue&vue-router重写，使用webpack打包，调用Cnode API。</div>
		      <div class="about-title">源码地址</div>
		      <div class="about-desc"><a href="https://github.com/MarryDy/sap-cnode">https://github.com/MarryDy/sap-cnode</a></div>
		      <div class="about-title">意见反馈</div>
		      <div class="about-desc"><a href="https://github.com/MarryDy/sap-cnode/issues">交流反馈区</a></div>
		      <div class="about-title">最后</div>
		      <div class="about-desc">欢迎Github或者博客交流</div>
		</div>
	</section>
</template>
<style rel="stylesheet/scss" type="text/css" lang="scss" scoped>
 @import "../assets/css/common/_variable.scss";
 .content-box {
    position: relative;
    width: 100%;
	.about-box {
      padding: 64px 15px 20px;
      .about-title { font-size: 16px; color: $black; line-height: 1.5; padding: 10px 0; font-weight: bolder;}
      .about-desc { font-size: 14px; border-bottom: solid 1px $border; line-height: 1.5; padding-bottom: 10px;
        a { color: $green;}
      }
    }
}
</style>