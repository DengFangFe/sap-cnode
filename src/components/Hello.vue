<template>
  <div class="hello">
    <headerTitle v-bind:message="parentMsg"></headerTitle>
    <listSection v-bind:message="topicMsg" ref="childMethod"></listSection>
    <navBar v-on:listenToChildEvent="showMsgFromChild"></navBar>
    <backTop></backTop>
  </div>
</template>

<script>
import $ from 'webpack-zepto'
import navBar from '../components/nav.vue'
import headerTitle from '../components/header.vue'
import listSection from '../components/list.vue'
import backTop from '../components/backtop.vue'

export default {
  name: 'hello',
  components:{
    navBar,
    listSection,
    headerTitle,
    backTop,
  },
  data () {
    return {
      childWords:'',
      parentMsg:'',
      topicMsg:'',
      tab:'all',
    }
  },
  mounted:function(){
     debugger;
   
  },
  methods: {
    showMsgFromChild:function(msg){
      debugger;
      this.parentMsg = this.childWords = this.getTitle(msg).title;
      this.topicMsg = msg;
       var topicMenu = this.topicMsg || this.tab;
      this.$refs.childMethod.getTopics(topicMenu);
    },
    getTitle: function (val) {
          var obj = {};
          switch (val) {
            case 'ask':
              obj.title = "问答";
              obj.idx = 1;
              break;
            case 'share':
              obj.title = "分享";
              obj.idx = 2;
              break;
            case 'job':
              obj.title = "招聘";
              obj.idx = 3;
              break;
            case 'good':
              obj.title = "精华";
              obj.idx = 4;
              break;
            default:
              obj.title = "全部";
              obj.idx = 0;
              break;
          }
          return obj;
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
