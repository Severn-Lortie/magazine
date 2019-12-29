<template>
  <app-feed :displaySection="decodeTitle(section)">
      <app-banner
      :title="decodeTitle(section)"
      :subtitle="sectionMeta.subtitle"
      :heroSrc="sectionMeta.heroSrc"
      />
  </app-feed>
</template>

<script>
import AppFeed from '../components/AppFeed'
import AppBanner from '../components/home/AppBanner'

import TitleEncoder from '../mixins/TitleEncoder'

export default {
    mixins: [TitleEncoder],
    components: {
        AppFeed,
        AppBanner
    },
    computed: {
        section() {
            return this.$route.params.section;
        },
        sectionMeta() {
            return this.$store.state.sectionMeta[this.section];
        }
    }
}
</script>

<style>

</style>