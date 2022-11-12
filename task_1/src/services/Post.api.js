import api from '@/services/BaseAPI'

export default {
async getAllPost(){
    const res = await api.get('/posts')
    return res.data
},
async create(postDetails){
    const res = await api.post('/posts',postDetails)
    return res
}

}

