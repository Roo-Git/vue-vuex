<template>
  <base-container title="Vuex"></base-container>
  <the-counter></the-counter>
  <favorite-value>hola</favorite-value>
  <change-counter></change-counter>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
