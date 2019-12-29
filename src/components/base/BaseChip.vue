<template>
<v-chip
    label
    v-bind="$attrs"
    class="text-uppercase"
    @click.stop=""
>
    {{text}}
</v-chip>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>
