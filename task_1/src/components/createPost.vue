<template>
    <v-container>
        <v-dialog  persistent v-model = generatePost width="400px" height="500px">
            <v-card>
                <v-card-title>
                    CREATE POST
                </v-card-title>
                <v-card-text>
                <v-text-field outlined label="Title" v-model="post.title"></v-text-field>
                <v-textarea outlined label="Post" v-model="post.body"></v-textarea>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="generate()">
                        Generate Post
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
import post from '@/services/Post.api'

export default {
    data:()=>({
        post:{
            title:undefined,
            body:undefined,
            userId: 1
        }
    }),
    computed:{
        generatePost(){
            return this.$store.state.generatePost
        }
    },
    methods:{
        async generate(){
            let res = await post.create(this.post)
            if(res.status === 201){
                this.$store.dispatch('setGeneratePost',false)
            }
        }
    }
    
}
</script>
<style scoped>

</style>