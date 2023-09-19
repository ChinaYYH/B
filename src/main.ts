import './styles/default.css'
import './mock'
import './global'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { globalRegister } from './global'
const app = createApp(App)
app.use(globalRegister)
app.use(createPinia())
app.use(router)

app.mount('#app')
