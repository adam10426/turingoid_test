<template>
<v-container>
    <v-sheet>
        <h2>Title: {{post.title}}</h2>
        <p>{{post.body}}</p>
    </v-sheet>
</v-container>
</template>
<script>
export default {
    computed:{
        post(){
            return this.$store.state.post
        }
    }
}
</script>