<template>
<v-parallax
    height="400"
    :src="heroSrc"
>
    <v-row
        align="center"
        justify="center"
        class="mb-12"
    >
        <v-col cols='5'>
            <v-chip
                label
                color="secondary text-uppercase"
            >
                {{section}}
            </v-chip>

            <h3 class="display-3 mt-2 text-capitalize ">
                {{title}}
            </h3>

        </v-col>
    </v-row>
</v-parallax>
</template>

<script>
export default {
    props: {
        title: String,
        section: String,
        heroSrc: String
    }
}
</script>

<style scoped>
</style>
