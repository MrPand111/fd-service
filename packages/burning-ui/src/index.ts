import Vue from 'vue';
import App from './index.vue';
import * as ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Burningui from '../lib/burning-ui';
Vue.use(ElementUI);
Vue.use(Burningui);

new Vue({
    render: h => h(App)
}).$mount('#app');