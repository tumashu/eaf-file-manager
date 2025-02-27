import Vue from 'vue'
import App from './App.vue'

import AudioVisual from 'vue-audio-visual'
Vue.use(AudioVisual)

import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
