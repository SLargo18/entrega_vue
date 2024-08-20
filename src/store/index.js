import { createStore } from 'vuex'

    export default createStore({
      state: {
        eventos: []
      },
      mutations: {
        agregarEvento(state, evento) {
          state.eventos.push(evento)
        }
      },
      actions: {
      },
      getters: {
        eventosOrdenados(state) {
          return state.eventos.slice().sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
        }
      }
    })