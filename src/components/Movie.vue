<template>
  <div class="movie">
    <img src="" alt="" class="movie-img" />
    <div>
      <div class="movie-name">
        {{ movie.id }}
      </div>
      <div class="movie-buttons" v-if="!isSearch">
        <button class="movie-accept" @click="movieStore.toggleWatch(movie.id)">
          <span v-if="!movie.watch">Смотреть</span>
          <span v-else>Просмотрено</span>
        </button>
        <button
          class="delete-button"
          @click="movieStore.deleteMovies(movie.id)"
        >
          Удалить
        </button>
      </div>
      <div class="movie-buttons" v-else>
        <button class="movie-accept" @click="searchStore.addToUserMovies(movie)">
          Добавить в избранное
        </button>
       
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "../stores/MovieStore";
import { useSearchStore } from "../stores/SearchStore";

const movieStore = useMovieStore();
const searchStore = useSearchStore()

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: false
  }
});
</script>

<style lang="css" scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  padding: 10px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.movie-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.movie-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.movie-buttons {
  display: flex;
  flex-direction: column;
}

.movie-accept {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  transition: background-color 0.3s;
}

.movie-accept:hover {
  background-color: #45a049;
}

.delete-button {
  margin-top: 10px;
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  background-color: #f44336;
  color: white;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #d32f2f;
}
</style>
