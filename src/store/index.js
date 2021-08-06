import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[]

  },
  mutations: {
    todoPush(state,todo){
      state.todos.push(todo);
      console.log('todoPush完了');
      console.log(state.todos);
    }

  },
  actions: {

    todoPush({commit},todo){
      console.log('todoPush起動！！');
      commit('todoPush',todo);
    }

  },
  modules: {

  }
})
