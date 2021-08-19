<template>
    <div>
        {{this.$store.state.joke}}
        <div>
            <button @click="apiCall">Generate Joke</button>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'JokeButton',
        computed: {
            snakeJoke() {
                return this.$store.getters.snakeJoke;
            },
            loudJoke(){
                return this.$store.getters.allCaps;
            }
        },
        methods: {
            apiCall() {
                this.$store.commit('apiCall');
            }
        }
    }
</script>

<style scoped>
    button {
        border-radius: 5px;
        background-color: black;
        color: white;
    }
</style>