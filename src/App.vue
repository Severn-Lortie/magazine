<template>
<v-app>
    <app-toolbar />
    <v-content>
        <router-view />
    </v-content>
</v-app>
</template>

<script>
import AppToolbar from './components/core/AppToolbar'

export default {
    components: {
        AppToolbar
    }
}
</script>
