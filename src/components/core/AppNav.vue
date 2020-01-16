<template>
<div>
    <v-navigation-drawer
        absolute
        temporary
        v-model='drawer'
    >
        <v-list
            nav
            shaped
        >
        <v-subheader class="text-uppercase">sections</v-subheader>
            <v-list-item-group v-model="item">
                <v-list-item
                    v-for='(link, i) in links'
                    :key='i'
                    :to="`/section/${link}`"
                    class="text-capitalize"
                >
                    <v-list-item-icon>
                        <v-icon>
                            mdi-magnify
                        </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>
                            {{link}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>

    </v-navigation-drawer>
</div>
</template>

<script>
export default {
    data() {
        return {
            item: 0
        }
    },
    computed: {
        drawer: {
            get() {
                return this.$store.state.drawer;
            },
            set(newVal) {
                this.$store.commit('setDrawer', newVal);
            }
        },
        links() {
            return this.$store.getters.uniqueArticleSections;
        }
    }
}
</script>
