<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-btn color="secondary" @click="createPost()">Create Post</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4" v-for="post in postsDetails" :key="post.id">
                <v-card class="line-clamp">
                    <v-card-title>
                        <p class="line-clamp-title">{{post.title}}</p>
                    </v-card-title>
                    <v-card-text >
                    <p class="line-clamp-body">{{post.body}}</p>
                    </v-card-text>  
                    <v-card-actions>
                        <v-btn color="primary" @click="displayPost(post.title,post.body)">View Post</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <create-post></create-post>
        <!-- <create-post></create-post> -->
        <!-- <createPost></createPost> -->
        <!-- <GeneratePost></GeneratePost> -->
    </v-container>
</template>
<script>
import post from '@/services/Post.api'
// import GeneratePost from '@/components/createPost'
import createPost from '@/components/createPost.vue'

export default {
    components:{
        createPost,
    },
    data : ()=>({
        postsDetails:[]
    }),
    methods:{
        displayPost(title,body){
            let postDetails = {}
            postDetails.title = title
            postDetails.body = body
            this.$store.dispatch('setPostDetails',postDetails)
            // console.log("redirecting")
            this.$router.push({name:"post"})
        },
        createPost(){
            this.$store.dispatch('setGeneratePost',true)
        }
    },

 async created(){
    this.postsDetails = await post.getAllPost()
 }   
}
</script>
<style scoped>
.line-clamp-body {
    overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: normal;

}
.line-clamp-title{
    overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  white-space: normal;
  }
</style>