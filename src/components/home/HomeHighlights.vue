<template>
<base-card color="transparent">
    <v-list
        dark
        color="transparent"
    >
        <v-list-item
            v-for="(item) in items"
            :key="item.title"
        >
            <v-list-item-content>

                <v-list-item-title
                    class="headline"
                    v-text="item.title"
                />

                <v-list-item-subtitle
                    class="font-weight-bold"
                    v-text="item.subtitle"
                />

            </v-list-item-content>

        </v-list-item>
    </v-list>
</base-card>
</template>

<script>
import BaseCard from '../base/BaseCard'

export default {
    data() {
        return {
            items: [{
                    title: '10 Reasons',
                    subtitle: 'A.I. will replace you!',
                },
                {
                    title: '5 Reasons',
                    subtitle: 'A.I. will replace you!',
                }
            ]
        }
    },
    components: {
        BaseCard
    }
}
</script>

