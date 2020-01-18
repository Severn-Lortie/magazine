<template>
<v-dialog
    width="400"
    v-model="dialog"
>
    <template v-slot:activator="{ on }">
        <slot :on="on" />
    </template>

    <v-card>
        <v-card-title class="headline">
            Subscribe
        </v-card-title>
        <v-card-text class="">
            <p>Subscriptions to this magazine cost <i>$5</i> a month. Members will gain unlimited accsess to all articles.</p>
            <p class="pb-0">
                <b>Issue:</b> 42 (the <a href="https://en.wikipedia.org/wiki/Phrases_from_The_Hitchhiker%27s_Guide_to_the_Galaxy#Answer_to_the_Ultimate_Question_of_Life,_the_Universe,_and_Everything_(42)">answer to the ultimate question of life, the universe, and everything</a>)
                <br>
                <b>Published:</b> January 17th, 2020
            </p>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn
                text
                color="primary"
                @click="dialog = false"
            >
                ok
            </v-btn>
        </v-card-actions>
    </v-card>

</v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: false
        }
    }
}
</script>
