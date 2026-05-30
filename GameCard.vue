<script setup>
import { ref } from 'vue';

const games = ref([
  {
    id: 1,
    title: 'Forza Horizon 6',
    developer: 'Playground Games',
    description: 'Гоночная игра с открытым миром.',
    genre: 'Racing, Open‑World',
    price: 5000,
    imageUrl: 'https://avatars.mds.yandex.net/i?id=68a7bb3aee9cba4a02877f524c361522_l-4548378-images-thumbs&n=13&n=13&w=432&h=576',
  },
  {
    id: 2,
    title: 'EA Sports FC 26',
    developer: 'EA Sports',
    description: 'Футбольный симулятор 2025',
    genre: 'Спортивный симулятор',
    price: 5499,
    imageUrl: 'https://avatars.mds.yandex.net/i?id=ef85ec5a2dd61ce97259f69173834fee_l-5449053-images-thumbs&n=13&n=13&w=230&h=290',
  },
  {
    id: 3,
    title: 'Horizon Zero Dawn',
    developer: 'Guerrilla Games',
    description: 'Машины захватили Землю.',
    genre: 'Action RPG',
    price: 1299,
    imageUrl: 'https://avatars.mds.yandex.net/get-entity_search/4731417/1265101418/SUx182_2x',
  },
  {
    id: 4,
    title: 'Red Dead Redemption 2',
    developer: 'Rockstar Games',
    description: 'История Артура Моргана.',
    genre: 'Western Action-Adventure',
    price: 2499,
    imageUrl: 'https://avatars.mds.yandex.net/get-entity_search/2304191/979384172/SUx182_2x',
  },
  {
    id: 5,
    title: 'Astro’s Playroom',
    developer: 'Team Asobi',
    description: 'Трёхмерный платформер.',
    genre: '3D‑платформер',
    price: 0,
    imageUrl: 'https://avatars.mds.yandex.net/i?id=fe75f22b502ebcfd001ae43fc413369f_l-10158550-images-thumbs&n=13&n=13&w=432&h=576',
  }
]);

const emit = defineEmits(['view-game']);
const openGameDetails = (id) => {
  emit('view-game', id);
};
</script>

<template>
  <div class="game-card-container">
    <h2 class="section-title">Хиты продаж</h2>
    <div class="separator-line"></div>
    
    <div v-for="gameData in games" :key="gameData.id" class="game-card-wrapper">
      <div class="game-card">
        <div class="card-image-wrapper">
          <img :src="gameData.imageUrl" :alt="gameData.title + ' cover'" class="game-image"/>
        </div>

        <div class="card-info">
          <h3 class="game-title">{{ gameData.title }}</h3>
          <p class="game-dev">{{ gameData.developer }}</p>
          <span class="game-label genre">{{ gameData.genre }}</span>
          <p class="game-description">{{ gameData.description }}</p>
        </div>

        <div class="card-footer">
          <span class="game-price">{{ gameData.price }} ₽</span>
          <button class="more-button" @click="openGameDetails(gameData.id)">подробнее</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 20px 0;
}

.separator-line {
  width: 100%;
  height: 1px;
  border-top: 2px dashed #4A4A6A;
  margin: 20px 0;
}

.section-title {
  text-align: center;
  color: #00BCD4;
  margin-bottom: 10px;
  font-size: 1.8em;
  text-shadow: 0 0 10px rgba(0, 188, 212, 0.6);
}

.game-card {
  background-color: #1f1f2f;
  border: 1px solid #4A4A6A;
  border-radius: 8px;
  width: 250px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
}

.game-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 10px 25px rgba(74, 74, 106, 0.7);
}

.card-image-wrapper {
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
}

.game-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.9) contrast(1.1);
}

.card-info {
  padding: 15px 15px 0 15px;
  flex-grow: 1;
}

.game-title {
  margin: 0 0 5px 0;
  font-size: 1.1em;
  color: #E0E0FF;
  text-shadow: 0 0 5px rgba(150,150,255,0.8);
  font-weight: bold;
}

.game-dev {
  font-size: 0.8em;
  color: #A0A0C0;
  margin-bottom: 8px;
  font-style: italic;
}

.game-label {
  display: inline-block;
  padding: 3px 8px;
  font-size: 0.7em;
  border-radius: 4px;
  font-weight: bold;
  margin-bottom: 10px;
}

.genre {
  background-color: #6200EA;
  color: #fff;
}

.game-description {
  font-size: 0.8em;
  color: #bbb;
  line-height: 1.3;
  margin-top: 10px;
}

.card-footer {
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #4A4A6A;
}

.game-price {
  font-size: 1.2em;
  font-weight: bold;
  color: #FFEB3B;
  text-shadow: 0 0 8px #FFEB3B;
}

.more-button {
  background-color: #00BCD4;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 3px 8px rgba(0, 188, 212, 0.5);
  margin-left: 10px;
}

.more-button:hover {
  background-color: #00ACC1;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 172, 193, 0.7);
}
</style>