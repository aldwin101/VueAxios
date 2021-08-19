<template>
    <div>
        <button @click="snakeJoke">Snake Joke</button>
    </div>
        
</template>

<script>
    export default {
        name : 'SnakeJoke',
        computed: {
            underscoreSpace(){
                return this.$store.getters.changeToUnderscore;
            }
        },methods: {
            snakeJoke(){
                this.$store.state.joke = this.underscoreSpace;
            }
        }
    }
</script>

<style scoped>
    button {
        border-radius: 15px;
        background-color: black;
        color: white;
    }
</style>