<template>
  <app-feed :displaySection="decodeTitle(section)">

      <base-card class="text-capitalize mb-6" color="grey lighten-5">
        <h3 class="display-3 font-weight-bold mb-2">{{decodeTitle(section)}}</h3>
        <div class="headline grey--text text--darken-2">{{sectionMeta.subtitle}}</div>
      </base-card>

      <!-- 
      <app-banner
      :title="decodeTitle(section)"
      :subtitle="sectionMeta.subtitle"
      :heroSrc="sectionMeta.heroSrc"
      :main="false"
      />
      -->
  </app-feed>
</template>

<script>
import AppFeed from '../components/AppFeed'
//import AppBanner from '../components/home/AppBanner'
import BaseCard from '../components/base/BaseCard'
import TitleEncoder from '../mixins/TitleEncoder'

export default {
    mixins: [TitleEncoder],
    components: {
        AppFeed,
        BaseCard
        //AppBanner
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