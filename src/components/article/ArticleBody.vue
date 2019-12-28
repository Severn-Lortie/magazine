<template>
  <v-row
  justify="center"
  class="mt-8"
  >
    <v-col
    cols="5"
    class="article-text grey--text text--darken-4"
    >  
       <vue-markdown/>
    </v-col>
  </v-row>
</template>

<script>
import VueMarkdown from 'vue-markdown';

export default {
  components: {
    VueMarkdown
  }
}
</script>

<style scoped>
.article-text {
    font-family: 'Droid Serif';
    font-size: 1.25rem;
}
</style>