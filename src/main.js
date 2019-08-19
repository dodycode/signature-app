import Vue from 'vue'
import App from './App.vue'
import VueSignaturePad from 'vue-signature-pad';

Vue.use(VueSignaturePad);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
