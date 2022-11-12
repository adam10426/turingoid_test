import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    post:{
      title:"mike",
      body:"this is for testing"

    },
    generatePost : false
  },
  getters: {

  },
  mutations: {
    SET_POST(state,payload){
      state.post.title = payload.title
      state.post.body = payload.body
    },
    SET_GENERATE_POST(state,payload){
      state.generatePost = payload
    }
  },
  actions: {
    setPostDetails({commit},postDetails){
      commit('SET_POST',postDetails)
      
    },
    setGeneratePost({commit},generatePost){
    
      commit('SET_GENERATE_POST',generatePost)
    }
  },
  modules: {
  }
})
