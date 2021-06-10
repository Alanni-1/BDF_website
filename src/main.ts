import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入入口css
import '../public/css/main.css'

// element-plus
import { ElButton, ElSelect, ElContainer, ElHeader, ElMain, ElFooter, ElRow, ElCol, ElImage, ElIcon } from 'element-plus'

let app = createApp(App)

app
  .use(ElButton)
  .use(ElSelect)
  .use(ElContainer)
  .use(ElHeader)
  .use(ElMain)
  .use(ElFooter)
  .use(ElRow)
  .use(ElCol)
  .use(ElImage)
  .use(ElIcon)
  .use(store)
  .use(router)
  .mount('#app')
