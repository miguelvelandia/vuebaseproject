import {
    EXAMPLE_CONFIG
} from './config.js'

export default {
    getPosts() {
        return window.axios.get(EXAMPLE_CONFIG.API_URL + '/posts')
    },
    getPost(id) {
        return window.axios.get(EXAMPLE_CONFIG.API_URL + '/posts/' + id )
    },
    
}
