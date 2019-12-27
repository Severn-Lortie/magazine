<template>
<div>
    <!-- button slot -->
    <slot />

    <v-navigation-drawer
        absolute
        temporary
        v-model='drawer'
    >
    Hello!
    </v-navigation-drawer>
</div>
</template>

<script>
export default {
    data() {
        return {
            drawer: true
        }
    }
}
</script>
