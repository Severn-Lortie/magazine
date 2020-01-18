<template>
<base-card color="transparent">
    <v-list
        dark
        color="transparent"
    >
        <v-list-item
            v-for="(item) in items"
            :key="item.title"
            class="pr-0"
        >
            <v-list-item-content class="pt-0">

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
                    title: '🦸‍♂️ The Ethics of Whistleblowing',
                    subtitle: "Exploring Edward Snowden's Morals",
                },
                {
                    title: '😨 Your Body is not You',
                    subtitle: 'But new tech says otherwise...',
                }
            ]
        }
    },
    components: {
        BaseCard
    }
}
</script>

