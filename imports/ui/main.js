import { Meteor } from 'meteor/meteor'
import { createApp } from 'vue'
import { VueMeteor } from 'vue-meteor-tracker'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import App from './App.vue'
import { router } from './router'

export default defineConfig({
  plugins: [
    vue(),
  ],

  meteor: {
    clientEntry: 'imports/ui/main.ts',
  },
})

Meteor.startup(() => {
  const app = createApp(App)
  app.use(router)
  app.use(VueMeteor)
  app.mount('#app')
})
