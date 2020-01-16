<template>
<v-app>
    <app-nav />
    <app-toolbar />
    <v-content>
        <router-view />
    </v-content>
    <app-footer />
</v-app>
</template>

<script>
import AppNav from './components/core/AppNav'
import AppToolbar from './components/core/AppToolbar'
import AppFooter from './components/core/AppFooter'

export default {
    components: {
        AppToolbar,
        AppNav,
        AppFooter
    }
}
</script>

<style>
/* app-wide fonts: roboto */

/* regular */
@font-face {
    font-family: 'Droid Serif';
    src: url('./assets/font/DroidSerif-Regular-webfont.woff');
}

/* bold */
@font-face {
    font-family: 'Droid Serif';
    src: url('./assets/font/DroidSerif-Bold-webfont.woff');
    font-weight: bold;
}

/* italic */
@font-face {
    font-family: 'Droid Serif';
    src: url('./assets/font/DroidSerif-Italic-webfont.woff');
    font-style: italic;
}

/* bold-italic */
@font-face {
    font-family: 'Droid Serif';
    src: url('./assets/font/DroidSerif-BoldItalic-webfont.woff');
    font-weight: bold;
    font-style: italic;
}

/* app-wide fonts: futura pt */
@font-face {
    font-family: 'Futura PT';
    src: url('./assets/font/FuturaPTMedium.woff');
}

/* app-wide style: blockquotes */

blockquote {
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 25px;
    border-left: 3px solid #DADADA;
    color: #8B8B8B;
}
</style>
