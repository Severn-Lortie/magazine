<template>
  <v-container class="mx-auto px-0">
      <v-row>
          <v-col cols="12" align="start" justify="start" class="mx-0">
            <vue-markdown :source="worksCited.fullText" />
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
    data() {
        return {
            worksCited: require('../data/worksCited.json')
        }
    },
    components: {
        VueMarkdown
    }
}
</script>

<style>

</style>