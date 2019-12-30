<template>
<v-col
    xs='12'
    :md='prominentSize'
>
    <base-card
        height="350"
        dark
    >
        <!-- will be localized -->
        <v-img
            :src='articleMeta.heroSrc'
            height="100%"
        >
            <v-container
                fluid
                class="fill-height"
                v-if="!articleMeta.banner"
            >
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
                            class="mb-1 text-uppercase"
                            small
                            :to="`/section/${encodeTitle(articleMeta.section)}`"
                        >
                            {{articleMeta.section}}
                        </v-chip>
                        <h3 class="title font-weight-bold text-capitalize white--text mb-2">
                            {{articleMeta.title}}
                        </h3>
                        <div class="white--text text-capitalize">
                            {{articleMeta.author}} <br>
                            {{articleMeta.date}}
                        </div>
                    </v-col>
                    <v-col
                        class="text-right pb-0 pr-0"
                        align-self="end"
                    >
                        <base-chip
                            text="Read More"
                            small
                            color="primary"
                            :to="`/article/${encodeTitle(articleMeta.title)}`"
                        />
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
    </base-card>
</v-col>
</template>

<script>
import BaseCard from './base/BaseCard'
import BaseChip from './base/BaseChip'

import TitleEncoder from '../mixins/TitleEncoder'

export default {
    mixins: [TitleEncoder],
    props: {
        prominent: Boolean,
        articleMeta: Object
    },
    computed: {
        prominentSize() {
            if (this.articleMeta.banner) {
                return '12';
            } else {
                return this.prominent ? 6 : 4;
            }
        }
    },
    components: {
        BaseCard,
        BaseChip
    }
}
</script>
