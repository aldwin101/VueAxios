<template>
    <div>
        <button @click="loudJoke">Loud Joke</button>
    </div>
        
</template>

<script>

    export default {
        name : 'LoudJoke',
        computed: {
            allCaps(){
                return this.$store.getters.toUpperCase;
            }
        },
        methods: {
            loudJoke(){
                this.$store.state.joke = this.allCaps;
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