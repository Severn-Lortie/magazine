<template>
<v-app>
    <app-nav/>
    <app-toolbar />
    <v-content>
        <router-view />
    </v-content>
</v-app>
</template>

<script>
import AppNav from './components/core/AppNav'
import AppToolbar from './components/core/AppToolbar'

export default {
    components: {
        AppToolbar,
        AppNav
    }
}
</script>
