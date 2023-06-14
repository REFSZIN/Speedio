import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import VueTheMask from 'vue-the-mask';

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(VueTheMask)
  .use(vuetify)
  .mount('#app')
