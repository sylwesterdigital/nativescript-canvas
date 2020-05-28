import Vue from "nativescript-vue";

import Home from "./components/Home";

import Canvas from 'nativescript-canvas-plugin/vue';
Vue.use(Canvas);

Vue.config.silent = (TNS_ENV === 'production')

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
