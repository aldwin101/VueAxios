<template>
  <div id="app">
    <JokeButton/>
    <div id="option">
      <NormalJoke/>
      <SnakeJoke/>
      <LoudJoke/>
    </div>
  </div>
</template>

<script>
import JokeButton from './components/JokeButton.vue'
import LoudJoke from './components/LoudJoke.vue'
import NormalJoke from './components/NormalJoke.vue'
import SnakeJoke from './components/SnakeJoke.vue'

export default {
  name: "App",
  components: {
    LoudJoke,
    NormalJoke,
    SnakeJoke,
    JokeButton
  },
};
</script>

<style>
body {
  background-color: rgb(140, 155, 113);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  row-gap: 3vh;
}
#option{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 20vw;
}
</style>
