<template>
  <v-row
  justify="center"
  class="mt-6"
  >
    <v-col
    sm="6"
    class="article-text grey--text text--darken-4"
    >  
       <vue-markdown :source="bodyText"/>
    </v-col>
  </v-row>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  components: {
    VueMarkdown
  },
  props: {
    bodyText: String
  }
}
</script>

<style scoped>
.article-text {
    font-family: 'Droid Serif';
    font-size: 1.25rem;
}
</style>