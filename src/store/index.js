import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: ''
  },
  mutations: {
    apiCall: function(state){
      axios.request({
      url : 'https://geek-jokes.sameerkumar.website/api?format=json',
      method: 'GET'
      }).then((response) => {
        state.joke = response.data.joke;
      }).catch((error) => {
          console.error(error);
      })
  }
  },
  actions: {},
  getters: {
    toUpperCase(state) {
      return state.joke.toUpperCase();
    },
    changeToUnderscore(state) {
      return state.joke.split(' ').join('_');
    },
    noModification(state) {
      return state.joke.toLowerCase().split('_').join(' ');
    }
  }
});
