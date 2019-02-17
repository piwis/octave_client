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
<<<<<<< HEAD
    connection: 'https://octaserve.suriteka.website',
=======
    connection: 'http://55ff4128.ngrok.io',
>>>>>>> dfdf7f36be40e4e34a59c1d9142a556b786e65dc
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
