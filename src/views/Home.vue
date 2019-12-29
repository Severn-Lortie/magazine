<template>
<div>
    <app-feed>
        <app-banner
        title="philosophy"
        subtitle="discovering the true meaning of things."
        heroSrc="https://images.unsplash.com/photo-1577083862499-67b99e7370ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1618&q=80"
        >
            <v-btn
                color="primary"
                rounded
                depressed
                class="mt-8"
            >
                subscribe
            </v-btn>
        </app-banner>
    </app-feed>
</div>
</template>

<script>
import AppFeed from '../components/AppFeed'
import AppBanner from '../components/home/AppBanner'

export default {
    components: {
        AppFeed,
        AppBanner
    }
}
</script>
