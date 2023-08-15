<template>
  <header class="header">
    <img src="./assets/img/logo.webp" alt="logo" class="header-logo" />
    <h2 class="header-title">My Favorite Movies</h2>
  </header>

  <main>
    <div class="tabs">
      <button
        :class="['btn', { 'btn-active': movieStore.activeTab === 1 }]"
        @click="setTab(1)"
      >
        Избранное
      </button>
      <button
        :class="['btn', { 'btn-active': movieStore.activeTab === 2 }]"
        @click="setTab(2)"
      >
        Поиск
      </button>
    </div>
    <div v-if="movieStore.activeTab === 2">
      <Search />
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <div>
        <h2>Просмотренные фильмы фильмы</h2>
        <Movie
          v-for="movie in movieStore.watchedMovies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
      <h2>Все фильмы</h2>
      <Movie
        v-for="movie in movieStore.movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <div v-else class="search">Поиск</div>
    <div>total: {{ movieStore.totalCountMovies }}</div>
  </main>
</template>

<script setup>
import Search from "./components/Search.vue";
import Movie from "./components/Movie.vue";
import { useMovieStore } from "./stores/MovieStore";

const setTab = (id) => {
  movieStore.setActiveTab(id);
};

const movieStore = useMovieStore();
</script>

<style lang="css">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.header-logo {
  max-width: 50px;
  margin: 10px;
}

.header-title {
  font-size: 24px;
  margin-left: 10px;
}

.btn {
  border: none;
  width: 120px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: aliceblue;
  transition: background-color 0.3s, color 0.3s;
}

.btn-active {
  background-color: #4caf50;
  color: white;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.movies {
  margin-top: 20px;
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
  color: #555;
}
</style>
