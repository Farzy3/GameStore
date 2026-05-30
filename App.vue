<script setup>
import GameCard from './components/icons/GameCard.vue';
import GameDetails from './components/icons/GameDetails.vue';

import { ref } from 'vue';

const currentView = ref(location.hash.slice(1) || '');

const selectedGameId = ref(null);

const goToCatalog = () => {
  currentView.value = '';
  location.hash = '';
};

const goToGameDetails = (id) => {
  selectedGameId.value = id;
  currentView.value = 'details';
  location.hash = `#game-${id}`;
};
</script>

<template>
  <div class="app-wrapper">
    <header class="main-header">
      <div class="logo">
        <span class="logo-text">Game</span>Store
      </div>

      <nav class="main-nav">
        <a href="#" @click.prevent="goToCatalog" class="nav-link">Главная</a>
      </nav>
    </header>

    <main class="content-area">
      <GameCard v-if="!currentView" @view-game="goToGameDetails" />
      <GameDetails v-else-if="currentView === 'details'" :game-id="selectedGameId" />
    </main>

    <footer class="main-footer">
      <p>© 2024 GameHub. Все права защищены.</p>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #0d0d1a;
  color: #e0e0ff;
  font-family: 'Roboto Mono', 'Consolas', monospace;
}

.app-wrapper {
  padding: 20px;
  max-width: 1200px;
  margin: 20px auto;
  background: url('https://www.transparenttextures.com/patterns/dark-matter.png');
  border-radius: 12px;
  box-shadow: 0 0 25px rgba(110, 110, 200, 0.4);
}

.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 25px;
  border-bottom: 2px dashed #4A4A6A;
  margin-bottom: 40px;
}

.logo {
  font-size: 2.2em;
  font-weight: bold;
  color: #00BCD4;
  text-shadow: 0 0 12px rgba(0, 188, 212, 0.8);
}

.logo-text {
  color: #E0E0FF;
}

.main-nav a {
  color: #FFEB3B;
  text-decoration: none;
  margin-left: 25px;
  font-size: 1.1em;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  position: relative;
}

.main-nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #00BCD4;
  transition: width 0.3s ease;
}

.main-nav a:hover {
  color: #fff;
  text-shadow: 0 0 9px #fff;
}

.main-nav a:hover::after {
  width: 100%;
}

.content-area h2 {
  text-align: center;
  color: #00BCD4;
  margin-bottom: 40px;
  font-size: 1.8em;
  text-shadow: 0 0 10px rgba(0, 188, 212, 0.6);
}

.main-footer {
  text-align: center;
  margin-top: 50px;
  padding-top: 25px;
  border-top: 2px dashed #4A4A6A;
  font-size: 0.85em;
  color: #777;
}

.main-footer p {
  margin: 0;
}
</style>