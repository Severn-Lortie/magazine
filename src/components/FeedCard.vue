<template>
<v-col
    xs='12'
    md='6'
>
    <!-- size will be based on prominent property -->
    <base-card height="350" dark>
        <v-img
            src='https://source.unsplash.com/collection/1199299/'
            height="100%"
        >
            <v-container fluid class="fill-height">
                <v-row
                class="text-right mx-0"
                style="height: 100%;"
                >
                    <v-col
                        cols='12'
                        class='pt-0 mt-1 pr-0'
                    >
                        <v-chip
                            label
                            color="secondary"
                            class="mb-1"
                            small
                        >
                            REVIEW
                        </v-chip>
                        <h3 class="title font-weight-bold text-capitalize white--text mb-2">
                            The review
                        </h3>
                        <div class="white--text">
                            Sevy L <br>
                            Date
                        </div>
                    </v-col>
                    <v-col class="text-right pb-0 pr-0" align-self="end">
                        <v-chip
                            small
                            label
                            color="primary"
                            @click.stop=""
                            class="text-uppercase"
                        >
                            Read More
                        </v-chip>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
    </base-card>
</v-col>
</template>

<script>
import BaseCard from './base/BaseCard'

export default {
    components: {
        BaseCard
    }
}
</script>

<style>

</style>
