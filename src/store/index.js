import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: false,
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit("setAuth", { isAuth: true });
    },
    logout(context) {
      context.commit("setAuth", { isAuth: false });
    },
  },
  modules: {
    counterModule: {
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
      actions: {
        increment(context) {
          setTimeout(function () {
            context.commit("increment");
          }, 2000);
        },
        increase(context, payload) {
          setTimeout(function () {
            context.commit("increase", payload);
          }, 2000);
        },
      },
    },
  },
});

// rootState, rootGetters -> Parámetros para llegar al estado root si fuese necesario desde un modulo
