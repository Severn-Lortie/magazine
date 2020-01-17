import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import Section from '../views/Section.vue'
import Sources from '../views/Sources.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/article/:title',
    name: 'article',
    component: Article
  },
  {
    path: '/section/:section',
    name: 'section',
    component: Section
  },
  {
    path: '/sources',
    name: 'sources',
    component: Sources
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
