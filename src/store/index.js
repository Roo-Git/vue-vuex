import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
    finalCounter(state) {
      return state.counter;
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
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
