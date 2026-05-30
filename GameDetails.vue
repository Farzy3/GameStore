<template>
  <div v-if="selectedGame" class="game-details">
    <h2>{{ selectedGame.title }}</h2>
    <img :src="selectedGame.imageUrl" :alt="selectedGame.title + ' cover'" class="game-image"/>
    <p><strong>Жанр:</strong> {{ selectedGame.genre }}</p>
    <p><strong>Разработчик:</strong> {{ selectedGame.developer }}</p>
    <p><strong>Цена:</strong> {{ selectedGame.price }} ₽</p>
    <p><strong>Описание:</strong></p>
    <p>{{ selectedGame.fullDescription }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  gameId: Number
});

const games = ref([
  {
    id: 1,
    title: 'Forza Horizon 6',
    developer: 'Playground Games',
    description: 'Гоночная игра с открытым миром.',
    genre: 'Racing, Open‑World',
    price: 5000,
    imageUrl: 'https://avatars.mds.yandex.net/i?id=68a7bb3aee9cba4a02877f524c361522_l-4548378-images-thumbs&n=13&n=13&w=432&h=576',
    fullDescription: `
      Forza Horizon 6 — гоночная игра с открытым миром, шестая часть серии Forza Horizon, продолжение Forza Horizon 5. Разрабатывается студией Playground Games, издателем выступает Xbox Game Studios.
    `,
  },
  {
    id: 2,
    title: 'EA Sports FC 26',
    developer: 'EA Sports',
    description: 'Футбольный симулятор 2025',
    genre: 'Спортивный симулятор',
    price: 5499,
    imageUrl: 'https://avatars.mds.yandex.net/i?id=ef85ec5a2dd61ce97259f69173834fee_l-5449053-images-thumbs&n=13&n=13&w=230&h=290',
    fullDescription: `
      EA Sports FC 26 — футбольный симулятор от компании Electronic Arts, выпущенный в 2025 году. Это третья часть серии под брендом EA Sports FC после прекращения сотрудничества с FIFA в 2022 году.
    `,
  },
  {
    id: 3,
    title: 'Horizon Zero Dawn',
    developer: 'Guerrilla Games',
    description: 'Машины захватили Землю.',
    genre: 'Action RPG',
    price: 1299,
    imageUrl: 'https://avatars.mds.yandex.net/get-entity_search/4731417/1265101418/SUx182_2x',
    fullDescription: `
      Horizon Zero Dawn — это приключенческая игра, действие которой разворачивается в мире будущего, где машины стали доминирующей силой.
      Игроки берут на себя роль охотницы Элой, исследующей тайны прошлого человечества.
    `,
  },
  {
    id: 4,
    title: 'Red Dead Redemption 2',
    developer: 'Rockstar Games',
    description: 'История Артура Моргана.',
    genre: 'Western Action-Adventure',
    price: 2499,
    imageUrl: 'https://avatars.mds.yandex.net/get-entity_search/2304191/979384172/SUx182_2x',
    fullDescription: `
      Red Dead Redemption 2 — это эпическая история Артура Моргана и банды Ван дер Линде в Америке XIX века.
      Погрузитесь в открытый мир Дикого Запада с реалистичным окружением и глубокими персонажами.
    `,
  },
  {
    id: 5,
    title: 'Astro’s Playroom',
    developer: 'Team Asobi',
    description: 'Трёхмерный платформер.',
    genre: '3D‑платформер',
    price: 0,
    imageUrl: 'https://avatars.mds.yandex.net/i?id=fe75f22b502ebcfd001ae43fc413369f_l-10158550-images-thumbs&n=13&n=13&w=432&h=576',
    fullDescription: `
      Astro’s Playroom — трёхмерный платформер, в котором игрок управляет главным персонажем по имени Astro Bot с помощью контроллера DualSense. Astro Bot способен прыгать, парить, наносить удары врагам и предметам, а также использовать атаку во вращении.
    `,
  }
]);

const selectedGame = ref(null);

onMounted(() => {
  selectedGame.value = games.value.find(game => game.id === props.gameId);
});
</script>

<style scoped>
.game-details {
  padding: 20px;
  background-color: rgba(150,150,255,0.8);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.game-image {
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  display: block;
}
</style>