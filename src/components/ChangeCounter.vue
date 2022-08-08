<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  name: "Change-counter",
  methods: {
    addOne() {
      this.$store.commit("increment");
    },
  },
};
</script>

<style></style>
