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
          <!-- will be populated from state -->
    <feed-card :prominent='false'></feed-card>
    <feed-card :prominent='false'></feed-card>
    <feed-card :prominent='false'></feed-card>
    <feed-card :prominent='true'></feed-card>
    <feed-card :prominent='true'></feed-card>
  </v-row>
</v-container>
</template>

<script>
import FeedCard from './FeedCard'

export default {
    components: {
        FeedCard
    }
}
</script>