import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    sectionMeta: {
      editorial: {
        subtitle: 'An introduction to the themes in this issue.'
      },
      news: {
        subtitle: "The Latest News With Philosophical Relevance"
      },
      articles: {
        subtitle: 'Privacy and philosophy.'
      },
      letters: {
        subtitle: 'Letters to the editor, from our loyal readers.'
      },
      review: {
        subtitle: 'A Look At Movies Through A Philosophical Lens.'
      },
      comics: {
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
  }
})