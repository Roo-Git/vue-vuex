<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>

<script>
export default {
  name: "Favorite-value",
  computed: {
    counter() {
      return this.$store.state.nomalizedCounter;
    },
  },
};
</script>

<style></style>
