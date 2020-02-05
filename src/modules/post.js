import PostAPI from '../api/post.js'

export const posts = {
  /*
  Defines the state being monitored for the module.
  */
  state: {
    posts: [],

  },

  /*
  Defines the actions used to retrieve the data.
  */
  actions: {
    loadPosts({
      commit
    }, {
      moduel
    }) {
      PostAPI.getPosts()
      .then(response => response.data)        
      .then(data => {
          commit('setPost', data)
          //panel_refresh($(moduel))
        })
        .catch(error => {
          console.log(error);
        });
    },

    getPost({
      commit,
      dispatch
    }, id) {
      return PostAPI.getPost(id)
        .then(response => response.data)
        .catch(error => {
          console.log(error);
        });
    },


  },

  /*
  Defines the mutations used
  */
  mutations: {
    setPost(state, post) {
      state.posts = post
    }
  },

  /*
  Defines the getters used by the module.
  */
  getters: {
    getPosts(state) {
      return state.posts
    }
  }
}
