// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/router/routes';
import store from '@/store';
import Mint from 'mint-ui';

Vue.use(Mint);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#ycg-app');
