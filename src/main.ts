import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入入口css
import '../public/css/main.css'
import 'element-plus/lib/theme-chalk/base.css'
// element-plus
import {
  ElButton,
  ElSelect,
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElRow,
  ElCol,
  ElImage,
  ElIcon,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElCollapseTransition
} from 'element-plus'

let app = createApp(App)
app.component(ElCollapseTransition.name, ElCollapseTransition)
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
  .use(ElDropdown)
  .use(ElDropdownItem)
  .use(ElDropdownMenu)
  .use(store)
  .use(router)
  .mount('#app')
