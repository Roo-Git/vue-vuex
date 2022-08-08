import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  getters: {},
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {},
  modules: {},
});
