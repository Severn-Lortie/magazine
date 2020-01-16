import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    sectionMeta: {
      editorial: {
        heroSrc: 'https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        subtitle: 'An introduction to the themes in this issue.'
      },
      news: {
        heroSrc: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
        subtitle: "The latest news with philisophical relavence."
      },
      articles: {
        heroSrc: 'https://images.unsplash.com/photo-1439724017695-a10fb6a7c6e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1468&q=80',
        subtitle: 'Privacy and philosophy.'
      },
      letters: {
        heroSrc: 'https://images.unsplash.com/photo-1557568192-2fafc8b5bdc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        subtitle: 'Letters to the editor, from our loyal readers.'
      },
      review: {
        heroSrc: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
        subtitle: 'A look at the movie HER through a philisophical lens.'
      },
      comics: {
        heroSrc: 'https://images.unsplash.com/photo-1515222410484-613a51c43721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        subtitle: 'Have a laugh.'
      }
    },

    // require the articles from external json DATA file
    articles: require('../data/articles.json').array

  },

  mutations: {
    setDrawer(state, val) {
      state.drawer = val;
    }
  },
  getters: {
    uniqueArticleSections(state) {
      // get all the categories in the state from each object;
      let links = [];
      state.articles.forEach((article) => {
        const section = article.section;
        if (section) {
          links.push(section);
        }
      })
      return [...new Set(links)]; // return without dupes.
    }
  },
  actions: {},
  modules: {}
})