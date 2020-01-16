<template>
  <app-feed :displaySection="decodeTitle(section)">
      <section-banner></section-banner>
  </app-feed>
</template>

<script>
import AppFeed from '../components/AppFeed'
import SectionBanner from '../components/section/SectionBanner'
import TitleEncoder from '../mixins/TitleEncoder'

export default {
    mixins: [TitleEncoder],
    components: {
        AppFeed,
        SectionBanner
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