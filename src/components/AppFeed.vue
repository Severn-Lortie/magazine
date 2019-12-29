<template>
<v-container class="mx-auto px-0">
    <v-row
    align="start"
    justify="start"
    class="mx-0"
    >
      <v-col cols="12">
          <!-- banner -->
          <slot />
      </v-col>
          
    <!-- feed cards are populated from the state -->
    <feed-card 
    v-for="article in articles" 
    :articleMeta="getArticleMeta(article)"
    :prominent="article.prominent"
    :key="article.title"
    />

  </v-row>
</v-container>
</template>

<script>
import FeedCard from './FeedCard'

export default {
    props: {
        displaySection: {
            type: String,
            default: 'all'
        }
    },
    components: {
        FeedCard
    },
    computed: {
        articles() {
            // return the section based on the displaySection prop, or all sections.
            if (this.displaySection !== 'all') {
                return this.$store.state.articles.filter(obj => obj.section === this.displaySection);
            } else {
                return this.$store.state.articles;
            }
            
        }
    },
    methods: {
        getArticleMeta(article) {
            return {
                title: article.title,
                heroSrc: article.heroSrc,
                section: article.section,
                author: article.author,
                likes: article.likes,
                date: article.date
            }
        }
    }
}
</script>