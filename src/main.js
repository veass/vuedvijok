import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import * as store from './styless.js'

let app = createApp(App);
app.config.globalProperties.$db = store;
app.use(router).mount('#app');

// console.log(db.r1c4Item)
// App.use(styless);

// new Vue( {
//   el: '#app',
//   store,
//   render: h => h( App )
// } );