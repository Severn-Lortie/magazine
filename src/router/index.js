import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/article',
    name: 'article',
    component: Article
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
