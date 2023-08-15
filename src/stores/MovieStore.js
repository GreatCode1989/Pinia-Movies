import { defineStore } from "pinia";
import { watch } from "vue";

export const useMovieStore = defineStore('movieStore', {

    state: () => ({
        movies: [
            

        ],
        activeTab: 2
    }),
    getters: {
        watchedMovies() {
            return this.movies.filter((el) => el.watch)
        },
      totalCountMovies() {
        return this.movies.length
      }
    },
    actions: {
        setActiveTab(id) {
             this.activeTab = id
        },
        toggleWatch(id) {
            const idx = this.movies.findIndex((el) => el.id === id)
            this.movies[idx].watch = !this.movies[idx].watch
        },
        deleteMovies(id) {
           this.movies = this.movies.filter((el) => el.id !== id)
        }
    }
})