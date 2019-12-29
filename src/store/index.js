import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,

    sectionMeta: {
      opinion: {
        heroSrc:'https://images.unsplash.com/photo-1485282826741-1b5d56f7e268?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        subtitle: 'The hottest of takes.'
      },
      review: {
        heroSrc: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
        subtitle: "Deciding what is good and what is bad."
      } 
    },

    // Example state (for dev)
    articles: [{
        title: 'robots are creepy',
        subtitle: 'i hate the metal things',
        heroSrc: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        bodyText: 'Sunt veniam aliquip duis consectetur *reprehenderit* laboris fugiat quis consectetur nostrud consequat velit ea. Id aliqua aute excepteur nisi ipsum id dolor tempor deserunt officia velit nulla. Nisi ex minim culpa incididunt proident aliqua reprehenderit adipisicing deserunt.',
        section: 'opinion',
        author: 'sevy l',
        likes: 0,
        date: 'date',
        prominent: false
      },
      {
        title: 'movie review',
        subtitle: 'it was ok',
        heroSrc: 'https://source.unsplash.com/collection/1199299/',
        bodyText: 'Sunt  \n veniam aliquip duis consectetur reprehenderit laboris fugiat quis consectetur nostrud consequat velit ea. Id aliqua aute excepteur nisi ipsum id dolor tempor deserunt officia velit nulla. Nisi ex minim culpa incididunt proident aliqua reprehenderit adipisicing deserunt.',
        section: 'review',
        author: 'sevy l',
        likes: 0,
        date: 'date',
        prominent: false
      },
      {
        title: 'the ethics of robots',
        subtitle: 'what is right and what is wrong',
        heroSrc: 'https://source.unsplash.com/collection/1199299/',
        bodyText: 'Sunt *veniam* aliquip ~~duis~~ consectetur reprehenderit laboris fugiat quis consectetur nostrud consequat velit ea. Id aliqua aute excepteur nisi ipsum id dolor tempor deserunt officia velit nulla. Nisi ex minim culpa incididunt proident aliqua reprehenderit adipisicing deserunt.',
        section: 'opinion',
        author: 'sevy l',
        likes: 0,
        date: 'date',
        prominent: false
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