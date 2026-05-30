// Импортируем функцию createApp из Vue
import { createApp } from 'vue';

// Импортируем главный компонент нашего приложения - App.vue
import App from './App.vue';

// Создаем экземпляр приложения Vue
const app = createApp(App);

// Монтируем (вставляем) наше приложение в HTML-элемент с id="app"
// Этот элемент должен быть в нашем index.html файле
app.mount('#app');
