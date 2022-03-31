import { createStore } from 'vuex'

export default createStore({
  state: {
    msg: 'Este es una prueba',
    nombre: 'Flavio',
    apellido: 'Valladolid',
    amigos: [''],
    amigo: null
  },
  getters: {
    mensaje(state) {
      return state.msg;
    },
    nombreCompleto(state){
      return `${state.nombre} ${state.apellido}`
    }
  },
  mutations: {
    addAmigo(state) {
      state.amigos = [state.amigo,...state.amigos]
    }
  },
  actions: {
    addAmigoAction(context){
      context.commit('AddAmigo');
    }
  },
  modules: {
  }
})
