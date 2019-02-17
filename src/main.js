// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'

import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false


Vue.use(new VueSocketIO({
    debug: true,
    // Mettre le server nodejs
    connection: 'https://octaserve.suriteka.website',
    vuex: {
        // store,
        // actionPrefix: 'SOCKET_',
        // mutationPrefix: 'SOCKET_'
    }
}))

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
