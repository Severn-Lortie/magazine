<template>
<v-app-bar
    app
    flat
    color="grey lighten-4"
>
    <v-app-bar-nav-icon
        @click="$store.commit('setDrawer', true)"
        v-if="$vuetify.breakpoint.mdAndDown"
    >
    </v-app-bar-nav-icon>
    <v-container class="mx-auto py-0">
        <v-row
            align="center"
            class="pl-3 pr-3"
        >
            <router-link to="/" v-if="!$vuetify.breakpoint.xs">
                <v-avatar class="mr-4">
                    <v-img :src="require('@/assets/img/logo.png')"></v-img>
                </v-avatar>
            </router-link>
            <div v-if="$vuetify.breakpoint.mdAndUp">
                <v-btn
                    text
                    class="ml-0"
                    to="/"
                >
                    Home
                </v-btn>
                <v-btn
                    v-for="(link, i) in mainLinks"
                    text
                    :key="i"
                    class="ml-0"
                    :to="`/section/${link}`"
                >
                    {{link}}
                </v-btn>
            </div>
            <v-spacer></v-spacer>
            <v-text-field
                append-icon="mdi-magnify"
                flat
                hide-details
                solo-inverted
                style="max-width: 300px"
                v-if="!$vuetify.breakpoint.md"
            ></v-text-field>
        </v-row>
    </v-container>
</v-app-bar>
</template>

<script>
export default {
    computed: {
        mainLinks() {
            return (this.$store.getters.uniqueArticleSections);
        }
    }
}
</script>
