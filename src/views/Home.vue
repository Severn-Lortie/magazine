<template>
<div>
  <app-feed>
    <app-banner />
  </app-feed> 
</div>
</template>

<script>
import AppFeed from '../components/AppFeed'
import AppBanner from '../components/home/AppBanner'

export default {
  components: {
    AppFeed,
    AppBanner
  }
}
</script>