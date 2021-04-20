import Vue from 'vue';
import App from './index.vue';
import Burningui from '../lib/burning-ui';

Vue.use(Burningui);

new Vue({
    render: h => h(App)
}).$mount('#app');