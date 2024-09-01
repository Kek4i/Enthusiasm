import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Импортируйте ваш файл роутинга

const app = createApp(App);

app.use(router);

router.afterEach((to, from) => {
    if (window.scrollY > 200) {
        window.scrollTo({ top: 200, behavior: 'auto' });
    } else {
        window.scrollTo(0, 0);
    }
});

app.mount('#app');
