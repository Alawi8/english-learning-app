import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // استيراد Vue Router

// إنشاء التطبيق وربط Vue Router به
const app = createApp(App);

app.use(router); // تفعيل Vue Router
app.mount('#app');
