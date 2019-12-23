import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        light: true,
        themes: {
            light: {
                primary: '#41b3a3',
                secondary: '#c38d9e',
                accent: 'e27d60',
                error: '#e8a876'
            }
        }
    }
});
