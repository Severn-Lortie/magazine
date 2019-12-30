<template>
    <v-row justify="center">
        <v-col sm="6">
            <base-chip 
            :text="section" 
            color="grey lighten-3"
            class="mt-6" 
            :to="`/section/${encodeTitle(section)}`"/>
            <p class="text-capitalize headline-title mb-0">{{ title }}</p>
            <p class="headline grey--text text--darken-2 mt-1 mb-12 text-capitalize">{{subtitle}}</p>
            <v-img :src="heroSrc">
            </v-img>
        </v-col>
    </v-row>
</template>

<script>
import BaseChip from '../base/BaseChip'
import TitleEncoder from '../../mixins/TitleEncoder'

export default {
    mixins: [TitleEncoder],
    components: {
        BaseChip
    },
    props: {
        title: String,
        section: String,
        heroSrc: String,
        subtitle: String
    }
}
</script>

<style scoped>
.headline-title {
    font-family: 'Droid Serif';
    font-size: 40px;
}
</style>
