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
    components: {
        FeedCard
    },
    computed: {
        articles() {
            return this.$store.state.articles;
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