<template>
<v-app-bar
    app
    flat
    color="grey lighten-3"
>
    <app-nav>
        <template scope="defaultScope">
             <v-btn
             @click="toggleDrawer(defaultScope)"
             >
             nav
             </v-btn>
        </template>
    </app-nav>
    <v-container class="mx-auto py-0">
        <v-row align="center">
            <v-avatar class="mr-6">
                <v-img :src="require('../../assets/logo.png')"></v-img>
            </v-avatar>
            <v-btn
                v-for="(link, i) in links"
                text
                :key="i"
                class="ml-0"
            >
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
import AppNav from'./AppNav'

export default {
    components: {
        AppNav
    },
    methods: {
        toggleDrawer(defaultScope) {
            defaultScope.activated = !defaultScope.activated;
            console.log(defaultScope.activated) //eslint-disable-line
        }
    },
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
