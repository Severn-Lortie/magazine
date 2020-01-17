<template>
<base-card
    class="text-capitalize mb-6"
    color="grey lighten-5"
>
    <h3 class="display-3 font-weight-bold mb-2">{{ title }}</h3>
    <div class="headline grey--text text--darken-2">{{ subtitle }}</div>
</base-card>
</template>

<script>
import BaseCard from '../base/BaseCard'

export default {
    props: {
        title: String,
        subtitle: String
    },
    components: {
        BaseCard
    }
}
</script>
