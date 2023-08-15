<template>
  <div>
    <div class="input">
      <form @submit.prevent="searchStore.getMovies(searchMovie)">
        <input
          type="text"
          class="input-field"
          placeholder="Введите фильм"
          v-model="searchMovie"
        />
      </form>
    </div>
  </div>
  <div>
    <Loader v-if="searchStore.loader" />
    <div v-else>
      <Movie
        v-for="movie of searchStore.movies"
        :key="movie.id"
        :movie="movie"
        :is-search="true"
      />
    </div>
  </div>
</template>

<script setup>
import Movie from "../components/Movie.vue";
import Loader from "../components/Loader.vue";
import { useSearchStore } from "../stores/SearchStore";
import { ref } from "vue";

const searchStore = useSearchStore();

const searchMovie = ref("");
</script>

<style lang="css" scoped>
.input {
  margin: 20px;
}

.input-field {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 500px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.input-field:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0px 0px 6px rgba(76, 175, 80, 0.5);
}
</style>
