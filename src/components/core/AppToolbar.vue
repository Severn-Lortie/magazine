<template>
  <v-app-bar
        app
        flat
        color="grey lighten-3"
    >
        <v-container class="mx-auto py-0">
            <v-row align="center">
                <v-icon
                    class="mr-6"
                    color="accent"
                >
                    mdi-laptop
                </v-icon>
                <v-btn v-for="(link, i) in links" 
                text 
                :key="i"
                class="ml-0">
                {{link}}
                </v-btn>
                <v-spacer />
                <v-text-field
                    append-icon="mdi-magnify"
                    flat
                    hide-details
                    solo-inverted
                    style="max-width: 300px"
                ></v-text-field>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            links: [
                'reviews',
                'news',
                'opinion',
                'editors note',
            ]
        }
    }
}
</script>