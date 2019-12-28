<template>
<base-card>
    <v-img
        src="https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1144&q=80"
        height='400'
    >
        <v-container class="fill-height">
            <v-row
                align='center'
                justify='center'
                class="mx-0"
            >
                <v-col
                    xs="12"
                    md="6"
                    class='text-left'
                >
                    <div class="typewriter">
                        <h3 class="display-3 white--text font-weight-bold ">
                            Philosophy 
                        </h3>
                    </div>  
                    <div class="headline white--text">
                        Discovering the true meaning of things
                    </div>
                    <v-btn
                        color="primary"
                        rounded
                        depressed
                        class="mt-8"
                    >
                        subscribe
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-img>
</base-card>
</template>

<script>
import BaseCard from '../base/BaseCard'

export default {
    components: {
        BaseCard
    },
}
</script>

<style scoped>

.typewriter {
    display: inline-block;
}

.typewriter h3 {
    overflow: hidden;
    /* Ensures the content is not revealed until the animation */
    border-right: .05em solid orange;
    /* The typwriter cursor */
    white-space: nowrap; 
    /* Keeps the content on a single line */
    margin: 0 auto;
    /* Gives that scrolling effect as the typing happens */
    letter-spacing: .03em;
    /* Adjust as needed */
    animation:
        typing 1.5s steps(40, end),
        blink-caret .75s step-end infinite;
}

@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}

@keyframes blink-caret {

    from,
    to {
        border-color: transparent
    }

    50% {
        border-color: #2A80D5;
    }
}
</style>
