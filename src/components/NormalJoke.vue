<template>
    <div>
        <button @click="normalJoke">Normal Joke</button>
    </div>
        
</template>

<script>

    export default {
        name : 'NormalJoke',
        computed: {
            regularFont(){
                return this.$store.getters.noModification;
            }
        },
        methods: {
            normalJoke(){
                this.$store.state.joke = this.regularFont;
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