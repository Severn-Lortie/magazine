<template>
<v-col cols='12'>
 <base-card>
        <v-img :src="heroSrc" height="350">
        </v-img>
    </base-card>
</v-col>
   
</template>

<script>
import BaseCard from './base/BaseCard'

export default {
    props: {
        heroSrc: String
    },
    components: {
        BaseCard
    }
}
</script>
