<template>
<div>
    <app-feed>
        <app-banner
            title="Studium Sapientiae"
            subtitle="This issue: the philosophy of privacy in the modern era."
            heroSrc="https://images.unsplash.com/photo-1493997575474-58d1db687da3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            :main="true"
        >
            <home-dialog>

                <template slot-scope="defaultScope">
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
