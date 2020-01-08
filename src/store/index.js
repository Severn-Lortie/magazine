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
        heroSrc: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        subtitle: 'Artifical intelligence and philosophy.'
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

    // Example state (for dev)
    articles: [{
        title: 'robots are creepy',
        subtitle: 'i hate the metal things',
        heroSrc: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        bodyText: 'Sunt veniam aliquip duis consectetur *reprehenderit* laboris fugiat quis consectetur nostrud consequat velit ea. Id aliqua aute excepteur nisi ipsum id dolor tempor deserunt officia velit nulla. Nisi ex minim culpa incididunt proident aliqua reprehenderit adipisicing deserunt.',
        section: 'articles',
        author: 'sevy l',
        likes: 0,
        date: 'date'
      },
      {
        title: 'movie review',
        subtitle: 'it was ok',
        heroSrc: 'https://source.unsplash.com/collection/1199299/',
        bodyText: 'Sunt  \n veniam aliquip duis consectetur reprehenderit laboris fugiat quis consectetur nostrud consequat velit ea. Id aliqua aute excepteur nisi ipsum id dolor tempor deserunt officia velit nulla. Nisi ex minim culpa incididunt proident aliqua reprehenderit adipisicing deserunt.',
        section: 'review',
        author: 'sevy l',
        likes: 0,
        date: 'date'
      },
      {
        title: 'the ethics of robots',
        subtitle: 'what is right and what is wrong',
        heroSrc: 'https://source.unsplash.com/collection/1199298/',
        bodyText: 'Sunt *veniam* aliquip ~~duis~~ consectetur reprehenderit laboris fugiat quis consectetur nostrud consequat velit ea. Id aliqua aute excepteur nisi ipsum id dolor tempor deserunt officia velit nulla. Nisi ex minim culpa incididunt proident aliqua reprehenderit adipisicing deserunt.',
        section: 'news',
        author: 'sevy l',
        likes: 0,
        date: 'date',
      },
      {
        banner: true,
        prominent: true,
        title: 'robot ad', // used as identifer
        heroSrc: 'https://source.unsplash.com/random'
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