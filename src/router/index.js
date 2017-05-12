import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import vuebar from '@/components/nav.vue'
import topic from '@/components/list.vue'
Vue.use(Router)

export default [
  {
    path: "/",
    name: "all",
    component: Hello
  },
  {
  	path: "/topic/:id",
    name: "topic",
    component: topic
  }
];