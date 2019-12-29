import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,

    // Example state (for dev)
    articles: [
      {
        title: 'robots are creepy',
        heroSrc: 'https://source.unsplash.com/collection/1199299/',
        bodyText: 'Sunt veniam aliquip duis consectetur reprehenderit laboris fugiat quis consectetur nostrud consequat velit ea. Id aliqua aute excepteur nisi ipsum id dolor tempor deserunt officia velit nulla. Nisi ex minim culpa incididunt proident aliqua reprehenderit adipisicing deserunt.',
        section: 'opinion',
        author: 'sevy l',
        likes: 0,
        date: 'date',
        prominent: true
      },
      {
        title: 'movie review',
        heroSrc: 'https://source.unsplash.com/collection/1199299/',
        bodyText: 'Sunt veniam aliquip duis consectetur reprehenderit laboris fugiat quis consectetur nostrud consequat velit ea. Id aliqua aute excepteur nisi ipsum id dolor tempor deserunt officia velit nulla. Nisi ex minim culpa incididunt proident aliqua reprehenderit adipisicing deserunt.',
        section: 'review',
        author: 'sevy l',
        likes: 0,
        date: 'date',
        prominent: true
      }
    ]

  },

  mutations: {
    setDrawer(state, val) {
      state.drawer = val;
    }
  },
  getters: {
    uniqueArticleSections(state) {
      // get all the categories in the state from each object;
      const links = state.articles.map(obj => obj.section);
      return [...new Set(links)]; // return without dupes.
    }
  },
  actions: {},
  modules: {}
})