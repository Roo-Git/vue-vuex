<template>
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  name: "The-counter",
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style></style>
