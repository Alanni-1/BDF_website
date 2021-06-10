import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-plus
import { ElButton, ElSelect } from 'element-plus';


let app = createApp(App)

app
  .use(ElButton)
  .use(ElSelect)
  .use(store)
  .use(router)
  .mount('#app')
