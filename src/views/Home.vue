<template>
<div>
    <app-feed>
        <app-banner
            title="philosophy"
            subtitle="discovering the true meaning of things."
            heroSrc="https://images.unsplash.com/photo-1577083862499-67b99e7370ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1618&q=80"
            :main="true"
        >
            <home-dialog>

                <template scope="defaultScope">
                    <v-btn
                        color="primary"
                        rounded
                        depressed
                        class="mt-8"
                        v-on="defaultScope.on"
                    >
                        subscribe
                    </v-btn>
                </template>

            </home-dialog>
        </app-banner>
    </app-feed>
    
</div>
</template>

<script>
import AppFeed from '../components/AppFeed'
import AppBanner from '../components/home/AppBanner'
import HomeDialog from '../components/home/HomeDialog'

export default {
    components: {
        AppFeed,
        AppBanner,
        HomeDialog
    }
}
</script>
