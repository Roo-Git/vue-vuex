<template>
  <button @click="addOne">Add 1</button>
  <button @click="addTwo">Add 2</button>
</template>

<script>
export default {
  name: "Change-counter",
  methods: {
    addOne() {
      this.$store.commit("increment");
    },
    addTwo() {
      this.$store.commit("increase", { value: 2 });
    },
  },
};
</script>

<style></style>
