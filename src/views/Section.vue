<template>
  <app-feed :displaySection="decodeTitle(section)"/>
</template>

<script>
import AppFeed from '../components/AppFeed'
import TitleEncoder from '../mixins/TitleEncoder'

export default {
    mixins: [TitleEncoder],
    components: {
        AppFeed
    },
    computed: {
        section() {
            return this.$route.params.section;
        }
    }
}
</script>

<style>

</style>